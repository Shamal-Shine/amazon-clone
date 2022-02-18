const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe");
const { request, response } = require("express");
('pk_test_51KU9hdSGin8nxwn7aM7L5myYeUQStuqvD4RjwAwlkV7EXOwUsXecgu6TL2ofZypEvrHMkBQjLjLkpRKN0k1Ytmo300uc36QYqx')

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payment/create', async (request, response) => {
    const total = request.query.total;
    
    console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });

});




exports.api = functions.https.onRequest(app);
