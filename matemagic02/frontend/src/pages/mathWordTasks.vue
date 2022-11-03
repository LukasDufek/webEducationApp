<template>

  <div class="main-contentA">
    <header-page/>
    <div class="main-content">
      <h1>Slovní úlohy pro {{this.$store.state.attributes.year_of_study}}.Ročník</h1>


      <section class="one-example" v-if="!phase_of_evaluation  && word_tasks[item]">

        <h3>{{word_tasks[item].text_of_task}}</h3>
        <h2>Sem napiš svůj výsledek</h2>
          <input type="number" v-model="result">
          <button @click="evaluate(result)">Vyhodnotit</button>

        <br>

      </section>

      <section v-else-if="phase_of_evaluation ">
        <h2 v-if="correctly">Tvoje řešení bylo správné, získáváš odměnu {{this.$store.state.word_tasks[item].reward}} stříbrných mincí</h2>

        <h2 v-else>Tvoje řešení bylo špatně</h2>

        <h2>Chceš zkusit další slovní úlohu?</h2>
        <button @click="next_word_task">Další úloha </button>
      </section>

      <section v-if="item > word_tasks.length">
        <h2>Bohužel pro tebe nemámme žádné nové úlohy</h2>
      </section>



    </div>

  </div>

</template>

<script>

import store from "@/store/store";

export default {
  name: "slovniUlohy",
  data(){
    return{
      word_tasks:[],
      item: 0,
      result: 0,
      correctly: false,
      phase_of_evaluation : false
    }
  },

  mounted() {

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

.main-content{
  margin: auto;
  margin-top: 10rem;
  position: center;
  text-align: center;
  width: 85%;
  background: #ffee80;
  font-size: 20px;
  border-radius: 1em;
  padding-left: 2em;
  padding-top: -1em;

  margin-bottom: 5rem;
}

</style>
