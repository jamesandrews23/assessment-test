const fs = require('fs');
const path = require('path');
const SCORES_PATH = path.resolve(__dirname, '../public/scores.json');

const getStoredScores = () => {
    let data;

    try {
        data = fs.readFileSync(SCORES_PATH);
    } catch(e){
        console.error('file not found ' + e);
        return [];
    }

    return JSON.parse(data);
}

const setStoredScores = (scores) => {
    try {
        fs.writeFileSync(SCORES_PATH, JSON.stringify(scores));
    } catch(e){
        console.error('Failed to set scores: ' + e);
    }
}

const updateScores = score => {
    let scores = getStoredScores();
    scores.push(score);
    setStoredScores(scores);
    return scores;
}

module.exports = {
    getStoredScores,
    updateScores
}
