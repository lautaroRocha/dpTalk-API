const mongoose = require('mongoose');
const Joi = require('joi')
const validateRequest = require('../middleware/validateRequest')

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique: true
    }, 
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    }
})

const User = mongoose.model('users', userSchema);

const ValidateUser = (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string().min(4).max(30).alphanum()
            .messages({
          'string.empty': "Ingresa un nombre de usuario",
          'string.min': "El nombre de usuario debe tener 4 letras mínimo",
          'string.alphanum' : 'El nombre de usuario no puede contener carácteres especiales o espacíos vacíos',
          'string.max': "El nombre de usuario debe tener 30 letras máximo",
        }),
        email: Joi.string().email()
            .messages({
            'string.empty': "Ingresa un email",
            'string.email' : "Ingresa un email válido"
          }),
        password: Joi.string().min(9).alphanum()
            .messages({
              'string.min' : 'La contraseña debe tener 9 carácteres como mínimo',
              'string.alphanum' : 'La contraseña no puede contener carácteres especiales o espacíos vacíos',
              'string.empty': "Ingrese una contraseña",

            })
    });
    validateRequest(req, res, next, schema);
}


module.exports = {User, ValidateUser}


