const express = require("express");
const app = express();
const cors = require('cors');
const port = 3000;


const quizRoutes = require('./routes/quizzRoutes');
const questionRoutes = require('./routes/questionRoutes');

app.use(cors());

app.use(express.json());

app.use('/quizzes', quizRoutes);
app.use('/questions', questionRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
