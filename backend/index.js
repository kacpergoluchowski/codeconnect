require('dotenv').config()
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bp = require('body-parser');
const app = express();
const port = 5000;
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGO_URL);

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Serwer działa!")
})

app.post('/mail', (req, res) => {
    console.log(process.env.REACT_APP_MONGO_URL);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "kgoluchowski112@gmail.com",
            pass: "uyzaetzqltoqwllk"
        }
    })

    var mailOptions = {
        from: 'kgoluchowski112@gmail.com',
        to: req.body.email,
        subject: "Thanks for subscribe!",
        text: "Thanks for subscribe!"
    };
    
    transporter.sendMail(mailOptions, function(err, info) {
        if(err)
            console.log(err)
        else
            console.log("Email sent: " + info.response);
    })
    
    res.status(200).end();
})

app.post('/register', (req, res) => {
    checkEmail(req.body.email, req.body.password);
    res.status(200).end();
})

app.listen(port, () => {
    console.log("Aplikacja wystartowała!");
})

async function checkEmail(email, password) {
    console.log('ok!')
    try {
        const database = client.db('codeconnect-users-data');
        const users = database.collection('users');
        const query = {email: email};
        const result = await users.findOne(query);
        if(result == null)
            insertDB(email, password)
        else
            console.log('email juz istnieje w db')
    }
    catch(err) {
        console.log(err);
    }
}  

async function insertDB(email, password) {
    try {
        const database = client.db('codeconnect-users-data');
        const users = database.collection('users');
        const doc = {
            email: email,
            password: password
        }
        const result = await users.insertOne(doc);
        console.log('rejestracja przebiegła pomyślnie!', result.insertedId);
    }
    catch(err) {
        console.log(err);
    }
}