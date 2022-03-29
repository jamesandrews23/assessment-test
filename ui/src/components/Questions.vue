<script>
import http from '../axiosHttp';

export default {
  data(){
    return {
      questions: [],
      answeredSingle: {},
      answeredMultiple: [],
      score: 0,
      possiblePoints: 0
    }
  },

  mounted(){
    this.fetchAllQuestions()
      .then(rs => {
        this.questions = rs.data.questions;
        if(this.questions.length > 0){
          this.calculatePossiblePoints();
        }
      })
      .catch(error => {
        console.log(error);
      })
  },

  methods: {
    fetchAllQuestions(){
      return http.get('/questions');
    },

    submitFinalScore(){
      return http.post('/reports', {score: this.score});
    },

    onSubmit(){
      this.calculateScore();
      this.submitFinalScore();
    },

    calculatePossiblePoints(){
      this.questions.forEach(question => {
        if(question.type === 'single'){
          let maxPointsPerQuestion = question.answers.reduce((prevAnswer, currentAnswer) => {
              return currentAnswer.points > prevAnswer.points ? {points: currentAnswer.points} : {points: prevAnswer.points};
          }, {points: 0});
          this.possiblePoints += maxPointsPerQuestion.points;
        } else if(question.type === 'multiple') {
          question.answers.forEach(answer => {
            this.possiblePoints += answer.points;
          });
        }
      });
    },

    calculateScore(){
      let totalScore = 0;
      let selectedSingle = Object.values(this.answeredSingle);
      selectedSingle.forEach(value => {
        let [label, score] = value.split(',');
        totalScore += parseInt(score);
      });
      this.answeredMultiple.forEach(value => {
        let [label, score] = value.split(',');
        totalScore += parseInt(score);
      });

      this.score = Math.round((totalScore / this.possiblePoints) * 100);
    }
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div v-show="score">Your score was {{score}}%</div>
      <div v-for="(elem, questIndex) in questions">
        <p class="question">{{elem.question}}</p>
        <div v-for="(answer, index) in elem.answers">
          <input
              required
              :id="questIndex + 'input' + index"
              type="radio"
              :value="answer.answer + ',' + answer.points"
              :name="questIndex + '_' + 'radio'"
              v-if="elem.type === 'single'"
              v-model="answeredSingle[questIndex + '_' + 'radio']" />
          <input
              :id="questIndex + 'input' + index"
              type="checkbox"
              :value="answer.answer + ',' + answer.points"
              v-if="elem.type === 'multiple'"
              v-model="answeredMultiple" />
          <label :for="questIndex + 'input' + index">{{answer.answer}}</label>
        </div>
      </div>
    <input class="button-style" type="submit" value="Submit" />
  </form>
</template>

<style>
input[type="radio"], input[type="checkbox"] {
  margin-right: 10px;
  cursor: pointer;
}

label {
  cursor: pointer;
}

p.question {
  font-weight: bold;
}

.button-style {
  padding: 5px 5px;
  border: 1px solid #008900;
  background-color: #04AA6D;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  float: right;
}
</style>


