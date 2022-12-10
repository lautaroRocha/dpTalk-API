const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique: true
    }, 
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
    }
})

const User = mongoose.model('users', userSchema);



module.exports = {User}


// {
//     "firstName": "Testing",
//     "lastName": "Order",
//     "delivery" : "home delivery",
//     "cardEXP": 0426,
//     "cardID" : 5465121657984,    
//     "order": [
//          {
//         "_id" : 215649876551,
//         "price" : 10000000,
//         "quantity": 2,
//         "title": "ASdas",
//         "type": "indumentaria"    
//          },{
//         "_id" : 215649876551,
//         "price" : 10000000,
//         "quantity": 2,
//         "title": "ASdas",
//         "type": "indumentaria" 
//         }]
//     }