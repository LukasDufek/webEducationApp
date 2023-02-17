<template>
  <div>
    <game-header/>
    <div class="container">
    <div class="character-stats">
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

   <div class="character-equp">

   </div>
   <div class="character-inventory">
     <h1>Položky ve tvém inventáři</h1>
     <div v-if="user.inventory.length >0">


     <section v-for="item in user.inventory" :key="item.name" class="one-item">

       <h2><u>{{item.name}}</u></h2>

       <h3 v-if="item.using==='attack'">Útok +{{item.value}}</h3>
       <h3 v-else-if="item.using==='defence'">Obrana +{{item.value}}</h3>

       <h3 class="money" v-if="item.price%10 === 0">Prodejní cena: {{item.sell_price/10}} <gold-coin-component/> </h3>
       <h3 class="money" v-else-if= "item.price/10 > 0 ">Prodejní cena: {{item.sell_price/10}}<gold-coin-component/> {{item.sell_price%10}}  <silver-coin-component/> </h3>
       <h3 class="money" v-else >Prodejní cena: {{item.sell_price}}  <silver-coin-component/> </h3>
       <img v-bind:src=item.img_address class="imgItem" alt="" />
     </section>
     </div>
     <div v-else>
       <h2>Tvůj inventář je prázndný</h2>
     </div>

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

.character-stats{
  margin-top: 5%;
  margin-left: 2rem;
  width: 350px;
  padding: 40px 40px;

  border: #3449ff 4px solid;
  border-radius: 0.5em;

  background: rgba(245, 246, 256, 0.97);

}

.character-inventory{
  margin-right: auto;
  margin-left: auto;
  margin-top: 2rem;
  position: center;
  text-align: center;
  width: 70%;
  background: rgba(255, 238, 128, 0.9);
  font-size: 20px;
  border-style: solid;
  border-width: 3px;
  border-radius: 1em;
  padding-top: 1em;
  padding-bottom: 1em;
}

.one-item{
  position: center;
  width: 30%;
  min-width: 11rem;
  margin-bottom: 5%;
  margin-left: 25vw;

  padding: 10px;
  border: 2px;
  border-style: solid;
  border-radius: 10px;
  background-color:#bfff5e;
}

.imgItem{
  padding: 10px;
  border: 2px;
  border-style: solid;
  background-color: white;
}





</style>
