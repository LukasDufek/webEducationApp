<template>

  <div class="main-contentA">
    <header-page/>
    <div class="container">
      <div class="main-content">
      <h1><u>Slovní úlohy pro {{this.$store.state.attributes.year_of_study}}.Ročník</u></h1>


      <section class="one-example" v-if="!phase_of_evaluation  && word_tasks[item]">

        <h2>{{word_tasks[item].text_of_task}}</h2>
        <h5>Sem napiš svůj výsledek</h5>
          <input class="input-submit" type="number" v-model="result">
          <button class="button-submit" @click="evaluate(result)">✔</button>

        <br>

      </section>

      <section v-else-if="phase_of_evaluation ">
        <h2 v-if="correctly">Tvoje řešení bylo správné, získáváš odměnu {{this.$store.state.word_tasks[item].reward}} stříbrných mincí</h2>

        <h2 v-else>Tvoje řešení bylo špatně</h2>

        <h2>Chceš zkusit další slovní úlohu?</h2>
        <button @click="next_word_task">Další úloha </button>
      </section>

      <section v-if="item >= word_tasks.length">
        <h2>Bohužel pro tebe nemáme žádné nové úlohy</h2>
      </section>



    </div>

    </div>

  </div>

</template>

<script>

import store from "@/store/store";
import axios from "axios";

export default {
  name: "mathWordTasks",
  data(){
    return{
      word_tasks:[],
      item: 0,
      result: 0,
      correctly: false,
      phase_of_evaluation : false
    }
  },

 async mounted() {

    try{
      this.$store.state.word_tasks = (await axios.get("/api/tasks")).data;
    }catch(err){
      console.log(err);
    }

    for(let i=0; i<this.$store.state.word_tasks.length; i++){
      if(this.$store.state.attributes.year_of_study === this.$store.state.word_tasks[i].for_year) {
        this.word_tasks.push(this.$store.state.word_tasks[i]);
      }
    }

  },

  methods:{
    evaluate(result) {
      this.phase_of_evaluation  = true;
      this.word_tasks[this.item].student_result = result;

      if(this.word_tasks[this.item].student_result === this.word_tasks[this.item].result){
        this.correctly = true;
        store.commit('addMoney', this.word_tasks[this.item].reward);
      }

    },
    next_word_task(){
      this.phase_of_evaluation  = false;
      this.item++;
    }


  }
}
</script>

<style scoped>

.container{
  margin-top: 5rem;
  padding-top: 1rem;
  padding-bottom: 30rem;


}

.main-content{
  margin-right: auto;
  margin-left: auto;
  margin-top: 2rem;

  position: center;
  text-align: center;
  width: 70%;
  background: #ffee80;
  font-size: 20px;
  border-style: solid;
  border-radius: 1em;
  padding-left: 2em;
  padding-top: -1em;
  padding-bottom: 2rem;
}

h1{
  padding-bottom: 1rem;
  font-size: 200%;
}

h2{
  font-size: 200%;
}

.input-submit{

  padding-top: 1%;
  padding-bottom: 1%;
  padding-left: 2%;
  font-size: 115%;
  text-align: center;

  display: inline-block;

}

.button-submit{
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 1% 2%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 115%;
  margin-left: 1%;
}


</style>
