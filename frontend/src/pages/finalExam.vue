<template>
  <div>
    <header-page/>
    <div class="container">

      <help-tutorial :message="text_tutorial"/>

      <div class="main-content">


<!--
    <div v-if="control_component_metod()===false">
      <control-component/>
    </div>

    <div v-else-if="control_component_metod()===true">

-->
         <div> <!-- tento div pak smazat -->






        <div v-if="test_phase==='before'">
        <h2>Pokusit se o zvládnutí testu</h2>
          <button class="confirm-example-button" @click="prepare_test">Začít test</button>
        </div>

        <div v-else-if="test_phase==='inTest'">

          <final-example-component :examples="examples" @resultchanged="onChange" />


            <section v-for="(item, index) in word_tasks" :key="item.text_of_task">
              <h4>{{ item.text_of_task }}</h4>
              <input class="input-submit" type="number" v-model="item.student_result">
              <button class="confirm_answer-btn" @click="toResultWordTask(item.student_result, index)">✅</button>
            </section>
            <br>



            <button class="confirm-example-button" @click="to_evalution">Ukončit a vyhodnotit test</button>
            <br>

          </div>


          <div v-else-if="test_phase === 'evalute'">
            <h2>Tvoje úspěšnost je : {{this.success_rate}}%</h2>
            <h2>Počet chyb: {{wrong_examples.length}} z {{examples.length}} příkladů</h2>
            <h2 v-if="wrong_examples.length > 0">Příklady, které byly špatně: </h2>

            <section v-for="(item, index) in wrong_examples" :key="index">
              <h3 v-if="item.type === 'compare'">{{(index+1)}}.Příklad: {{item.first_number}} <u>{{item.result}}</u>  {{item.second_number}} </h3>
              <h3 v-else-if="item.type === 'division_remainder'">{{(index+1)}}.Příklad: {{item.toText}} <u>{{item.result}} Zb. {{item.remainder}}</u> </h3>
              <h3 v-else>{{(index+1)}}.Příklad: {{item.toText}} <u>{{item.result}}</u> </h3>
              <h3>Tvuj výsledek: {{item.your_result}}</h3>
              <h3 v-if="item.type === 'division_remainder'">Tvůj zbytek: {{item.your_remainder}}</h3>

            </section>

            <h2 v-if="wrong_word_task.length > 0">Úlohy, které byly špatně: </h2>
            <section v-for="item in wrong_word_task" :key="item.text_of_task">
              <h3>Zadaní: {{item.text_of_task}}</h3>
              <h3>Výsledek: {{item.result}}</h3>
              <h3>Tvůj výsledek: {{item.your_result}}</h3>

            </section>


          </div>


      </div>
      </div>

      </div>
     </div>
  </template>

  <script>

  import {ExampleGenerator} from "@/ExampleGenerator";
  import FinalExampleComponent from "@/components/finalExampleComponent";
  //import controlComponent from "@/components/controlComponent";
  import axios from "axios";
  import helpTutorial from "@/components/helpTutorial";

  const myExampleGenerator = new ExampleGenerator();


  export default {
    name: "finalExam",
    components: {FinalExampleComponent, helpTutorial//, controlComponent
      },
    data(){
      return{
        text_tutorial:"Na této stránce můžeš absolvovat závěrečný test, při jehož splnění postoupíš do dalšího ročníku. V dalším ročníku se ti odemknou nové možnosti, jako: nové příklady, nové slovní úlohy, ale i nové kapitoly v příběhu. Pokud jsi právě ve 2.ročníku tak se ti zpřístupní i příběh celkový. Pro přístup k testu, ale musíš mít splněné určité podmínky napsané níže. Pokud máš tyto podmínky splněné automaticky se ti nabídne možnost začít test.",

        examples:[],
        wrong_examples:[],
        word_tasks:[],
        wrong_word_task:[],
        results:[],
        last_example:{},
        user: JSON.parse(localStorage.user),
        test_phase:'before',
        reward:0,
        success_rate:0,
      }

    },
    mounted() {
      //localStorage.removeItem('test_examples');
      //localStorage.removeItem('test_word_tasks');
      this.examples = JSON.parse(localStorage.getItem("test_examples")) || [];
      this.word_tasks = JSON.parse(localStorage.getItem("test_word_tasks")) || [];
      if(this.examples.length !== 0 && this.word_tasks.length !== 0){
        this.test_phase = 'inTest';
      }

    },

    methods:{

      control_component_metod(){
        return this.examples.length === 0;

      },

      onChange(data) {

        this.last_example = data;
        console.log(data);

        this.examples[this.last_example.index].your_result = this.last_example.your_result;
        this.examples[this.last_example.index].your_remainder = this.last_example.your_remainder;

        localStorage.setItem('test_examples', JSON.stringify(this.examples));


        for(let i=0; i<this.examples.length; i++) {
          //console.log(i + 1 + '.Priklad: ' + this.examples[i].your_result);
        }

      },

      toResultWordTask(student_result, position){
        this.word_tasks[position].student_result = student_result;
        localStorage.setItem('test_word_tasks', JSON.stringify(this.examples));


      },

      async prepare_test() {
        this.test_phase = 'inTest';
        let tasks = (await axios.get("/api/tasks")).data;


        switch (parseInt(this.user.year)){
          case 1:
            this.examples = myExampleGenerator.generate_examples_for_I(50);
            break;
          case 2:
            this.examples = myExampleGenerator.generate_examples_for_II(50);

            break;
          case 3:
            this.examples = myExampleGenerator.generate_examples_for_III(50);

            break;
          case 4:
            this.examples = myExampleGenerator.generate_examples_for_IV(50);

            break;
          case 5:
            this.examples = myExampleGenerator.generate_examples_for_V(50);

            break;
        }


        for(let i=0; i<tasks.length; i++){
          if(tasks[i].for_year === parseInt(this.user.year)){
            this.word_tasks.push(tasks[i]);
          }
        }

        this.examples = myExampleGenerator.sort_examples(this.examples);
        this.word_tasks = this.word_tasks.sort(() => 0.5 - Math.random());
        this.word_tasks = this.word_tasks.slice(0, 2);

        localStorage.setItem('test_examples', JSON.stringify(this.examples));
        localStorage.setItem('test_word_tasks', JSON.stringify(this.word_tasks));


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


      to_evalution() {
        this.test_phase = 'evalute';
        this.wrong_examples = [];

        //zbytecne
        this.reward = 0;

        for (let i = 0; i < this.examples.length; i++) {


          if (isNaN(this.examples[i].result) && this.examples[i].type === 'roman_num') {
            this.examples[i].your_result = String(this.examples[i].your_result).toUpperCase();
            if (this.examples[i].result !== this.examples[i].your_result) {
              this.wrong_examples.push(this.examples[i]);
            }
          } else if (this.examples[i].type === 'division_remainder') {
            if (this.examples[i].result !== this.examples[i].your_result && this.examples[i].remainder !== this.examples[i].your_remainder) {
              this.wrong_examples.push(this.examples[i]);
            }
          } else {
            if (this.examples[i].type === 'decimal' && this.examples[i].result % 1 !== 0 && this.examples[i].operator !== ':') {
              this.examples[i].result = parseFloat(this.examples[i].result).toFixed(2);
            }
            if (this.examples[i].result !== this.examples[i].your_result) {
              this.wrong_examples.push(this.examples[i]);
            }
          }
        }

        for(let i=0; i<this.word_tasks.length; i++){
          if(this.word_tasks[i].student_result !== this.word_tasks[i].result){
            this.wrong_word_task.push(this.word_tasks[i]);
          }
        }

        let success_rate1 = ((this.examples.length - this.wrong_examples.length) / this.examples.length ) *4/5;
        let success_rate2 = ((this.word_tasks.length - this.wrong_word_task.length) / this.word_tasks.length ) /5;

         this.success_rate = success_rate1 + success_rate2;

        if(this.success_rate >= 90){
          //splnil si test a postupujes do dalisho rocniku

          //remove localStorage.examples
          //remove localStorage.tasks
          //zobrazit vysledky
          //nastavit rocnik
          //setnout uspesnost
          //setnout pocet cviceni

        }

        localStorage.removeItem('test_examples');
        localStorage.removeItem('test_word_tasks');






      },


    },


    }



  </script>

<style scoped>

.input-submit{
  height: 2rem;
  width: 12rem;
  font-size: 20px;
}

.confirm_answer-btn{


  margin-top: 1em;
  margin-left: 0.5em;
  background-color: #a9ff7b;
  border:2px solid #020402;


  display:inline-block;
  color:#666666;


  font-family:Arial,serif;
  font-size:25px;
  font-weight:bold;
  padding:4px 12px;
  text-decoration:none;
}


</style>
