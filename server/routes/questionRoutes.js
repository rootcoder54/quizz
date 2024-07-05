const express = require('express');
const router = express.Router();
const { readDatabase, writeDatabase } = require('../models/database');



router.get('/', (req, res) => {
  const db = readDatabase();
  res.json(db.questions);
});



router.get('/:id', (req, res) => {
    const { id } = req.params;
    const db = readDatabase();
    const question = db.questions.find(q => q.id == id);
    if (question) {
      res.json(question);
    } else {
      res.status(404).json({ error: 'Question non trouvé' });
    }
  });




router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const db = readDatabase();
  const questionIndex = db.questions.findIndex(q => q.id == id);
  if (questionIndex !== -1) {
    const deletedQuestion = db.questions.splice(questionIndex, 1);
    writeDatabase(db);
    res.json(deletedQuestion);
  } else {
    res.status(404).json({ error: 'Question non trouvé' });
  }
});

module.exports = router;
