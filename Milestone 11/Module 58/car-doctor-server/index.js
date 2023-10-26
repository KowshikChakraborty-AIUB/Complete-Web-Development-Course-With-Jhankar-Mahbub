const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();


//middleware
app.use(cors());
app.use(express.json());


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

        const serviceCollections = client.db('carDoctorDB').collection('services')
        const orderCollections = client.db('carDoctorDB').collection('orders')

        //auth related api
        app.post('/jwt', async(req, res) => {
            const user = req.body;
            console.log(user);
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'})
            res
            .cookie('token', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'none'
            })
            .send({success: true});
        })

        //services
        app.get('/services', async (req, res) => {
            const cursor = serviceCollections.find();
            const result = await cursor.toArray();
            res.send(result);
        })
        app.get('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const options = {
                // Include only the `title` and `imdb` fields in the returned document
                projection: { service_id: 1, title: 1, price: 1, img: 1 },
            };
            const result = await serviceCollections.findOne(query, options);
            res.send(result);
        })

        //orders
        app.get('/orders', async (req, res) => {
            let query = {};
            if(req.query?.email){
                query= {email: req.query.email}
            }
            const result = await orderCollections.find(query).toArray();
            res.send(result);
        })

        app.post('/orders', async (req, res) => {
            const order = req.body;
            const result = await orderCollections.insertOne(order);
            res.send(result);
        })

        app.patch('/orders/:id', async (req, res) => {
            const id = req.params.id;
            const filter = {_id : new ObjectId(id)};
            const updatedOrders = req.body;
            const updatedOrder = {
                $set : {
                    status : updatedOrders.status
                }
            }
            const result = await orderCollections.updateOne(filter, updatedOrder)
            res.send(result);
        })

        app.delete('/orders/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id : new ObjectId(id)};
            const result = await orderCollections.deleteOne(query);
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
    res.send('car doctor server is running');
})

app.listen(port, () => {
    console.log(`car doctor server is running on port ${port}`);
})