<template>

  <div>
    <header-teacher/>
    <div class="container">
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

        <button>Upravit</button>
        <button @click="delete_task(index, word_tasks[index])">Smazat</button>
        <hr>



      </section>

    </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import HeaderTeacher from "@/components/headerTeacher";

export default {
  name: "editWordTask",
  components: {HeaderTeacher},

  data(){
    return{
      word_tasks:[],
      searched_task:{},
      //vybranaUloha:{}
    }
  },
 async mounted() {
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
