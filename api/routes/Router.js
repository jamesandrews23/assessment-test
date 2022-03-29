const express = require('express');
const { getQuestions } = require('../controllers/QuestionsController');
const { submitAnswers, getAllScores } = require('../controllers/ReportsController');

const router = express.Router();

router.get('/questions', getQuestions);
router.post('/reports', submitAnswers);
router.get('/getScores', getAllScores);

module.exports = router;
