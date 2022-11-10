<template>
<div class="main-contentA">
  <header-page/>
  <div class="container">
    <div class="main-content">
    <h1> <u>Příklady pro {{this.$store.state.attributes.year_of_study}}.Ročník</u></h1>
    <h2>Dnes jsi už absolvoval {{this.daily_limit}} cvičení</h2>


      <section class="one-example" v-if="!exercise_completed && examples[item]">

        <h3 class="example-text">{{item+1}}.Příklad: <h2>{{examples[item].first_number}} {{examples[item].operator}} {{examples[item].second_number}} =</h2> <input class="input-submit" type="number" v-model="result">
          <button class="button-submit" @click="add_to_results(result)"> ✔</button> </h3>

    <br>

      </section>

    <section v-if="item > 19">
      <button @click="to_evalution">Vyhodnotit</button>
    </section>

    <section v-if="exercise_completed">
      <h2>Počet chyb: {{num_of_wrong}} z {{examples.length}} příkladů</h2>
      <h2>Tvoje úspěšnost je : {{this.success_rate}}%</h2>
      <h2>Dostáváš odměnu : {{this.reward}}</h2>
      <h2 v-if="wrong_examples.length > 0">Příklady, které byly špatně: </h2>
      <section v-for="(item, index) in wrong_examples" :key="index">
      <h3>{{(index+1)}}.Příklad: {{wrong_examples[index].first_number}} {{wrong_examples[index].operator}} {{wrong_examples[index].second_number}}
       = {{wrong_examples[index].result}} </h3>
        <h3>Tvuj result: {{wrong_examples[index].your_result}}</h3>


      </section>
      <button @click="next_exercise">Další procvičování</button>
    </section>
    </div>

  </div>

</div>

</template>

<script>
import store from "@/store/store";

export default {
  name: "mathExamples",

  data() {
    return {
      //rocnik: 1, //default
      example: {},
      examples: [],
      results:[],
      result: 0,
      exercise_completed: false,
      item: 0,
      num_of_wrong:0,
      success_rate:100,
      wrong_examples:[],
      daily_limit : 0,
      reward:0

    }
  },

  mounted() {


    switch (parseInt(this.$store.state.attributes.year_of_study)){
      case 1:
        this.generate_examples_for_I();
        break;
      case 2:
        this.generate_examples_for_II();
        break;
    }


  },

  methods: {

    //GNEREROVANI CVICENI PRO I.ROCNIK
    //1. FUNKCE pro 1.ROCNIK
    generate_addition_examples_I() {
      let first_number = Math.floor(Math.random() * 10) +1;
      let second_number = Math.floor(Math.random() * 10) +1;
      let operator = '+';
      let your_result = 0;
      let result = first_number + second_number;
      this.example = {first_number, second_number, operator, result, your_result}

      if(this.exists_same_example(this.example)){
        this.generate_addition_examples_I();
        //prechod pres desitku
      }else if((first_number%10) + (second_number%10) > 10){
        this.generate_addition_examples_I();
      }else {
        this.examples.push(this.example);
      }

    },
    //2.FUNKCE pro 1.ROCNIK
    generate_subtraction_examples_I() {
      let first_number = Math.floor(Math.random() * 20) +1;
      let second_number = Math.floor(Math.random() * 20) +1;
      let tmp;
      if(second_number > first_number){
        tmp=second_number;
        second_number = first_number;
        first_number = tmp;

      }

      let operator = '-';
      let your_result = 0;
      let result = first_number - second_number;
      this.example = {first_number, second_number, operator, result, your_result}


      if(this.exists_same_example(this.example)){
        this.generate_subtraction_examples_I();
        //prechod pres desitku
      }else if((first_number%10) - (second_number%10) < 0){
        this.generate_subtraction_examples_I();
      } else {
        this.examples.push(this.example);
      }

    },

    //3. FUNKCE pro 1.ROCNIK
    generate_examples_for_I(){
      for(let i = 1; i<=10; i++){
        this.generate_addition_examples_I();
        this.generate_subtraction_examples_I();
      }
      // eslint-disable-next-line
      this.examples = this.examples.sort((a, b) => 0.5 - Math.random());

    },






    //-----------------GNEREROVANI CVICENI PRO II.ROCNIK---------------------------
    //1. FUNKCE pro 2.ROCNIK
    generate_addition_examples_II() {
      let first_number = Math.floor(Math.random() * 100) +20;
      let second_number = Math.floor(Math.random() * 100) +20;
      let operator = '+';
      let your_result = 0;
      let result = first_number + second_number;
      this.example = {first_number, second_number, operator, result, your_result}

      if(result > 100){
        this.generate_addition_examples_II();
      }else if(this.exists_same_example(this.example)){
        this.generate_addition_examples_II();
        //prechod pres desitku
      }else if((first_number%10) + (second_number%10) > 10){
        this.generate_addition_examples_II();
      }else {
        this.examples.push(this.example);
      }

    },
    //2.FUNKCE pro 2.ROCNIK
    generate_subtraction_examples_II() {
      let first_number = Math.floor(Math.random() * 100) +1;
      let second_number = Math.floor(Math.random() * 100) +1;
      let tmp;
      if(second_number > first_number){
        tmp=second_number;
        second_number = first_number;
        first_number = tmp;

      }

      let operator = '-';
      let your_result = 0;
      let result = first_number - second_number;
      this.example = {first_number, second_number, operator, result, your_result}


      if(this.exists_same_example(this.example)){
        this.generate_subtraction_examples_II();
        //prechod pres desitku
      }else if((first_number%10) - (second_number%10) < 0){
        this.generate_subtraction_examples_II();
      } else {
        this.examples.push(this.example);
      }

    },


    generate_multiplication_examples_II() {
      let first_number = Math.floor(Math.random() * 5) +1;
      let second_number = Math.floor(Math.random() * 5) +1;

      let operator = '•';
      let your_result = 0;
      let result = first_number * second_number;
      this.example = {first_number, second_number, operator, result, your_result}


      if(this.exists_same_example(this.example)){
        this.generate_multiplication_examples_II();
        //prechod pres desitku
      } else {
        this.examples.push(this.example);
      }

    },

    //3. FUNKCE pro 2.ROCNIK
    generate_examples_for_II(){

      for(let i=0; i<4; i++){
        this.generate_multiplication_examples_II();
      }
      for(let i = 0; i<8; i++){

        this.generate_addition_examples_II();
        this.generate_subtraction_examples_II();
      }
      // eslint-disable-next-line
      this.examples = this.examples.sort((a, b) => 0.5 - Math.random());

    },

    exists_same_example(example){
      let exists = false;
        for(let i=0; i<this.examples.length; i++){
          if(example.first_number === this.examples[i].first_number && example.second_number === this.examples[i].second_number &&
              example.operator === this.examples[i].operator){
            exists = true;
          }
        }

        return exists;
    },



    add_to_results(result_number){
      result_number = parseInt(result_number);
      //console.log(result_number);
      this.results.push(result_number);
      this.item ++;






    },

    to_evalution(){
      this.item = 0
      this.exercise_completed = true;
      this.wrong_examples = [];
      this.num_of_wrong = 0;
      //zbytecne
      this.reward =0;

      for(let i=0; i<this.examples.length; i++){
        if(this.examples[i].result !== this.results[i]){
          this.num_of_wrong++;
          this.examples[i].your_result = this.results[i];
          this.wrong_examples.push(this.examples[i]);
        }
      }
      this.success_rate = ((this.examples.length - this.wrong_examples.length) / this.examples.length) * 100;
        if(this.success_rate>= 90){
          this.reward = 4;
        }else if(this.success_rate >= 75){
          this.reward =2;
        }else if(this.success_rate >= 60){
          this.reward =1;
        }

        //this.$store.state.atributy.penize += this.reward;
        store.commit('addMoney', this.reward);


    },


    next_exercise(){
      this.daily_limit++;
      this.exercise_completed = false;
      this.results = [];
      console.log(this.reward);
      console.log(this.$store.state.attributes.money);
      console.log('this.$store.state.atributy.jmeno');
    }

  }
}

</script>

<style scoped>

.container{
  margin-top: 5rem;
  padding-top: 1rem;
  padding-bottom: 20rem;


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


}

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

.example-text{
  font-size: 200%;
}

.button-submit{
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 1% 2%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 70%;
  margin-left: 1%;
}

.input-submit{

  width: 10%;
  padding-top: 1%;
  padding-bottom: 1%;
  padding-left: 2%;
  text-align: center;

  display: inline-block;
  font-size: 75%;
}

</style>
