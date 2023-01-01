require('dotenv').config()
const mongoose = require('mongoose')

const mongoConnection = mongoose.connect('mongodb+srv://lautaroRocha:alaska2021@cluster0.n0ll68h.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{console.log('Connection established')})
    .catch(error => console.log(error));
    mongoose.set('strictQuery', false)

module.exports = mongoConnection