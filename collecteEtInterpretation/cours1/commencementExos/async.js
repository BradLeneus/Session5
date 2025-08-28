// async.js
const fs = require('fs');

fs.readFile('message.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log("Lecture asynchrone :", data);
});

console.log("Cette ligne s’affiche avant la lecture du fichier !");