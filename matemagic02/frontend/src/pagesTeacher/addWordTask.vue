<template>
  <div>
    <header-teacher/>
    <div class="container">
    <div class="main-content">
    <h2>Jako učitel můžeš zadávat slovní úlohy</h2>

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
    <input type="number" min=1 max=10 v-model="reward">

      <br>
    <button @click="addWordTask(text_of_task, for_year, result, reward)">Přidat úlohu</button>
      <br>
      <br>
      <br>
  </div>
    </div>
</div>

</template>

<script>

import store from "@/store/store";
import HeaderTeacher from "@/components/headerTeacher";
import {mapActions, mapGetters} from "vuex";


export default {
  name: "addWordTask",
  components: {HeaderTeacher},
  data() {
    return {
      text_of_task:'',
      for_year: 1,
      result:0,
      reward:1,
      word_tasks:[],
      actual_task:{}
    }
  },
  computed: mapGetters(["user"]),
  methods: {
    ...mapActions(["getProfile"]),

    async addWordTask(_text_of_task, _for_year, _result, _reward){

      //let student_result =0;
      this.text_of_task = _text_of_task;
      this.for_year = _for_year;
      this.result = _result;
      this.reward = _reward;
      //this.actual_task = {_text_of_task, _for_year, _result, student_result, _reward}; //nefunkcni
      this.actual_task = {"text_of_task": this.text_of_task, "for_year": this.for_year, "result":this.result, "student_result": 0, "reward":this.reward}
      this.word_tasks.push(this.actual_task);
      store.commit('addTask', this.actual_task);



      alert("Úloha úspěšně přidána");
      location.reload();
      console.log(this.word_tasks);
    },
    /*
    odhlasit(){
      this.$router.push('./');
    }
     */


  },
  created() {
    this.getProfile();
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
.text-area-for-task{
  width: 40%;

}

</style>
