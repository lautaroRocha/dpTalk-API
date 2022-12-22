const mongoose = require('mongoose')
require('dotenv').config()

const mongoConnection = mongoose.connect(process.env.MONGO_URI)
    .then(()=>{console.log('Connection established')})
    .catch(error => console.log(error));
    mongoose.set('strictQuery', false)

module.exports = mongoConnection