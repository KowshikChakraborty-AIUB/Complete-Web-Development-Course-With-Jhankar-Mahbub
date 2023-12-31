const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const port = process.env.PORT || 5000;


//middleware

app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hxgse1v.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();


    const userCollections = client.db('bistroBossDB').collection('users');
    const menuCollections = client.db('bistroBossDB').collection('menu');
    const reviewCollections = client.db('bistroBossDB').collection('reviews');
    const cartCollections = client.db('bistroBossDB').collection('carts');
    const paymentCollections = client.db('bistroBossDB').collection('payments');

    //jwt related api
    app.post('/jwt', async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
      res.send({ token });
    })

    //middlewares
    const verifyToken = (req, res, next) => {
      if (!req.headers.authorization) {
        return res.status(401).send({ message: 'unauthorized access' })
      }
      const token = req.headers.authorization.split(' ')[1];
      //console.log(token);
      // if (!token) {
      //   return res.status(401).send({ message: 'unauthorized access' })
      // }
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: 'unauthorized access' })
        }
        req.decoded = decoded;
        next();
      })
    }

    //use verifyAdmin after verifyToken

    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const query = { email: email };
      const user = await userCollections.findOne(query);
      const isAdmin = user?.role === 'admin';
      if (!isAdmin) {
        return res.status(403).send({ message: 'forbidden access' })
      }
      next();

    }

    //users related api
    app.get('/users', verifyToken, verifyAdmin, async (req, res) => {
      const result = await userCollections.find().toArray();
      res.send(result);
    })

    app.get('/users/admin/:email', verifyToken, async (req, res) => {
      const email = req.params.email;
      if (email !== req.decoded.email) {
        return res.status(403).send({ message: 'forbidden access' })
      }
      const query = { email: email };
      const user = await userCollections.findOne(query);
      let admin = false;
      if (user) {
        admin = user?.role === 'admin';
      }
      res.send({ admin });
    })

    app.post('/users', async (req, res) => {
      const user = req.body;
      //insert email if user doesn't exist
      //it can be done in many ways (1. email unique, 2. upsert, 3. simple checking)
      const query = { email: user.email };
      const existingUser = await userCollections.findOne(query);
      if (existingUser) {
        return res.send({ message: 'user already exists', insertedId: null });
      }
      const result = await userCollections.insertOne(user);
      res.send(result);
    })

    app.patch('/users/admin/:id', verifyToken, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          role: 'admin'
        }
      }
      const result = await userCollections.updateOne(filter, updatedDoc);
      res.send(result);
    })

    app.delete('/users/:id', verifyToken, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollections.deleteOne(query);
      res.send(result);
    })

    //menu related api
    app.get('/menu', async (req, res) => {
      const result = await menuCollections.find().toArray();
      res.send(result);
    })
    app.get('/menu/:id', async (req, res) => {
      const id = req.params.id;
      //menu items were added manually to database with an manual _id. So, no objectId was created by mongodb. That's why the following query has been written like this. [const query = { _id: id };]
      const query = { _id: id };
      const result = await menuCollections.findOne(query);
      console.log(result);
      res.send(result);
    })
    app.post('/menu', verifyToken, verifyAdmin, async (req, res) => {
      const menuItem = req.body;
      const result = await menuCollections.insertOne(menuItem);
      res.send(result);
    })
    app.patch('/menu/:id', async (req, res) => {
      const menuItem = req.body;
      const id = req.params.id;
      //menu items were added manually to database with an manual _id. So, no objectId was created by mongodb. That's why the following filter has been written like this. [const filter = { _id: id };]
      const filter = { _id: id };
      const updatedDoc = {
        $set: {
          name: menuItem.name,
          category: menuItem.category,
          price: menuItem.price,
          recipe: menuItem.recipe,
          image: menuItem.image
        }
      }

      const result = await menuCollections.updateOne(filter, updatedDoc);
      res.send(result);
    })
    app.delete('/menu/:id', verifyToken, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await menuCollections.deleteOne(query);
      res.send(result);
    })
    app.get('/reviews', async (req, res) => {
      const result = await reviewCollections.find().toArray();
      res.send(result);
    })

    //carts collections
    app.get('/carts', async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const result = await cartCollections.find(query).toArray();
      res.send(result);
    })
    app.post('/carts', async (req, res) => {
      const cartItem = req.body;
      const result = await cartCollections.insertOne(cartItem);
      res.send(result);
    })

    app.delete('/carts/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollections.deleteOne(query);
      res.send(result);
    })

    //payment intent
    app.post('/create-payment-intent', async (req, res) => {
      const { price } = req.body;
      const amount = parseInt(price * 100);

      console.log('amount inside payment intent', amount);

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd',
        payment_method_types: [
          'card'
        ]
      });
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    })

    app.get('/payments/:email', verifyToken, async (req, res) => {
      const query = { email: req.params.email };
      if (req.params.email !== req.decoded.email) {
        return res.status(403).send({ message: 'forbidden access' });
      }
      const result = await paymentCollections.find(query).toArray();
      res.send(result);
    })

    app.post('/payments', async (req, res) => {
      const payment = req.body;
      const result = await paymentCollections.insertOne(payment);

      //delete each item from the carts.
      console.log('payment info', payment);

      const query = {
        _id: {
          $in: payment.cartIds.map(id => new ObjectId(id))
        }
      }

      const deleteResult = await cartCollections.deleteMany(query);

      res.send({ result, deleteResult });
    })

    //stats or analytics

    app.get('/adminStats', verifyToken, verifyAdmin, async (req, res) => {
      const users = await userCollections.estimatedDocumentCount();
      const menuItems = await menuCollections.estimatedDocumentCount();
      const orders = await paymentCollections.estimatedDocumentCount();

      //this is not the best way to calculate revenue
      // const payments = await paymentCollections.find().toArray();
      // const revenue = payments.reduce((total, payment) => total + payment.price, 0);


      //better way to calculate revenue
      const result = await paymentCollections.aggregate([
        {
          $group: {
            _id: null,
            revenue: { $sum: '$price' }
          }
        }
      ]).toArray();

      const revenue = result.length > 0 ? result[0].revenue : 0;

      res.send({
        users,
        menuItems,
        orders,
        revenue
      })
    })

    //using aggregate pipeline
    app.get('/orderStats', verifyToken, verifyAdmin, async (req, res) => {
      const result = await paymentCollections.aggregate([
        {
          $unwind: '$menuIds'
        },
        {
          $lookup: {
            from: 'menu',
            localField: 'menuIds',
            foreignField: '_id',
            as: 'menuItems'
          }
        },
        {
          $unwind: '$menuItems'
        },
        {
          $group: {
            _id: '$menuItems.category',
            quantity: { $sum: 1 },
            revenue: { $sum: '$menuItems.price' }
          }
        },
        {
          $project: {
            _id: 0,
            category: '$_id',
            quantity: '$quantity',
            revenue: '$revenue'
          }
        }
      ]).toArray();

      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('boss is eating');
})

app.listen(port, () => {
  console.log(`bistro boss is eating on port ${port}`);
})