const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

//middleware
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hxgse1v.mongodb.net/?retryWrites=true&w=majority`;

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

    const coffeeCollections = client.db('coffeeDB').collection('coffee');
    const userCollections = client.db('coffeeDB').collection('user');

    app.get('/coffee', async (req, res) => {
      const cursor = coffeeCollections.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/coffee/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollections.findOne(query);
      res.send(result);
    })

    app.post('/coffee', async (req, res) => {
      const newCoffee = req.body;
      console.log(newCoffee);
      const result = await coffeeCollections.insertOne(newCoffee);
      res.send(result);
    })

    app.put('/coffee/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedCoffee = req.body;
      const coffee = {
        $set: {
          name: updatedCoffee.name,
          quantity: updatedCoffee.quantity,
          supplier: updatedCoffee.supplier,
          taste: updatedCoffee.taste,
          category: updatedCoffee.category,
          details: updatedCoffee.details,
          photoURL: updatedCoffee.photoURL
        }
      }

      const result = coffeeCollections.updateOne(filter, coffee, options);
      res.send(result);
    })

    app.delete('/coffee/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollections.deleteOne(query);
      res.send(result);
    })

    //user related api's

    app.get('/users', async (req, res) => {
      const cursor = userCollections.find();
      const users = await cursor.toArray();
      res.send(users);
    })

    app.post('/users', async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await userCollections.insertOne(user);
      res.send(result);
    })

    app.patch('/users', async (req, res) => {
      const user = req.body;
      const filter = {email : user.email}

      const updatedUser = {
        $set : {
          lastLoggedAt : user.lastLoggedAt
        }
      }

      const result = await userCollections.updateOne(filter, updatedUser)
      res.send(result);
    })

    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollections.deleteOne(query);
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
  res.send('Coffee Making Server is Running');
})


app.listen(port, () => {
  console.log(`Coffee Server is Running on Port ${port}`);
})