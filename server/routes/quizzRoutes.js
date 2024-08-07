const express = require('express');
const router = express.Router();
const { readDatabase, writeDatabase } = require('../models/database');


router.post('/', (req, res) => {
  const { id, point,limit,nombre, pseudo } = req.body;
  const db = readDatabase();
  const newQuiz = { id, point,limit,nombre, pseudo };
  db.quizzes.push(newQuiz);
  writeDatabase(db);
  res.json(newQuiz);
});


router.get('/', (req, res) => {
  const db = readDatabase();
  res.json(db.quizzes);
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  const db = readDatabase();
  const quiz = db.quizzes.find(q => q.id == id);
  if (quiz) {
    res.json(quiz);
  } else {
    res.status(404).json({ error: 'Quiz non trouvé' });
  }
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const db = readDatabase();
  const quizIndex = db.quizzes.findIndex(q => q.id == id);
  if (quizIndex !== -1) {
    const deletedQuiz = db.quizzes.splice(quizIndex, 1);
    writeDatabase(db);
    res.json(deletedQuiz);
  } else {
    res.status(404).json({ error: 'Quiz non trouvé' });
  }
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { point, limit, nombre, pseudo } = req.body;
  const db = readDatabase();
  const quiz = db.quizzes.find(q => q.id == id);
  if (quiz) {
    quiz.point = point;
    quiz.limit = limit;
    quiz.nombre = nombre;
    quiz.pseudo = pseudo;
    writeDatabase(db);
    res.json(quiz);
  } else {
    res.status(404).json({ error: 'Quiz not found' });
  }
});

module.exports = router;
