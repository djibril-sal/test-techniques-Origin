const express = require('express');
const bodyParser = require('body-parser');
const videoRoutes = require('./routes/video');
const db = require('../config/database');

const app = express();



  db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
 });

 app.use(bodyParser.json());

app.use((req, res) => {
   res.json({ message: 'Votre requête a bien été reçue !' }); 
});

app.use('/video', require('./routes/Video'));
app.use('/tags', require('./routes/Tag-Video'));
app.use('/tag', require('./routes/Tags'));
app.use('/auth', require('./routes/User'));


module.exports = app;


