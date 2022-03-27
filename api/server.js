const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const port = 8080;


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
    res.send('hello server');
});

app.get('/api/questions', (req, res) => {
    console.log('api/questions called');
    //return questions and points
    res.send('questions');
});

app.post('/api/submitQuestions', (req, res) => {
    //process points and return data for chart
    console.log('submitQuestions');
});

app.listen(port, () => {
    console.log('Server is listening on port::${port}');
});

