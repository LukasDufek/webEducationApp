<template>
<div>
  <game-header/>
  <div class="container">
      <div class="main-content">
        <h2>Tvoje postava {{user.first_name}}</h2>

        <h3>Vylepšit schonposti:</h3>
        <h3>Síla: {{user.abilities.strength}} <button @click="training('strength', strength)">+</button> cena: {{user.abilities.strength}} stříbrných</h3>
        <h3>Útok: {{user.abilities.attack}} <button @click="training('attack', attack)">+</button> cena: {{user.abilities.attack}} stříbrných</h3>
        <h3>Obrana: {{user.abilities.defense}} <button @click="training('defense', defense)">+</button> cena: {{user.abilities.defense}} stříbrných</h3>
        <h3>Výdrž: {{user.abilities.hp}} <button @click="training('hp', hp)">+</button> cena: {{user.abilities.hp}} stříbrných</h3>
        <br>
        <h3>Vlastníš: {{Math.floor(user.money /10)}} <gold-coin-component/> a {{user.money % 10}} <silver-coin-component/> </h3>
        <h3>Zkušenosti: {{user.exp}}</h3>

      </div>

  </div>
</div>
</template>

<script>
import GameHeader from "@/gamePages/gameHeader";
import store from "@/store/store";
import GoldCoinComponent from "@/components/goldCoinComponent";
import SilverCoinComponent from "@/components/silverCoinComponent";
import {mapGetters} from "vuex";

export default {
  name: "tranningAbilities",
  components: {SilverCoinComponent, GoldCoinComponent, GameHeader},

  data(){
    return{
      strength:0,
      attack:0,
      defense:0,
      hp:0,

    }
  },

  computed: mapGetters(["user"]),

  mounted() {

    this.realod();
    console.log('user',this.user);
    console.log('user - getter',this.$store.getters.user);

  },

  methods:{
    //...mapActions(["getProfile"]),

    realod(){
      this.strength = abilities.strength;
      this.attack = parseInt(this.user.abilities.attack);
      this.defense = this.$store.getters.user.abilities.defense;
      this.hp = parseInt(this.user.abilities.hp);
    },

    //switch na vylepseni schonposti
    training(type, price){
      console.log(this.hp);

      price = parseInt(price);
      if(this.user.money >= price){
        store.commit('upgradeAbillity', type);
        store.commit('addMoney', -(price));
        this.realod();
      }else{
        alert('Nedostatek peněz');
      }
    },


  },


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
