<template>

<div v-if="!closed" class="help-container">
  <button @click="close_tutorial" class="close-tutorial">✖</button>
  <h1>Nápověda</h1>
<h3 class="text-tutorial">{{message}}</h3>
</div>

</template>

<script>
export default {
  name: "helpTutorial",
  props: ["message"],


  data(){
    return{
      text:"",
      closed: false
    }
  },

  methods:{

    close_tutorial(){
      this.closed = true;
    }


  }


}
</script>

<style scoped>

.help-container{
  /*
  margin-right: auto;
  margin-left: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
*/
  margin: 2rem auto 3rem auto;
  position: center;
  text-align: center;
  width: 50%;
  background: #94ff80;

  font-size: 23px;
  border-style: solid;
  border-radius: 4em;

}

.text-tutorial{
  text-align: center;
  font-size: 20px;
  padding: 2% 5% 5% 5%;
}

.close-tutorial{

  margin-top: 1em;
  margin-bottom: -1em;


  background: #4e9b4e;
  font-size: 18px;
}


</style>
