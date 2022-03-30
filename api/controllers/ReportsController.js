const {updateScores, getStoredScores} = require('../persistence/ScoresFileStore');

exports.submitAnswers = (req, res) => {
    //process points and return data for chart
    console.log('submitAnswers');
    console.log(req.body.score);
    let score = req.body.score;
    let scores = [];
    if(score && typeof score === 'number'){
        console.log('Updating scores');
        scores = updateScores(score);
    }

    res.type('json');
    res.status(200);
    res.send(scores);
};

exports.getAllScores = (req, res) => {
    res.send(getStoredScores());
}
