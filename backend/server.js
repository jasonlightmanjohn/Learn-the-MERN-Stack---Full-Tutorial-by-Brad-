const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); //middlewarer
app.use(express.json());//middleware able to parse json

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

const connection = mongoose.connection;
connection.once('open', ()=> {
     console.log("MongoDB database connection established successfully")
}).on('error', error => console.log('Error conecting to MongoLab', error));

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// write above this line 
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});