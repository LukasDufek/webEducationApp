<template>
  <div>
    <header-page/>
    <div class="container">
    <div class="main-content">
    <h2>Jako učitel můžeš zadávat slovní úlohy</h2>
   <!-- <button class="change-shopping-btn" @click="changeTypeOfTasks">{{this.button_msg}}</button> -->


      <section v-if="addTextTask">
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
    <input type="number" min=1 max=50 v-model="reward">

      <br>
    <button @click="addWordTask(text_of_task, for_year, result, reward)">Přidat úlohu</button>
      <br>
      <br>
      <br>

      </section>

      <section v-else>

        <h2>Zadání slovní úlohy:</h2>


        <p style="white-space: pre-line;">{{ text_of_task }}</p>
        <textarea class="text-area-for-task" v-model="text_of_task" placeholder="Zde napiš celé znění slovní úlohy"></textarea>

        <h3>Zde bude výběr z obrázků...</h3>


        <form @submit.prevent="onSubmit" enctype="multipart/form-data">
          <div class="fields">
            <label>Upload File</label><br/>
            <input
                type="file"
                ref="file"
                @change="onSelect"
            />
          </div>
          <div class="fields">
            <button>Submit</button>
          </div>
          <div class="message">
            <h5>{{message}}</h5>
          </div>
        </form>

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

      </section>


  </div>
    </div>

</div>

</template>

<script>

import store from "@/store/store";
import headerPage from "@/components/headerPage";
import {mapActions, mapGetters} from "vuex";
import axios from "axios";
//import axios from "axios";


export default {
  name: "addWordTask",
  components: {headerPage},
  data() {
    return {
      image1: '',
      image2: '',
      image3: '',
      message:'',

      text_of_task:'',
      for_year: 1,
      result:0,
      reward:1,
      word_tasks:[],
      actual_task:{},
      button_msg: "Zadat obrázkovou úlohu",
      addTextTask: true
    }
  },
  computed: mapGetters(["user"]),
  methods: {
    ...mapActions(["getProfile"]),


    changeTypeOfTasks(){
      if(this.button_msg === "Zadat obrázkovou úlohu"){
        this.button_msg = "Zadat úlohu s textem";
        this.addTextTask = false;
      }else{
        this.button_msg = "Zadat obrázkovou úlohu";
        this.addTextTask = true;
      }


    },


    onSelect(){
      //const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const file = this.$refs.file.files[0];

      this.image1 = file;
      /*
      if(!allowedTypes.includes(file.type)){
        this.message = "Filetype is wrong!!"
      }

       */
      if(file.size>500000){
        this.message = 'Too large, max size allowed is 500kb'
      }
      console.log(this.image1);
    },


    async onSubmit(){
      const formData = new FormData();
      formData.append('file',this.image1);
      console.log(this.image1);

      try{
        //await axios.post('http://localhost:5000/upload',formData);

        await axios.post("api/tasks", this.image1);
        this.message = 'Uploaded!!'
      }
      catch(err){
        console.log(err);
        this.message = err.response.data.error
      }
    },



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

.text-area-for-task{
  width: 40%;

}

.imagePreviewWrapper {
  width: 250px;
  height: 250px;
  display: block;
  cursor: pointer;
  margin: 0 auto 30px;
  background-size: cover;
  background-position: center center;
}

</style>
