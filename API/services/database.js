require('dotenv').config();
const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URL || "mongodb://localhost:27017";
const dbName = process.env.MONGO_DB || "mydb";
const client = new MongoClient(uri);
const db = client.db(dbName);

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://mongo:27017/mydatabase', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     auth: {
//         user: 'root',
//         password: 'example'
//     }
// });

module.exports = {
    db: db,
    client: client
};