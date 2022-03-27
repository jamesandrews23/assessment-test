<script>
import http from '../axiosHttp';

export default {
  data(){
    return {
      questions: [],
      answeredMultiple: {},
      multipleAnswer: []
    }
  },

  mounted(){
    this.fetchAllQuestions()
      .then(rs => {
        this.questions = rs.data.questions;
      })
      .catch(error => {
        console.log(error);
      })
  },

  methods: {
    fetchAllQuestions(){
      return http.get('/questions');
    },

    onSubmit(){
      console.log('submit');
    }
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
      <div v-for="(elem, questIndex) in questions">
        <p class="question">{{elem.question}}</p>
        <div v-for="(answer, index) in elem.answers">
          <input :id="index" type="radio" :value="answer.answer + ',' + answer.points" :name="questIndex + '_' + 'radio'" v-if="elem.type === 'single'" v-model="answeredMultiple[questIndex + '_' + 'radio']" />
          <input :id="index" type="checkbox" :value="answer.answer + ',' + answer.points" v-if="elem.type === 'multiple'" v-model="multipleAnswer" />
          <label :for="index">{{answer.answer}}</label>

        </div>
      </div>
    <input class="button-style" type="submit" value="Submit" />
  </form>
</template>
<style>
input[type="radio"] {
  margin-right: 10px;
}

input[type="checkbox"] {
  margin-right: 10px;
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


