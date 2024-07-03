const express = require('express');
const router = express.Router();
const { readDatabase, writeDatabase } = require('../models/database');


router.post('/', (req, res) => {
  const { pseudo, password,avatar } = req.body;
  const db = readDatabase();
  const newUser = { id: db.users.length + 1, pseudo, password,avatar };
  db.users.push(newUser);
  writeDatabase(db);
  res.json(newUser);
});


router.get('/', (req, res) => {
  const db = readDatabase();
  res.json(db.users);
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  const db = readDatabase();
  const user = db.users.find(u => u.id == id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const db = readDatabase();
  const userIndex = db.users.findIndex(u => u.id == id);
  if (userIndex !== -1) {
    const deletedUser = db.users.splice(userIndex, 1);
    writeDatabase(db);
    res.json(deletedUser);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

module.exports = router;
