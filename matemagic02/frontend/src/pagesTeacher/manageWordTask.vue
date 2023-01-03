<template>

  <div>
    <header-teacher/>
    <div class="container" v-if="!editState">
    <div class="main-content">
      <br>
      <section v-for="(item,index) in word_tasks" :key="index">
        <h1>{{index +1}}.Úloha</h1>
      <h3>Zadání úlohy</h3>
        <h4>{{word_tasks[index].text_of_task}}</h4>

      <h2>Ročník</h2>
        <h3>{{word_tasks[index].for_year}}</h3>

      <h2>Správný výsledek</h2>
        <h3>{{word_tasks[index].result}}</h3>

      <h2>Odměna pro žáka</h2>
        <h3>{{word_tasks[index].reward}}</h3>

        <button @click="toOverWriting(word_tasks[index])" >Upravit</button>
        <button @click="delete_task(index, word_tasks[index])">Smazat</button>
        <hr>



      </section>

    </div>
    </div>

    <div v-else>
    <!--tady bude prostor pro upravy slovnich uloh -->

      <h2>Zadání slovní úlohy:</h2>
      <p style="white-space: pre-line;">{{ searched_task.text_of_task }}</p>
      <textarea class="text-area-for-task" v-model="searched_task.text_of_task" placeholder="Zde napiš celé znění slovní úlohy"></textarea>
      <br>
      <h2>Zadej ročník, pro jaký je úlohu určena</h2>
      <select v-model="searched_task.for_year">
        <option disabled value="">Zvolit ročník</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>

      <h2>Sem zadej výsledek slovní úlohy</h2>
      <input type="number" v-model="searched_task.result">
      <h2>Sem zadej výsledek odměnu pro žáka ve stříbrných mincích</h2>
      <input type="number" min=1 max=10 v-model="searched_task.reward">

      <br>
      <button @click="overWriteWordTask()">Dokončit úpravy</button>

    </div>


  </div>

</template>

<script>
import axios from "axios";
import HeaderTeacher from "@/components/headerTeacher";


export default {
  name: "manageWordTask",
  components: {HeaderTeacher},

  data(){
    return{
      text_of_task:'',
      for_year: 1,
      result:0,
      reward:1,
      //
      editState:false,
      word_tasks:[],
      searched_task:{},
      //vybranaUloha:{}
    }
  },
 async mounted() {

    this.editState = false;
    try {
      this.$store.state.word_tasks = (await axios.get("/api/tasks")).data;
      this.word_tasks = this.$store.state.word_tasks;
    }catch (err){
      console.log(err);
    }
  },
  methods:{

   async delete_task(position, word_task){

      try {
        await axios.delete("api/tasks/" + word_task._id);
        this.word_tasks.splice(position, 1);
        this.$store.state.word_tasks = this.word_tasks;
      }catch (err){
        console.log(err);
      }

    },

    toOverWriting(task){

      this.editState = true;
      this.searched_task = task;

    },

    async overWriteWordTask(){

      let id = this.searched_task._id;

      for(let i=0; i<this.word_tasks.length; i++){
        if(id=== this.word_tasks[i]._id){
          this.word_tasks[i] = this.searched_task;
        }
      }

      await axios({
        method: 'put',
        url: `api/tasks/${id}`,
        data: this.searched_task

      });


      this.editState = false;
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
  margin: auto;
  margin-top: 2rem;
  position: center;
  text-align: center;
  width: 70%;
  background: #ffee80;
  font-size: 20px;
  border-style: solid;
  border-radius: 1em;
  border-radius: 1em;
  padding-left: 2em;
  padding-top: -1em;

  margin-bottom: 5rem;
}

</style>
