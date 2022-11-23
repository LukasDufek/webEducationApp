<template>
  <div class="main-contentA">
    <header-page/>
    <div class="container">
      <div class="main-content">
        <h1> <u>Příklady pro {{this.$store.state.attributes.year_of_study}}.Ročník</u></h1>
        <h2>Dnes jsi už absolvoval {{this.daily_limit}} cvičení</h2>


        <section class="one-example" v-if="!exercise_completed && examples[item]">

          <section class="calculate" v-if="examples[item].type=== 'calculate'" >
            <h3 class="example-text">

              <h3>{{item+1}}.Příklad:</h3>
              <h4>{{examples[item].message}}</h4>
              <h2>{{this.part_zeros(examples[item].first_number)}} {{examples[item].operator}} {{this.part_zeros(examples[item].second_number)}} =</h2> <input class="input-submit" type="number" v-model="result">
              <button class="button-submit" @click="add_to_results(result, examples[item], 0)"> ✔</button>

            </h3>

            <br>
          </section>

          <section class="compare" v-else-if="examples[item].type=== 'compare'">

            <h3 class="example-text">
              <h3>{{item+1}}.Příklad:</h3>
              <h4>{{examples[item].message}}</h4>
              <h2>{{examples[item].first_number}}
                <select class="input-submit" v-model="result">
                  <option>=</option>
                  <option>&lt;</option>
                  <option>&gt;</option>
                </select> {{examples[item].second_number}}</h2>
              <button class="button-submit" @click="add_to_results(result, examples[item], 0)"> ✔</button>
            </h3>

            <br>
          </section>

          <section class="round" v-else-if="examples[item].type=== 'round'" >
            <h3 class="example-text">
              <h3>{{item+1}}.Příklad:</h3>
              <h4>{{examples[item].message}} {{examples[item].second_number}}</h4>
              <h2>{{this.part_zeros(examples[item].first_number)}} {{examples[item].operator}} </h2>
              <input class="input-submit" type="number" v-model="result">
              <button class="button-submit" @click="add_to_results(result, examples[item], 0)"> ✔</button>
            </h3>

            <br>
          </section>

          <section class="" v-else-if="examples[item].type=== 'division_remainder'" >
            <h3 class="example-text">
              <h3>{{item+1}}.Příklad:</h3>
              <h4>{{examples[item].message}}</h4>
              <h2>{{examples[item].first_number}} {{examples[item].operator}} {{examples[item].second_number}} = </h2>
              <input class="input-submit" type="number" v-model="result">
              <p>Zb.</p>
              <input class="input-submit" type="number" v-model="remainder">
              <button class="button-submit" @click="add_to_results(result, examples[item], remainder)"> ✔</button>
            </h3>

            <br>
          </section>

          <section class="roman-num" v-else-if="examples[item].type=== 'roman_num'" >
            <h3 class="example-text">
              <h3>{{item+1}}.Příklad:</h3>
              <h4>{{examples[item].message}}</h4>
              <h2>{{examples[item].first_number}} {{examples[item].operator}} =</h2>
              <input class="input-submit" type="number" v-model="result">
              <button class="button-submit" @click="add_to_results(result, examples[item], 0)"> ✔</button>
            </h3>

            <br>
          </section>



        </section>

        <section v-if="item >= this.count_of_exmaples">
          <button @click="to_evalution">Vyhodnotit</button>
        </section>

        <section v-if="exercise_completed">
          <h2>Počet chyb: {{num_of_wrong}} z {{examples.length}} příkladů</h2>
          <h2>Tvoje úspěšnost je : {{this.success_rate}}%</h2>
          <h2>Dostáváš odměnu : {{this.reward}}</h2>
          <h2 v-if="wrong_examples.length > 0">Příklady, které byly špatně: </h2>
          <section v-for="(item, index) in wrong_examples" :key="index">
            <h3 v-if="wrong_examples[index].type === 'compare'">{{(index+1)}}.Příklad: {{wrong_examples[index].first_number}} <u>{{wrong_examples[index].result}}</u>  {{wrong_examples[index].second_number}} </h3>
            <h3 v-else-if="wrong_examples[index].type === 'division_remainder'">{{(index+1)}}.Příklad: {{wrong_examples[index].toText}} <u>{{wrong_examples[index].result}} Zb. {{wrong_examples[index].remainder}}</u> </h3>
            <h3 v-else>{{(index+1)}}.Příklad: {{wrong_examples[index].toText}} <u>{{wrong_examples[index].result}}</u> </h3>
            <h3>Tvuj výsledek: {{wrong_examples[index].your_result}}</h3>
            <h3 v-if="wrong_examples[index].type === 'division_remainder'">Tvůj zbytek: {{wrong_examples[index].your_remainder}}</h3>


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
      remainder: 0,
      exercise_completed: false,
      item: 0,
      num_of_wrong:0,
      success_rate:100,
      wrong_examples:[],
      daily_limit : 0,
      reward:0,
      count_of_exmaples: 20

    }
  },

  mounted() {

    this.GENERATE();


  },

  methods: {

    GENERATE(){
      switch (parseInt(this.$store.state.attributes.year_of_study)){
        case 1:
          this.generate_examples_for_I();
          break;
        case 2:
          this.generate_examples_for_II();
          break;
        case 3:
          this.generate_examples_for_III();
          break;
        case 4:
          this.generate_examples_for_IV();
          break;
        case 5:
          this.generate_examples_for_V();
          break;
      }
    },

//--------------------------------------------------------------------------
//--------------GNEREROVANI CVICENI PRO I.ROCNIK-----------------------------
//---------------------------------------------------------------------------



//pro 1.ROCNIK - generovani a priprava cviceni
    generate_examples_for_I(){
      for(let i = 0; i<8; i++){

        if(i<4){
          this.generate_compare_examples(1, 20);
        }
        this.generate_addition_examples(1, 20);
        this.generate_subtraction_examples(1, 20);
      }
      // eslint-disable-next-line
      this.examples = this.examples.sort((a, b) => 0.5 - Math.random());

      //return this.examples;

    },





//--------------------------------------------------------------------------
//--------------GNEREROVANI CVICENI PRO II.ROCNIK-----------------------------
//----------------------------------------------------------------------------



//pro 2.ROCNIK - generovani a priprava cviceni
    generate_examples_for_II(){

      for(let i = 0; i<8; i++){
        if(i<2){
          this.generate_multiplication_examples(1, 5);
          this.generate_round_examples(1, 100, 10);
        }
        this.generate_addition_examples(20, 100);
        this.generate_subtraction_examples(20, 100);
      }
      // eslint-disable-next-line
      this.examples = this.examples.sort((a, b) => 0.5 - Math.random());

      //return this.examples;
    },


//--------------------------------------------------------------------------
//--------------GNEREROVANI CVICENI PRO III.ROCNIK-----------------------------
//----------------------------------------------------------------------------

//pro 3.ROCNIK - generovani a priprava cviceni
    generate_examples_for_III(){

      for(let i = 0; i<4; i++){
        if(i<2){

          this.generate_round_examples(10, 1000, 10);
          this.generate_round_examples(10, 1000, 100);
        }
        this.generate_addition_examples(10, 100);
        this.generate_subtraction_examples(10 , 100);
        this.generate_multiplication_examples(2, 10);
        this.generate_division_examples(2, 100);
      }
      // eslint-disable-next-line
      this.examples = this.examples.sort((a, b) => 0.5 - Math.random());

      //return this.examples;
    },


//--------------------------------------------------------------------------
//--------------GNEREROVANI CVICENI PRO IV.ROCNIK-----------------------------
//----------------------------------------------------------------------------

//pro 4.ROCNIK - generovani a priprava cviceni
    generate_examples_for_IV(){

      for(let i = 0; i<4; i++){
        if(i<2){
          //cele tisice

          this.generate_multiplication_examples(10, 100000);
          this.generate_division_examples(10, 100000);
          this.generate_round_examples(1000, 1000000, 100000);
          this.generate_round_examples(1000, 1000000, 10000);
          this.generate_round_examples(1000, 1000000, 1000);
        }
        if(i<3){
          this.generate_addition_examples(1000, 100000);
          this.generate_subtraction_examples(1000, 100000);
        }

        this.generate_division_remainder_examples(2, 100);
      }
      // eslint-disable-next-line
      this.examples = this.examples.sort((a, b) => 0.5 - Math.random());

      //return this.examples;
    },


    generate_division_remainder_examples(minLimit, maxLimit) {

      let second_number = Math.floor((Math.random() * (10 - minLimit + 1)) + minLimit);
      maxLimit = second_number *10;

      let first_number = Math.floor((Math.random() * (maxLimit - minLimit + 1)) + minLimit);


      let tmp;
      if(second_number > first_number){
        tmp=second_number;
        second_number = first_number;
        first_number = tmp;
      }

      let operator = ':';
      let your_result = 0;
      let your_remainder = 0;
      let message = 'Vpočítej:';
      let type = 'division_remainder';
      let result = Math.floor(first_number / second_number);
      let remainder = first_number % second_number;

      let toText = first_number.toString()+' '+operator.toString()+' '+second_number.toString()+' = ';
      this.example = {message, type, toText, first_number, second_number, operator, result, your_result, remainder, your_remainder}


      if(this.exists_same_example(this.example)){
        this.generate_division_examples(minLimit, maxLimit);

      } else {
        this.examples.push(this.example);
      }

    },

//--------------------------------------------------------------------------
//--------------GNEREROVANI CVICENI PRO V.ROCNIK-----------------------------
//----------------------------------------------------------------------------

//pro 5.ROCNIK - generovani a priprava cviceni

    generate_examples_for_V(){

      for(let i = 0; i<4; i++) {

        this.generate_addition_examples(1, 100);
        //this.generate_subtraction_examples(1, 100);
        this.generate_multiplication_examples(2, 10);
        this.generate_division_examples(2, 100);
        this.generate_int_number_for_roman(1,3000);
        this.generate_string_for_roman();
      }
      // eslint-disable-next-line
      this.examples = this.examples.sort((a, b) => 0.5 - Math.random());

      //return this.examples;
    },

    generate_int_number_for_roman(minLimit, maxLimit){
      //maxLimit = 3000
      let first_number = Math.floor((Math.random() * (maxLimit - minLimit + 1)) + minLimit);


      let operator = '';
      let your_result = 0;
      let message = 'Převeď:';
      let type = 'roman_num';

      let result = this.convert_int_to_roman(first_number);
      let toText = first_number.toString()+' '+operator.toString()+' = ';
      this.example = {message, type, toText, first_number, operator, result, your_result}


      if(this.exists_same_example(this.example)){
        this.generate_int_number_for_roman();
      } else {
        this.examples.push(this.example);
      }
    },

    generate_string_for_roman(){
      let first_number = this.string_generator();

      let operator = '';
      let your_result = 0;
      let message = 'Převeď:';
      let type = 'roman_num';

      let result = this.convert_roman_to_int(first_number);
      let toText = first_number.toString()+' '+operator.toString()+' = ';
      this.example = {message, type, toText, first_number, operator, result, your_result}


      if(this.exists_same_example(this.example)){
        this.generate_string_for_roman();
        //prechod pres desitku
      } else {
        this.examples.push(this.example);
      }

    },



    convert_roman_to_int(s) {
      let result = 0;
      if (s == null) {
        result = 0;
      }
      let myMap = new Map();
      myMap.set('I', 1);
      myMap.set('V', 5);
      myMap.set('X', 10);
      myMap.set('L', 50);
      myMap.set('C', 100);
      myMap.set('D', 500);
      myMap.set('M', 1000);

      let len = s.length;
      for (let i = 0; i < len; i++) {
        if (myMap.get(s.charAt(i)) < myMap.get(s.charAt(i + 1))) {
          result -= myMap.get(s.charAt(i))
        } else {
          result += myMap.get(s.charAt(i))
        }

      }

      return result;
    },

    string_generator(){

      let length = Math.floor((Math.random() * (15 - 1 + 1)) + 1);
      let characters ='MDCLXVI';
      let result = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return result;
    },


    convert_int_to_roman(num){
      let romanMatrix = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
      ];

      if (num === 0) {
        return '';
      }
      for (let i = 0; i < romanMatrix.length; i++) {
        if (num >= romanMatrix[i][0]) {
          return romanMatrix[i][1] + this.convert_int_to_roman(num - romanMatrix[i][0]);
        }
      }

    },



//----------------------------------------------------------------------------
//--------------METODY PRO FUNKCE VSECH ROCNIKU-------------------------------
//----------------------------------------------------------------------------

//--------------------------------UNIVERZALNI METODY PRO GENEROVANI PRIKLADU------------------------------------------------------

    /**
     * generovani prikladu na scitani
     * @param minLimit - random cislo od
     * @param maxLimit random cislo do
     */
    generate_addition_examples(minLimit, maxLimit) {

      let first_number = Math.floor((Math.random() * (maxLimit - minLimit + 1)) + minLimit);
      let second_number = Math.floor((Math.random() * (maxLimit - minLimit + 1)) + minLimit);

      if(parseInt(this.$store.state.attributes.year_of_study) === 4){
        first_number = Math.round((Math.random() * (maxLimit - minLimit + 1)) / minLimit) * minLimit ;
        second_number = Math.round((Math.random() * (maxLimit - minLimit + 1)) / minLimit) * minLimit ;
      }
      else if (parseInt(this.$store.state.attributes.year_of_study) === 5){

        if((first_number + second_number) > maxLimit){
          this.generate_addition_examples(minLimit, maxLimit);
        }

        first_number *= 1000000;
        second_number *= 1000000;
      }

      let operator = '+';
      let your_result = 0;
      let type = 'calculate';
      let message = 'Vpočítej:';

      let result = first_number + second_number;
      let toText = first_number.toString()+' '+operator.toString()+' '+second_number.toString()+' = '
      this.example = {message, type, toText, first_number, second_number, operator, result, your_result};

      if(result > maxLimit && parseInt(this.$store.state.attributes.year_of_study) !== 5){
        this.generate_addition_examples(minLimit, maxLimit);
      }else if(this.exists_same_example(this.example)){
        this.generate_addition_examples(minLimit, maxLimit);
        //prechod pres desitku
      }else if( ((first_number%10) + (second_number%10) > 10) && (parseInt(this.$store.state.attributes.year_of_study) < 3)){
        this.generate_addition_examples(minLimit, maxLimit);
      }else {
        this.examples.push(this.example);
      }

    },

    /**
     * generovani prikladu na odcitani
     * @param minLimit - random cislo od
     * @param maxLimit random cislo do
     */

    generate_subtraction_examples(minLimit, maxLimit) {
      let first_number = Math.floor((Math.random() * (maxLimit - minLimit + 1)) + minLimit);
      let second_number = Math.floor((Math.random() * (maxLimit - minLimit + 1)) + minLimit);

      if(parseInt(this.$store.state.attributes.year_of_study)=== 4){
        first_number = Math.round((Math.random() * (maxLimit - minLimit + 1)) / minLimit) * minLimit ;
        second_number = Math.round((Math.random() * (maxLimit - minLimit + 1)) / minLimit) * minLimit ;
      }
      else if (parseInt(this.$store.state.attributes.year_of_study) === 5){
        first_number *= 1000000;
        second_number *= 1000000;
      }

      let tmp;
      if(second_number > first_number){
        tmp=second_number;
        second_number = first_number;
        first_number = tmp;
      }

      let operator = '-';
      let your_result = 0;
      let message = 'Vpočítej:';
      let type = 'calculate';

      let result = first_number - second_number;
      let toText = first_number.toString()+' '+operator.toString()+' '+second_number.toString()+' = ';
      this.example = {message, type, toText, first_number, second_number, operator, result, your_result}


      if(this.exists_same_example(this.example)){
        this.generate_subtraction_examples(minLimit, maxLimit);
        //prechod pres desitku
      }else if( ((first_number%10) - (second_number%10) < 0) && (parseInt(this.$store.state.attributes.year_of_study) < 3)){
        this.generate_subtraction_examples(minLimit, maxLimit);
      } else {
        this.examples.push(this.example);
      }
    },

    /**
     * generovani prikladu na nasobeni
     * @param minLimit
     * @param maxLimit
     */
    generate_multiplication_examples(minLimit, maxLimit) {
      let first_number = Math.floor((Math.random() * (maxLimit - minLimit + 1)) + minLimit);
      let second_number = Math.floor((Math.random() * (maxLimit - minLimit + 1)) + minLimit);

      let nums = [100, 1000, 10000];

      if(parseInt(this.$store.state.attributes.year_of_study) === 4){

        first_number = Math.floor((Math.random() * (1000 - 10 + 1)) + 10);


        second_number = nums[Math.floor(Math.random()*nums.length)];

      }else if(parseInt(this.$store.state.attributes.year_of_study) === 5){
        //second_number (1-10)
        first_number *= nums[Math.floor(Math.random()*nums.length)];
        first_number /= 10;
      }

      let operator = '•';
      let your_result = 0;
      let message = 'Vpočítej:';
      let type = 'calculate';
      let result = first_number * second_number;
      let toText = first_number.toString()+' '+operator.toString()+' '+second_number.toString()+' = ';
      this.example = {message, type, toText, first_number, second_number, operator, result, your_result}


      if(this.exists_same_example(this.example)){
        this.generate_multiplication_examples(minLimit, maxLimit);

      } else {
        this.examples.push(this.example);
      }

    },

    /**
     * generovani prikladu na deleni
     * @param minLimit
     * @param maxLimit
     */
    generate_division_examples(minLimit, maxLimit) {

      let first_number = Math.floor((Math.random() * (maxLimit - minLimit + 1)) + minLimit);

      let second_number = Math.floor((Math.random() * (10 - minLimit + 1)) + minLimit);


      let nums = [100, 1000, 10000];

      if(parseInt(this.$store.state.attributes.year_of_study) === 4){

        let rdn = nums[Math.floor(Math.random()*nums.length)];

        first_number = rdn * Math.floor((Math.random() * (100 - 10 + 1)) + 10);
        second_number = rdn;

      }else if(parseInt(this.$store.state.attributes.year_of_study) === 5){

        if( (first_number / second_number) > 10 || (first_number % second_number !== 0) ){
          this.generate_division_examples(minLimit, maxLimit);
        }

        first_number *= nums[Math.floor(Math.random()*nums.length)];
        first_number /= 10;


      }

      let operator = ':';
      let your_result = 0;
      let message = 'Vpočítej:';
      let type = 'calculate';
      let result = first_number / second_number;

      let toText = first_number.toString()+' '+operator.toString()+' '+second_number.toString()+' = ';
      this.example = {message, type, toText, first_number, second_number, operator, result, your_result}


      if( (first_number / second_number) > 10  && (parseInt(this.$store.state.attributes.year_of_study) < 5) ){
        this.generate_division_examples(minLimit, maxLimit);
      }
      else if(first_number % second_number !==0 && (parseInt(this.$store.state.attributes.year_of_study) < 5) ){
        this.generate_division_examples(minLimit, maxLimit);
      }
      else if(this.exists_same_example(this.example)){
        this.generate_division_examples(minLimit, maxLimit);

      } else {
        this.examples.push(this.example);
      }

    },


    /**
     * generovani prikladu na zaokrouhlovani
     * @param minLimit
     * @param maxLimit
     * @param rounding_accuracy - na 100, 1000 atd.
     */
    generate_round_examples(minLimit, maxLimit, rounding_accuracy){
      let first_number;
      if(parseInt(this.$store.state.attributes.year_of_study) === 5){
        //pro 5.rocnik, maxLimit = 100 - doporuceno
        //(Math.random() * (maxLimit - minLimit + 1) ) + minLimit)
        first_number = Math.round(( (Math.random() * maxLimit) + minLimit)*100)   /100;
      }else {
        first_number = Math.floor(Math.random() * maxLimit) + minLimit;
      }

      let operator = '≐';
      let your_result = 0;
      let message = 'Zaokrouhli na:';
      let type = 'round';
      let second_number = rounding_accuracy;
      let result = Math.round(first_number / rounding_accuracy) * rounding_accuracy;

      let toText = first_number.toString()+' '+operator.toString()+' ';
      this.example = {message, type, toText, first_number, operator, result, your_result, second_number};

      if(this.exists_same_example(this.example)){
        this.generate_round_examples(minLimit, maxLimit, rounding_accuracy);
      }else{
        this.examples.push(this.example);
      }

    },

    /**
     * generovani prikladu na porovnavani
     * @param minLimit
     * @param maxLimit
     */
    generate_compare_examples(minLimit, maxLimit){
      let first_number = Math.floor((Math.random() * (maxLimit - minLimit + 1)) + minLimit);
      let second_number = Math.floor((Math.random() * (maxLimit - minLimit + 1)) + minLimit);
      let operator = ''; //nepovinne
      let your_result = '';
      let message = 'Porovnej:';
      let type = 'compare';

      let result = this.comapre_number(first_number, second_number);
      let toText = first_number.toString()+' '+second_number.toString();

      this.example = {message, type, toText, first_number, second_number, operator, result, your_result}
      if(this.exists_same_example(this.example)){
        this.generate_compare_examples(minLimit, maxLimit);
      }else{
        this.examples.push(this.example);
      }
    },


//--------------------------------POMOCNE FUNKCE PRO GENEROVANI PRIKLADU-------------------------------------------
//overeni zde takovy priklad jiz v pole neexistuje
    exists_same_example(example){
      let exists = false;
      for(let i=0; i<this.examples.length; i++) {
        if (example.type === 'calculate' || example.type ==='division_remainder') {
          if (example.first_number === this.examples[i].first_number && example.second_number === this.examples[i].second_number &&
              example.operator === this.examples[i].operator) {
            exists = true;
          }
        } else if (example.type === 'compare') {
          if (example.first_number === this.examples[i].first_number && example.second_number === this.examples[i].second_number) {
            exists = true;
          }
        }else if(example.type ==='round'){
          if(example.first_number === this.examples[i].first_number && example.second_number === this.examples[i].second_number){
            exists = true;
          }
        }else if(example.type ==='roman_num'){
          if(example.first_number === this.examples[i].first_number){
            exists = true;
          }
        }
      }
      return exists;
    },

    /**
     * funkce pro porovnani 2 cisel
     * @param first_number
     * @param second_number
     * @returns {string}
     */
    comapre_number(first_number, second_number){

      if(first_number > second_number) {
        return '>';
      }else if(first_number < second_number) {
        return '<';
      }else{
        return '=';
      }

    },

    part_zeros(number){
      if(number % 1 !== 0){
        let parts = number.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return parts.join(".");

      }else{
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      }

    },



//---------------FUNKCE PRO VYHODNOCOVANI-------------------------------------
//odeslani studentova reseni do vysledku
    add_to_results(result_number, example, remainder){
      if(!isNaN(parseInt(result_number)) && example.type !== 'roman_num' ){
        result_number = parseInt(result_number);
      }
      //console.log(result_number);
      //this.results.push(result_number);
      for(let i=0; i<this.examples.length; i++){
        if(this.examples[i] === example){
          this.examples[i].your_result = result_number;
          if(example.type==='division_remainder'){
            this.examples[i].your_remainder = remainder;

          }
        }
      }
      this.item ++;

    },

//Vyhodnnoceni cviceni a udeleni odmneny
    to_evalution(){
      this.item = 0
      this.exercise_completed = true;
      this.wrong_examples = [];
      this.num_of_wrong = 0;
      //zbytecne
      this.reward =0;

      for(let i=0; i<this.examples.length; i++) {

        if (this.examples[i].type === 'division_remainder') {
          if (this.examples[i].result !== this.examples[i].your_result && this.examples[i].remainder !== this.examples[i].your_remainder) {
            this.num_of_wrong++;
            //this.examples[i].your_result = this.results[i];
            this.wrong_examples.push(this.examples[i]);
          }
        } else {
          if (this.examples[i].result !== this.examples[i].your_result) {
            this.num_of_wrong++;
            //this.examples[i].your_result = this.results[i];
            this.wrong_examples.push(this.examples[i]);
          }
        }
      }


      this.success_rate = ((this.examples.length - this.wrong_examples.length) / this.examples.length) * 100;
      if(this.success_rate>= 90){
        this.reward = parseInt( this.$store.state.attributes.year_of_study) * 4;
      }else if(this.success_rate >= 75){
        this.reward = parseInt( this.$store.state.attributes.year_of_study) *2;
      }else if(this.success_rate >= 60){
        this.reward = parseInt(this.$store.state.attributes.year_of_study) * 1;
      }

      //this.$store.state.atributy.penize += this.reward;
      store.commit('addMoney', this.reward);


    },


//Dalsi cviceni
    next_exercise(){
      this.daily_limit++;
      this.exercise_completed = false;
      this.results = [];
      this.examples = [];
      this.GENERATE();
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

  width: 15%;
  padding-top: 1%;
  padding-bottom: 1%;
  padding-left: 2%;
  text-align: center;

  display: inline-block;
  font-size: 75%;
}

</style>
