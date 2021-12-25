const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
    ('sk_test_51KAUUgSA2SzqnDLLbi8DWTYWVeYsXHefrIcKQ2RwUpBPmBvh2ReVFFU7Rr6jEgLOALJE3b5iWG5qU7oauxoaAMSy008z0ILYHg');

// API

// App Config
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API route
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
    const total = req.query.total; 

    console.log("Payment recieved for ", total);
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    // OK - Created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(app);

