<template>
  <div>
    <header-page/>
    <div class="container">

      <help-tutorial :message="text_tutorial" />

    <div class="main-content">
    <h2>Jako učitel můžeš zadávat slovní úlohy</h2>
   <!-- <button class="change-shopping-btn" @click="changeTypeOfTasks">{{this.button_msg}}</button> -->


      <section>
      <h2>Zadání slovní úlohy:</h2>


    <p style="white-space: pre-line;">{{ text_of_task }}</p>
    <textarea class="text-area-for-task" v-model="text_of_task" placeholder="Zde napiš celé znění slovní úlohy"></textarea>
      <br>
      <h2>Zadej ročník, pro jaký je úlohu určena</h2>
    <select v-model="for_year">
      <option disabled value="">Zvolit ročník</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>

    <h2>Sem zadej výsledek slovní úlohy</h2>
    <input type="number" v-model="result">
    <h2>Sem zadej výsledek odměnu pro žáka ve stříbrných mincích</h2>
    <input type="number" min=1 :max="for_year*10" v-model="reward">

      <br>
    <button class="add-task-btn" @click="addWordTask(text_of_task, for_year, result, reward)">Přidat úlohu</button>
      <br>
      <br>
      <br>

      </section>




  </div>
    </div>

</div>

</template>

<script>

import store from "@/store/store";
import headerPage from "@/components/headerPage";
import {mapActions, mapGetters} from "vuex";
import helpTutorial from "@/components/helpTutorial";
//import axios from "axios";



export default {
  name: "addWordTask",
  components: {headerPage, helpTutorial},
  data() {
    return {
      text_tutorial:"Dobrý den pane učiteli. Jako učitel můžete vytvářet a přidávat nové slovní úlohy pro různé ročníky studentů. Můžete ale také, v sekci 'Spravovat úlohy' mazat nebo jen upravovat již existující slovní úlohy. ",

      text_of_task: '',
      for_year: 1,
      result: 0,
      reward: 1,
      word_tasks: [],
      actual_task: {},
      button_msg: "Zadat obrázkovou úlohu",

    }
  },
  computed: mapGetters(["user"]),
  methods: {
    ...mapActions(["getProfile"]),


    async addWordTask(_text_of_task, _for_year, _result, _reward) {

      //let student_result =0;
      this.text_of_task = _text_of_task;
      this.for_year = _for_year;
      this.result = _result;
      this.reward = _reward;
      //this.actual_task = {_text_of_task, _for_year, _result, student_result, _reward}; //nefunkcni
      this.actual_task = {
        "text_of_task": this.text_of_task,
        "for_year": this.for_year,
        "result": this.result,
        "student_result": 0,
        "reward": this.reward
      }
      this.word_tasks.push(this.actual_task);
      store.commit('addTask', this.actual_task);


      alert("Úloha úspěšně přidána");
      location.reload();
      console.log(this.word_tasks);
    },

  },
  /*
    odhlasit(){
      this.$router.push('./');
    }
     */

  created() {
    this.getProfile();
  }
}
</script>

<style scoped>

.text-area-for-task{

  height: 15rem;
  width: 50%;
  max-width: 85%;
  max-height: 15rem;

}

.add-task-btn{
  margin-top: 2rem;
  box-shadow: 0 0 0 2px #9fb4f2;
  background-color:#7892c2;
  border-radius:5px;
  border:1px solid #4e6096;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial,serif;
  font-size:19px;
  padding:12px 37px;
  text-decoration:none;
  text-shadow:0 1px 0 #283966;
}

.add-task-btn:hover{
  font-size: 20px;
  text-decoration: underline;
}


</style>
