const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
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

    //users related api
    app.get('/users', async(req, res) => {
      const result = await userCollections.find().toArray();
      res.send(result);
    })

    app.post('/users', async(req, res) => {
      const user = req.body;
      //insert email if user doesn't exist
      //it can be done in many ways (1. email unique, 2. upsert, 3. simple checking)
      const query = {email: user.email};
      const existingUser = await userCollections.findOne(query);
      if(existingUser){
        return res.send({message: 'user already exists', insertedId: null});
      }
      const result = await userCollections.insertOne(user);
      res.send(result);
    })

    app.patch('/users/admin/:id', async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const updatedDoc = {
        $set : {
          role: 'admin'
        }
      }
      const result = await userCollections.updateOne(filter, updatedDoc);
      res.send(result);
    })

    app.delete('/users/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await userCollections.deleteOne(query);
      res.send(result);
    })

    //menu related api
    app.get('/menu', async(req, res) => {
        const result = await menuCollections.find().toArray();
        res.send(result);
    })
    app.get('/reviews', async(req, res) => {
        const result = await reviewCollections.find().toArray();
        res.send(result);
    })

    //carts collections
    app.get('/carts', async(req, res) => {
      const email = req.query.email;
      const query = {email: email};
      const result = await cartCollections.find(query).toArray();
      res.send(result);
  })
    app.post('/carts', async(req, res) => {
      const cartItem = req.body;
      const result = await cartCollections.insertOne(cartItem);
      res.send(result);
    })

    app.delete('/carts/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id : new ObjectId(id)};
      const result = await cartCollections.deleteOne(query);
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