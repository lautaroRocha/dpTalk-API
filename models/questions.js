const mongoose = require('mongoose');
const Joi = require('joi')
const validateRequest = require('../middleware/validateRequest')

const questionSchema = new mongoose.Schema({
    author : {
        type : String,
        required : true
    }, 
    title : {
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
    askedOn : {
        type : Object,
        required: false,
        default: new Date().toJSON()
    },
    comments : {
        type : Array,
        required: false,
        default: []
    }
})

const Question = mongoose.model('questions', questionSchema);

const ValidateQuestion = (req, res, next) => {
    const schema = Joi.object({
        author: Joi.string().min(4).max(30).alphanum()
            .messages({
          'string.empty': "Ingresa un autor de la pregunta",
          'string.min': "El nombre de autor debe tener 4 letras mínimo",
          'string.alphanum' : 'El nombre de autor no puede contener carácteres especiales o espacíos vacíos',
          'string.max': "El nombre de autor debe tener 30 letras máximo",
        }),
        title: Joi.string().min(5).max(30)
            .messages({
            'string.empty': "Ingrese un título",
            'string.min' : "El título debe tener por lo menos 5 letras",
            'string.max' : 'El títutlo no puede tener más de 30 letras'
          }),
        body: Joi.string().min(30)
            .messages({
              'string.min' : 'La pregunta debe tener 30 carácteres mínimo',
              'string.empty': "Ingrese una pregunta"
            })
    });
    validateRequest(req, res, next, schema);
}

module.exports ={ Question, ValidateQuestion};

