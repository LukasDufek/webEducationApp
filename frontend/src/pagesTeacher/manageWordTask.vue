<template>

  <div>
    <header-page/>
    <div class="container">
    <div class="main-content">

   <section v-if="!editState">
      <br>
      <section class="word-task-content" v-for="(item, index) in word_tasks" :key="index">
        <h1>{{index +1}}.Úloha</h1>
      <h3><u>Zadání úlohy: </u></h3>
        <h4>{{word_tasks[index].text_of_task}}</h4>

      <h2><u>Ročník: </u></h2>
        <h3>{{word_tasks[index].for_year}}</h3>

      <h2><u>Správný výsledek: </u></h2>
        <h3>{{word_tasks[index].result}}</h3>

      <h2><u>Odměna pro žáka: </u></h2>
        <!-- {{item.price/10}} <gold-coin-component/> {{item.price%10}}  <silver-coin-component/> -->
        <h3 v-if="word_tasks[index].reward >= 10 ">{{Math.floor(word_tasks[index].reward/10)}} <gold-coin-component/> {{word_tasks[index].reward%10}}  <silver-coin-component/> nebo-li {{word_tasks[index].reward}}  <silver-coin-component/></h3>
        <h3 v-else> {{word_tasks[index].reward}}  <silver-coin-component/></h3>

        <button class="edit-word-task-btn" @click="toOverWriting(word_tasks[index])" >Upravit</button>
        <button class="delete-word-task-btn" @click="delete_task(index, word_tasks[index])">Smazat</button>
        <hr>



      </section>


    </section>

    <section v-else>
    <!--tady bude prostor pro upravy slovnich uloh -->

      <h2><u>Zadání slovní úlohy:</u></h2>
      <h3>{{ searched_task.text_of_task }}</h3>
      <textarea class="text-area-for-task" v-model="searched_task.text_of_task" placeholder="Zde napiš celé znění slovní úlohy"></textarea>
      <br>
      <h2><u>Zadej ročník, pro jaký je úlohu určena: </u></h2>
      <select v-model="searched_task.for_year">
        <option disabled value="">Zvolit ročník</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>

      <h2><u>Sem zadej výsledek slovní úlohy: </u></h2>
      <input type="number" v-model="searched_task.result">
      <h2><u>Sem zadej výsledek odměnu pro žáka ve stříbrných mincích: </u></h2>
      <input type="number" min=1 max=10 v-model="searched_task.reward">

      <br>
      <button class="finish-edit-btn" @click="overWriteWordTask()">Dokončit úpravy</button>

    </section>



    </div>
    </div>


  </div>

</template>

<script>
import axios from "axios";
import headerPage from "@/components/headerPage";
import goldCoinComponent from "@/components/goldCoinComponent";
import silverCoinComponent from "@/components/silverCoinComponent";


export default {
  name: "manageWordTask",
  components: {headerPage, goldCoinComponent, silverCoinComponent},

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

button:hover{
  text-decoration: underline;
}

.edit-word-task-btn{
  margin-right: 2%;

  box-shadow:inset 0 1px 0 0 #fff6af;
  background-color:#ffec64;
  border-radius:6px;
  border:1px solid #ffaa22;
  display:inline-block;
  cursor:pointer;
  color:#333333;
  font-family:Arial,serif;
  font-size:15px;
  font-weight:bold;
  padding:6px 24px;
  text-decoration:none;
  text-shadow:0 1px 0 #ffee66;
}

.edit-word-task-btn:hover{
  background-color:#ffab23;
}

.delete-word-task-btn{
  margin-left: 2%;

  box-shadow:inset 0 1px 0 0 #f7c5c0;
  background-color: #e4685d;
  border-radius:6px;
  border:1px solid #d83526;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial,serif;
  font-size:15px;
  font-weight:bold;
  padding:6px 24px;
  text-decoration:none;
  text-shadow:0 1px 0 #b23e35;
}

.delete-word-task-btn:hover{
  background-color:#f00003;
}

.word-task-content{
  padding-right:4%;
  padding-left: 3%;
}

.finish-edit-btn{

  margin-top: 1rem;
  margin-bottom: 1rem;

  box-shadow: 0px 10px 14px -7px #3e7327;
  background-color:#77b55a;
  border-radius:4px;
  border:1px solid #4b8f29;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:18px;
  font-weight:bold;
  padding:6px 12px;
  text-decoration:none;
  text-shadow:0px 1px 0px #5b8a3c;
}

.finish-edit-btn:hover{
  background-color:#72b352;
  font-size: 19px;
}
.text-area-for-task{
  height: 15rem;
  width: 50%;
  max-width: 85%;
  max-height: 15rem;
}

</style>
