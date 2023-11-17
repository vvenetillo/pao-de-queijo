/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose')


// Define o array de objetos 'contacto' com os campos especificados
const contacto = mongoose.model('Contato' ,
    {
      
      fname: String,
      femail: String,
      ftelefone: Number,
      fcidade: String,
      fmensagem: String
      
    })
  
  // eslint-disable-next-line no-undef  
  module.exports = contacto