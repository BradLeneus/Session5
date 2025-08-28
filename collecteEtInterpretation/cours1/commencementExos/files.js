const fs = require('fs');

fs.writeFileSync('message.txt', 'Bonjour Ma Man !');

const data =  fs.readFileSync('message.txt','utf8');

console.log("contenu du fichier texte : ",data);