const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB Connection
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function () {
    // Connected To Mongodb Server
    console.log("Connected To Mongodb Server");
});

mongoose.connect("mongodb://localhost/mongodb_tutorial");

// Define Model
const Book = require('./models/book');

const port = process.env.PORT || 8080;

const router = require('./routes')(app, Book);

app.listen(port, function () {
    console.log(`Express server has started on port ${port}`);
});