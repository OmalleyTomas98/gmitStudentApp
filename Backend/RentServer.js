const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); // Environment variables in .env

const app = express();
const port = process.env.PORT || 5000; //Server port

app.use(cors());
app.use(express.json()); // Parse json

const uri = process.env.ATLAS_URI; //Database URI
mongoose.connect('mongodb+srv://User:123@rent-nfvcr.mongodb.net/test?retryWrites=true&w=majority',
        {useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true}// MongoDB Updates
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

const rentsRouter = require('./routes/rents');

app.use('rents', rentsRouter);

app.listen(port, () => {
    console.log('Server is running on port: ${port}');
});