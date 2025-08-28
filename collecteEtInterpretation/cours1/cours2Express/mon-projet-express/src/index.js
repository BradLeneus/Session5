const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./routes/users');
const mesRespects = require('./routes/salutation');


app.use('/users', userRoutes);
app.use('/salutation', mesRespects);

// Middleware de logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // Servir des fichiers statiques
// app.use(express.static('public'));

app.get('/cause-error', (req, res) => {
  throw new Error('Erreur simulée!');
});
app.get('/home', (req, res, next) => {
  console.log('Middleware pour la route de base');
  next();
}, (req, res) => {
  res.send("Bienvenue sur la page d'accueil ! ");
});





app.listen(port, () => {
  console.log(`Serveur en écoute sur <http://localhost>:${port}`);
});
