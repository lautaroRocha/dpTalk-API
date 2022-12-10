const express = require('express')
require('dotenv').config()
const app = express();
const port = process.env.PORT
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect('mongodb://127.0.0.1:27017/Cyclops')
    .then(()=>{console.log('Connection established')})
    .catch(error => console.log(error));
mongoose.set('strictQuery', true)

app.use(express.json())  
app.use(express.urlencoded( {extended : true } ))
app.use(cors())


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    }
 );

