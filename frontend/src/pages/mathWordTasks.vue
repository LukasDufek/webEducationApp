<template>

  <div class="main-contentA">
    <header-page/>
    <div class="container">

      <help-tutorial :message="text_tutorial"/>

      <div class="main-content">
      <h1><u>Slovní úlohy pro {{this.user.year}}.Ročník</u></h1>


      <section class="one-example" v-if="!phase_of_evaluation  && word_tasks[item]">

        <h3 class="text-of-task">{{word_tasks[item].text_of_task}}</h3>
        <h5>Sem napiš svůj výsledek</h5>
        <span class="submit-collection">
          <input class="input-submit" type="number" v-model="result">
          <button class="button-submit" @click="evaluate(result)">✔</button>
          </span>

        <br>
        <h3 class="money" v-if="word_tasks[item].reward%10 === 0">Odměna za tuto úlohu je: {{word_tasks[item].reward/10}} <gold-coin-component/> </h3>
        <h3 class="money" v-else-if= "word_tasks[item].reward/10 > 0 ">Odměna za tuto úlohu je: {{Math.floor(word_tasks[item].reward/10)}} <gold-coin-component/> {{word_tasks[item].reward%10}}  <silver-coin-component/> </h3>
        <br>

      </section>

      <section v-else-if="phase_of_evaluation ">
        <h2 v-if="correctly">Tvoje řešení bylo správné, získáváš odměnu {{this.word_tasks[item].reward}} stříbrných mincí</h2>

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
import HelpTutorial from "@/components/helpTutorial";

import SilverCoinComponent from "@/components/silverCoinComponent";
import goldCoinComponent from "@/components/goldCoinComponent";

export default {
  name: "mathWordTasks",
  components: {HelpTutorial, SilverCoinComponent, goldCoinComponent},
  data(){
    return{
      text_tutorial:"Zde můžeš řešit slovní úlohy, které zadali učitelé. Za každou správně vyřešenou úlohu dostaneš odměnu v podobě stříbrných či zlatých mincí. Pokud je to potřeba, můžeš si dělat výpočty a poznámky na papír.",

      word_tasks:[],
      item: 0,
      result: 0,
      correctly: false,
      phase_of_evaluation : false,
      user: JSON.parse(localStorage.user)
    }
  },

 async mounted() {

    let all_tasks = [];

    try{
      all_tasks = (await axios.get("/api/tasks")).data;
    }catch(err){
      console.log(err);
    }
    console.log(all_tasks);

    for(let i=0; i<all_tasks.length; i++){
      if(parseInt(this.user.year) === all_tasks[i].for_year) {
        this.word_tasks.push(all_tasks[i]);
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



h1{
  padding-bottom: 1rem;
  font-size: 200%;
}

h2{
  font-size: 200%;
}

.input-submit{

  margin-bottom: 1em;

  width: 15%;

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
