const express = require('express')
require('dotenv').config()
const app = express();
const port = process.env.PORT
const mongoose = require('mongoose')
const cors = require('cors')
const router = require("./routes/router")

mongoose.connect('mongodb+srv://lautaroRocha:alaska2021@cluster0.n0ll68h.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{console.log('Connection established')})
    .catch(error => console.log(error));
    mongoose.set('strictQuery', false)


app.use(express.json())  
app.use(express.urlencoded( {extended : true } ))
app.use(cors())


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    }
 );

app.use(router)

app.get('/', (req, res)=>{res.send('ok boy')})
