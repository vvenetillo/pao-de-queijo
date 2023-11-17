/* eslint-disable no-undef */
require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Politica de privacidade do cors
app.use(cors({
  origin: '*', 
  methods: 'GET, POST',
  allowedHeaders: 'Content-Type, Authorization',
}));

// Leitura em formato Json
app.use(express.json());

//Importação do model
let contacto = {
  contacts: []
}

// rotas publicas
  app.get('/contact',  (req, res) => { 
  
    try{
    res.json(contacto.contacts);
    } catch (error){
      console.error(error);
      res.status(500).send('Error')
    }
  });
  
  app.post('/contact', (req, res) => {
    try{

      console.log(req.body);
      const newContacto = req.body;
      contacto.contacts.push(newContacto)
      res.status(201).json(newContacto);

    } catch (error){
      console.error(error);
      res.status(500).send('Internal Server Error')
    }
  })

  
  const dbUdser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASS;
  
  //conexão com o Banco de Dados MongoD
  mongoose
    .connect(
      `mongodb+srv://${dbUdser}:${dbPassword}@cluster0.a7o4it1.mongodb.net/paodequeijo?retryWrites=true&w=majority`
    )
    .then(() => {
      app.listen(3001);
      console.log("Conectou ao banco de dados");
    })
    .catch((err) => console.log(err));