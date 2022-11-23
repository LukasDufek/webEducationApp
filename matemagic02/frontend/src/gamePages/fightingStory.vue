<template>
  <div>
    <game-header/>
    <div class="container">
      <div class="main-content">

        <h2>{{actualContent}}</h2>
        <button class="button" @click="continue_in_story">Pokracovat</button>
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
      index:1,
      pages:''
    }

  },
  mounted() {
    this.allContent = storyText.split(";");

    this.splitText();

  },


  methods: {

    splitText(){

      let tmpText = this.allContent;

      for(let i=0; i<this.index; i++){
        this.actualContent += tmpText[i];
      }

    },

    continue_in_story(){
      this.index++;
      this.splitText();

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
  margin-top: 3rem;
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

</style>
