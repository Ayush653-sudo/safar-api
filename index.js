const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// MongoDB connection

//const uri ="mongodb+srv://ayushsinght70:QGFeh26lZGE9HyDc@mongodb.net/?retryWrites=true&w=majority";
const uri ="mongodb+srv://ayushsinght70:QGFeh26lZGE9HyDc@cluster0.7yhlhf7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//mongoose.set("strictQuery", false);
mongoose.connect(uri);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes
app.use('/api/users', require('./router/users'));
app.use('/api/rides', require('./router/ride'));
app.use('/api/vehicles', require('./router/vehicles'));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
