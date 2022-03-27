<script>
import http from '../axiosHttp';

export default {
  methods: {
    fetchAllQuestions(){
      http.get('/questions')
          .then(rs => {
            console.log(rs);
          });
    }
  }
}
</script>

<template>
  <p>test 1</p>
  <button @click="fetchAllQuestions()" >Fetch all questions</button>
</template>


