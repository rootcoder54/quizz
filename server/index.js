const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const port = 3000;

app.use(bodyParser.json());

const dataFilePath = path.join(__dirname, "questions.json");

// Helper function to read data from the JSON file
function readData() {
  const data = fs.readFileSync(dataFilePath);
  return JSON.parse(data);
}

// Helper function to write data to the JSON file
function writeData(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

// Get all questions
app.get("/questions", (req, res) => {
  const questions = readData();
  res.json(questions);
});

// Get a single question by index
app.get("/questions/:index", (req, res) => {
  const questions = readData();
  const question = questions[req.params.index];
  if (question) {
    res.json(question);
  } else {
    res.status(404).send("Question not found");
  }
});

// Create a new question
app.post("/questions", (req, res) => {
  const questions = readData();
  const newQuestion = req.body;
  questions.push(newQuestion);
  writeData(questions);
  res.status(201).json(newQuestion);
});

// Update a question by index
app.put("/questions/:index", (req, res) => {
  const questions = readData();
  const index = parseInt(req.params.index, 10);
  if (questions[index]) {
    questions[index] = req.body;
    writeData(questions);
    res.json(questions[index]);
  } else {
    res.status(404).send("Question not found");
  }
});

// Delete a question by index
app.delete("/questions/:index", (req, res) => {
  const questions = readData();
  const index = parseInt(req.params.index, 10);
  if (questions[index]) {
    const deletedQuestion = questions.splice(index, 1);
    writeData(questions);
    res.json(deletedQuestion);
  } else {
    res.status(404).send("Question not found");
  }
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
