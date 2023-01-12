<template>
  <div>
    <game-header/>
    <div class="container">
      <div class="main-content">

        <button class="change-type-btn">3.Ročník</button>
        <button class="change-type-btn">4.Ročník</button>
        <button class="change-type-btn">5.Ročník</button>


        <div class="book">
        <p>{{actualContent}}</p>

        </div>

        <br>
          <button @click="flipping_in_book_back" class="to-left">🡸</button>
          <button @click="flipping_in_book_forward" v-if="index<= breakpoint" class="to-right">🡺</button>




        <div if="!continue_story">
          <button >Utok</button>
        </div>


        <br>
        <br>
        <br>
      </div>
    </div>
  </div>

</template>

<script>
//import axios from "axios";

import GameHeader from "@/gamePages/gameHeader";
import storyText from './story.txt'



export default {
  name: "fightingStory",
  components: {GameHeader},

  data() {
    return {
      allContent: '',
      actualContent: '',
      Chapter:0,
      index:-1,
      story_progress:0,
      pages:'',
      continue_story:true,
      breakpoint:5
    }

  },
  mounted() {

    this.allContent = storyText.split(";");


  },


  methods: {

    flipping_in_book_forward(){
      this.index++;
      this.actualContent =this.allContent[this.index];

      this.story_progress++;

      if(this.story_progress === this.breakpoint && this.continue_story){
        this.continue_story = false
      }


    },

    flipping_in_book_back(){

      if(this.index > 0){
        this.index--;
        this.actualContent =this.allContent[this.index];
      }


    },


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
  margin-top: 3rem;
  position: center;
  text-align: center;
  width: 80%;
  background: #ffee80;
  font-size: 20px;
  border-style: solid;
  border-radius: 1em;
  padding-top: -1em;
}


.book{

  height:200px;
  width:80%;
  overflow:scroll;
  background: #edfaff;
  font-size: 20px;
  border-style: solid;
  border-radius: 0.3em;
  padding-left: 1em;

  margin-left: auto;
  margin-right: auto;
  position: center;
  margin-top: 3rem;
  text-align: left;


}



.change-type-btn{
  margin-top: 2rem;
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 1% 2%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 115%;
  margin-left: 1%;
}

</style>
