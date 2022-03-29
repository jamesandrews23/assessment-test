//import express
const express = require('express');
//import our controllers which will be attached to the express router
const { getQuestions } = require('../controllers/QuestionsController');
const { submitAnswers, getAllScores } = require('../controllers/ReportsController');

const router = express.Router();

router.get('/api/questions', getQuestions);
router.post('/api/reports', submitAnswers);
router.get('/api/getScores', getAllScores);

module.exports = router;
