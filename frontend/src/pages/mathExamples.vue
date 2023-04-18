<template>
<div class="main-contentA">
  <header-page/>
  <div class="container">

    <help-tutorial :message="text_tutorial"/>
    <div class="main-content" v-if="user.daily_limit_excercies < 5">


      <section class="one-example" v-if="!exercise_completed && item<this.count_of_exmaples">

        <h1> <u>Příklady pro {{user.year}}.Ročník</u></h1>
        <h2>Dnes jsi už absolvoval {{this.user.daily_limit_excercies}} cvičení</h2>
        <h2>Počet příkladů v tomto cvičení je: {{this.count_of_exmaples}}</h2>

        <math-problem :item="examples[item]" :index="item" @resultchanged="onChange" />
        <button v-if="item<this.count_of_exmaples" class="confirm-example-button" @click="onConfirm">Další příklad</button>

        <hr>

      </section>

    <section v-if="item >= count_of_exmaples">
      <h2>Výborně</h2>
      <h2>Vypočítal jsi všechny příklady z tohoto cvičení</h2>
      <h2>Klikni na tlačítko vyhodnotit ať zjistíš jak úspěšně jsi počítal a jaká tě čeká odměna</h2>
      <button class="confirm-example-button" @click="to_evalution">Vyhodnotit</button>
    </section>

    <section v-if="exercise_completed">
      <h2>Počet chyb: {{num_of_wrong}} z {{count_of_exmaples}} příkladů</h2>
      <h2>Tvoje úspěšnost je : {{this.success_rate}}%</h2>
      <h2 class="money" v-if="this.reward%10 === 0">Dostáváš odměnu : {{this.reward/10}} <gold-coin-component/> </h2>
      <h2 class="money" v-else-if= "this.reward/10 > 0 ">Dostáváš odměnu : {{Math.floor(this.reward/10)}} <gold-coin-component/> {{this.reward%10}}  <silver-coin-component/> </h2>
      <h2 class="money" v-else-if="this.reward/10 < 0 " >Dostáváš odměnu : {{this.reward}}  <silver-coin-component/> </h2>

      <h2 v-if="wrong_examples.length > 0">Příklady, které byly špatně: </h2>
      <section v-for="(item, index) in wrong_examples" :key="index">
        <h3 v-if="wrong_examples[index].type === 'compare'">{{(index+1)}}.Příklad: {{wrong_examples[index].first_number}} <u>{{wrong_examples[index].result}}</u>  {{wrong_examples[index].second_number}} </h3>
        <h3 v-else-if="wrong_examples[index].type === 'division_remainder'">{{(index+1)}}.Příklad: {{wrong_examples[index].toText}} <u>{{wrong_examples[index].result}} Zb. {{wrong_examples[index].remainder}}</u> </h3>
        <h3 v-else>{{(index+1)}}.Příklad: {{wrong_examples[index].toText}} <u>{{wrong_examples[index].result}}</u> </h3>
        <h3>Tvuj výsledek: {{wrong_examples[index].your_result}}</h3>
        <h3 v-if="wrong_examples[index].type === 'division_remainder'">Tvůj zbytek: {{wrong_examples[index].your_remainder}}</h3>


      </section>

      <button class="confirm-example-button" @click="next_exercise">Další procvičování</button>
    </section>
    </div>

    <div class="main-content" v-else>

      <h2>Byl dosažen denní limit počtu cvičení. Vrať se sem zase zítra</h2>
    </div>

  </div>

</div>

</template>

<script>

import MathProblem from "../components/MathProblem";
import {ExampleGenerator} from "@/ExampleGenerator";
import helpTutorial from "@/components/helpTutorial";
import goldCoinComponent from "@/components/goldCoinComponent";
import silverCoinComponent from "@/components/silverCoinComponent";
//import Auth from "../Warehouse/Auth";
import store from "@/store/store";


const myExampleGenerator = new ExampleGenerator();


export default {
  name: "mathExamples",
  components: {MathProblem, helpTutorial, goldCoinComponent, silverCoinComponent},


  data() {
    return {

      //rocnik: 1, //default
      example: {},
      examples: [],
      results: [],
      result: 0.0,
      remainder: 0,
      exercise_completed: false,
      item: 0,
      num_of_wrong: 0,
      success_rate: 0,
      wrong_examples: [],
      daily_limit: 0,
      reward: 0,
      count_of_exmaples: 20,
      last_data: {},
      user: JSON.parse(localStorage.user),

      text_tutorial: "Na této stránce můžeš počítat příklady. Za správné výsledky pak dostaneš odměnu v podobě stříbrných  či zlatých mincí. Velikost této odměny vždy záleží na počtu správných výsledků, ale také na tvému ročníku. Abys mohl dostat odměnu  musíš absolvovat celé cvičení. ",

    }
  },

  mounted() {

    this.control_daily_excercies();
    this.GENERATE();



  },


  methods: {

    onChange(data) {

      this.last_data = data;

    },

    onConfirm() {
      const data = this.last_data;
      //console.log('tvuj vysledek', data.value);
      //console.log('tvuj vysledek',this.examples[data.index]);
      this.add_to_results(data.value, this.examples[data.index], data.remainder ?? 0);
    },

    GENERATE() {

      switch (parseInt(this.user.year)) {
        case 1:
          this.count_of_exmaples = 15;
          this.examples = myExampleGenerator.generate_examples_for_I(this.count_of_exmaples);
          break;
        case 2:
          this.count_of_exmaples = 16;
          this.examples = myExampleGenerator.generate_examples_for_II(this.count_of_exmaples);
          break;
        case 3:
          this.count_of_exmaples = 24;
          this.examples = myExampleGenerator.generate_examples_for_III(this.count_of_exmaples);
          break;
        case 4:
          this.count_of_exmaples = 28;
          this.examples = myExampleGenerator.generate_examples_for_IV(this.count_of_exmaples);
          break;
        case 5:
          this.count_of_exmaples = 28;
          this.examples = myExampleGenerator.generate_examples_for_V(this.count_of_exmaples);
          break;
      }
    },


//---------------FUNKCE PRO VYHODNOCOVANI-------------------------------------
//odeslani studentova reseni do vysledku
    add_to_results(result_number, example, remainder) {

      if (!isNaN(parseFloat(result_number)) && parseFloat(result_number) % 1 !== 0) {

        result_number = parseFloat(result_number).toFixed(2);
      } else if (!isNaN(parseInt(result_number))) {
        result_number = parseInt(result_number);
      }
      //console.log(result_number);
      //this.results.push(result_number);
      for (let i = 0; i < this.examples.length; i++) {
        if (this.examples[i] === example) {
          this.examples[i].your_result = result_number;
          if (example.type === 'division_remainder') {
            this.examples[i].your_remainder = remainder;

          }
        }
      }
      this.item++;

    },

//Vyhodnnoceni cviceni a udeleni odmneny
    to_evalution() {
      this.item = 0
      this.exercise_completed = true;
      this.wrong_examples = [];
      this.num_of_wrong = 0;
      //zbytecne
      this.reward = 0;

      for (let i = 0; i < this.examples.length; i++) {


        if (isNaN(this.examples[i].result) && this.examples[i].type === 'roman_num') {
          this.examples[i].your_result = String(this.examples[i].your_result).toUpperCase();
          if (this.examples[i].result !== this.examples[i].your_result) {
            this.num_of_wrong++;
            this.wrong_examples.push(this.examples[i]);
          }
        } else if (this.examples[i].type === 'division_remainder') {
          if (this.examples[i].result !== this.examples[i].your_result && this.examples[i].remainder !== this.examples[i].your_remainder) {
            this.num_of_wrong++;
            this.wrong_examples.push(this.examples[i]);
          }
        } else {
          if (this.examples[i].type === 'decimal' && this.examples[i].result % 1 !== 0 && this.examples[i].operator !== ':') {
            this.examples[i].result = parseFloat(this.examples[i].result).toFixed(2);
          }
          if (this.examples[i].result !== this.examples[i].your_result) {
            this.num_of_wrong++;
            this.wrong_examples.push(this.examples[i]);
          }
        }
      }


      this.success_rate = Math.round(((this.count_of_exmaples - this.wrong_examples.length) / this.count_of_exmaples) * 100);
      if (this.success_rate >= 90) {
        this.reward = parseInt(this.user.year) * 3;
      } else if (this.success_rate >= 75) {
        this.reward = parseInt(this.user.year) * 2;
      } else if (this.success_rate >= 60) {
        this.reward = parseInt(this.user.year) * 1;
      }

      //let full_success_rate = (this.success_rate + this.user.success_rate) /2;


      //this.$store.state.atributy.penize += this.reward;
      store.commit('addMoney', this.reward);
      store.commit('increaseExcercies', 'up');
      store.commit('setSuccessRate', (this.success_rate + this.user.success_rate) / 2);


    },


//Dalsi cviceni
    next_exercise() {
      this.daily_limit++;
      this.exercise_completed = false;
      this.results = [];
      this.examples = [];
      this.GENERATE();
      //console.log(this.reward);
      //console.log('this.$store.state.atributy.jmeno');


    },

    parseDate(date) {


      date = date.toString();
      let newDate = date.split('/');
      return [parseInt(newDate[0]), parseInt(newDate[1]), parseInt(newDate[2])];

    },

    control_daily_excercies() {


      if(this.user.daily_limit_excercies === 5) {
        let actualDate = new Date().toLocaleDateString('en-GB', {
              day: 'numeric', month: 'numeric', year: 'numeric'
            });


        let oldDate = this.user.date_of_last_calculating;

        if(oldDate[0] !== actualDate[0] && oldDate[1] !== actualDate[1] && oldDate[2] !== actualDate[2]){
          store.commit('increaseExcercies', 'down');
          location.reload();
        }


      }
    },





  }
}

</script>

<style scoped>





h1{
  padding-bottom: 1rem;
  font-size: 200%;
}

h2{
  font-size: 150%;
}

h3{
  font-size: 135%;
}

.confirm-example-button{
  font-size: 24px;
}

</style>
