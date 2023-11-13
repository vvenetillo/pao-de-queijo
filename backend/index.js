/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: '*', // Substitua pelo endereço do seu frontend
  methods: 'GET, POST',
  allowedHeaders: 'Content-Type, Authorization',
}));

app.use(express.json());

let contacto = {
    contacts: []
}
  
  // eslint-disable-next-line no-undef  
  module.exports = contacto;
  

app.get('/contact', (req, res) => { 
  res.json(contacto.contacts);
});

app.post('/contact', (req, res) => {
  console.log(req.body);
  const newContacto = req.body;
  contacto.contacts.push(newContacto)
  res.status(201).json(newContacto);
});

app.listen(3001, () => console.log('Server listening on port 3001'));
