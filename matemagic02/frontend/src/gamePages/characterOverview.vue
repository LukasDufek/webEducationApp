<template>
  <div>
    <game-header/>
    <div class="container">
    <div class="main-content">
      <h2>Tvoje postava {{capitalizeFirstLetter(user.first_name)}}</h2>

      <h3>Tvé schonposti:</h3>
      <h3>Síla: {{user.abilities.strength}}</h3>
      <h3>Útok: {{user.abilities.attack}}</h3>
      <h3>Obrana: {{user.abilities.defense}}</h3>
      <h3>Výdrž: {{user.abilities.hp}}</h3>
      <br>
      <h3>Vlastníš: {{Math.floor(user.money /10)}} <gold-coin-component/> a {{user.money % 10}} <silver-coin-component/> </h3>
      <h3>Zkušenosti: {{user.exp}}</h3>

    </div>


  </div>
  </div>

</template>

<script>
import GameHeader from "@/gamePages/gameHeader";
import GoldCoinComponent from "@/components/goldCoinComponent";
import SilverCoinComponent from "@/components/silverCoinComponent";
//import {mapActions, mapGetters} from "vuex";
const user = JSON.parse(localStorage.user) || {};


export default {
  name: "characterOverview",
  components: {SilverCoinComponent, GoldCoinComponent, GameHeader},

  //computed: mapGetters(["user"]),

  data(){
    return{
      user:user
    }
  },
  methods:{
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }

}


</script>

<style scoped>

.main-content{
  margin-top: 10%;
  margin-left: 2rem;
  max-width: 350px;
  padding: 40px 40px;

  border: #3449ff 4px solid;

  background: white;
}

</style>
