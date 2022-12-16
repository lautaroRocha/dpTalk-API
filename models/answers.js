const mongoose = require('mongoose');
const Joi = require('joi')
const validateRequest = require('../middleware/validateRequest')

const answerSchema = new mongoose.Schema({
    author : {
        type : String,
        required : true
    }, 
    question : {
        type : String,
        required : true
    },
    body : {
        type : String,
        require : true
    },
    status : {
        type : Boolean,
        required : false,
        default : false
    },
    repliedOn : {
        type : Object,
        required: false,
        default: new Date().toJSON()
    }
})

const Answer = mongoose.model('answers', answerSchema);

const ValidateAnswer = (req, res, next) => {
    const schema = Joi.object({
        author: Joi.string().min(4).max(30).alphanum()
        .messages({
            'string.empty': "Ingresa un autor de la respuesta",
            'string.min': "El nombre de autor debe tener 4 letras mínimo",
            'string.alphanum' : 'El nombre de autor no puede contener carácteres especiales o espacíos vacíos',
            'string.max': "El nombre de autor debe tener 30 letras máximo",
        }),
        question: Joi.string().min(24).max(24)
            .messages({
            'string.empty': "Falta la referencia a la pregunta",
            'string.min' : "La referencia a la pregunta es incorrecta",
            'string.max' : "La referencia a la pregunta es incorrecta"
          }),
        body: Joi.string().min(20)
            .messages({
              'string.min' : 'La respuesta debe tener 20 carácteres como mínimo',
              'string.empty': "Ingrese una respuesta",

            })
    });
    validateRequest(req, res, next, schema);
}

module.exports = {Answer, ValidateAnswer};
