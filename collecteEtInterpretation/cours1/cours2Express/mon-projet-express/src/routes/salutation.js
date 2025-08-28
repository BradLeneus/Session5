const express = require('express');
const router = express.Router();


// Route pour afficher un message personnalisé
router.get('/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Bonjour, ${name}!`);
  });

module.exports = router;