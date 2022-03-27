const fs = require('fs');
const path = require('path');

exports.getQuestions = (req, res) => {
    //return questions and points
    let parsedData = {};
    let data = fs.readFileSync(path.resolve(__dirname, '../public/questions.json'));

    try {
         parsedData = JSON.parse(data);
    } catch(e){
        console.error(e);
    }

    res.send(parsedData);
};
