const express = require('express');
const router = express.Router();
const { readDatabase, writeDatabase } = require('../models/database');


router.post('/', (req, res) => {
  const { question } = req.body;
  const db = readDatabase();
  const newQuestion = { id: db.questions.length + 1, question };
  db.questions.push(newQuestion);
  writeDatabase(db);
  res.json(newQuestion);
});


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
      res.status(404).json({ error: 'Quiz not found' });
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
    res.status(404).json({ error: 'Question not found' });
  }
});

module.exports = router;
