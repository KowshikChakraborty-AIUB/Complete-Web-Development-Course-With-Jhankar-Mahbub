const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();


//middleware
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hxgse1v.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


//custom middleware
const logger = async (req, res, next) => {
    console.log('called:', req.host, req.originalUrl);
    next();
}

const varifyToken = async (req, res, next) => {
    const token = req.cookies?.token;
    console.log('Token in middleware', token);
    if (!token) {
        return res.status(401).send({ message: 'Not Authorized!' });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        //error
        if (err) {
            console.log(err);
            return res.status(401).send({ message: 'Unauthorized!' });
        }
        // if token is valid, then decoded
        console.log('Value in the token', decoded);
        req.user = decoded;
        next();
    })
}

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const serviceCollections = client.db('carDoctorDB').collection('services')
        const orderCollections = client.db('carDoctorDB').collection('orders')

        //auth related api
        app.post('/jwt', logger, async (req, res) => {
            const user = req.body;
            console.log(user);
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
            res
                .cookie('token', token, {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'none'
                })
                .send({ success: true });
        })

        //services
        app.get('/services', logger, async (req, res) => {
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
        app.get('/orders', logger, varifyToken, async (req, res) => {
            //console.log(req.cookies.token);
            console.log('user in the valid token', req.user);
            let query = {};
            if (req.query?.email) {
                query = { email: req.query.email }
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
            const filter = { _id: new ObjectId(id) };
            const updatedOrders = req.body;
            const updatedOrder = {
                $set: {
                    status: updatedOrders.status
                }
            }
            const result = await orderCollections.updateOne(filter, updatedOrder)
            res.send(result);
        })

        app.delete('/orders/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
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