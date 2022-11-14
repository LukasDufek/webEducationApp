<template>
  <div>
    <game-header/>
    <div class="container">

    </div>
  </div>

</template>

<script>
//import axios from "axios";

import GameHeader from "@/gamePages/gameHeader";

export default {
  name: "fightingStory",
  components: {GameHeader},

  data(){
    return{
      text:''
    }

  },
  mounted() {
    const reader = new FileReader();
    this.text = reader.readAsText()
  }
}
</script>

<style scoped>

</style>
