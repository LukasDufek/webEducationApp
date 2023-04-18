<template>
<div>
  <game-header/>
  <div class="container">

    <help-tutorial :message="text_tutorial" />
      <div class="main-content">
        <h2>Tvoje postava {{user.first_name}}</h2>

        <h3>Vylepšit schonposti:</h3>
        <h3 v-if="user.abilities.strength*4 >= 10">Síla: {{user.abilities.strength}} <button class="upgrade-button" @click="training('strength', strength*4)">+</button> cena: {{Math.floor(user.abilities.strength*4 /10)}} <gold-coin-component/> a {{user.abilities.strength*4 % 10}} <silver-coin-component/></h3>
        <h3 v-else>Síla: {{user.abilities.strength}} <button class="upgrade-button" @click="training('strength', strength*4)">+</button> cena: {{user.abilities.strength*4}} <silver-coin-component/> </h3>


        <h3 v-if="user.abilities.attack*4 >= 10">Útok: {{user.abilities.attack}} <button class="upgrade-button" @click="training('attack', attack*4)">+</button> cena: {{Math.floor(user.abilities.attack*4 /10)}} <gold-coin-component/> a {{user.abilities.attack*4 % 10}} <silver-coin-component/></h3>
        <h3 v-else>Útok: {{user.abilities.attack}} <button class="upgrade-button" @click="training('attack', attack*4)">+</button> cena: {{user.abilities.attack*4}} <silver-coin-component/></h3>


        <h3 v-if="user.abilities.defense*4 >= 10">Obrana: {{user.abilities.defense}} <button class="upgrade-button" @click="training('defense', defense*4)">+</button> cena: {{Math.floor(user.abilities.defense*4 /10)}} <gold-coin-component/> a {{user.abilities.defense*4 % 10}} <silver-coin-component/></h3>
        <h3 v-else>Obrana: {{user.abilities.defense}} <button class="upgrade-button" @click="training('defense', defense*4)">+</button> cena: {{user.abilities.defense*4}} <silver-coin-component/></h3>

        <h3 v-if="user.abilities.hp*4 >= 10">Výdrž: {{user.abilities.hp}} <button class="upgrade-button" @click="training('hp', hp*4)">+</button> cena: {{Math.floor(user.abilities.hp*4 /10)}} <gold-coin-component/> a {{user.abilities.hp*4 % 10}} <silver-coin-component/></h3>
        <h3 v-else>Výdrž: {{user.abilities.hp}} <button class="upgrade-button" @click="training('hp', hp*4)">+</button> cena: {{user.abilities.hp*4}} <silver-coin-component/></h3>

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
import helpTutorial from "@/components/helpTutorial";
//import {mapGetters} from "vuex";
const user = JSON.parse(localStorage.user ?? '{}') || {};


export default {
  name: "tranningAbilities",
  components: {SilverCoinComponent, GoldCoinComponent, GameHeader, helpTutorial},

  data(){
    return{
      text_tutorial:"Zde si můžeš vylepšovat své herní dovednosti, každé vylepšení však stojí určitý počet mincí.",

      strength:0,
      attack:0,
      defense:0,
      hp:0,
      user:user


    }
  },


  mounted() {

    //this.user = JSON.parse(localStorage.getItem("user"));
    this.realod();


  },

  methods:{
    //...mapActions(["getProfile"]),

    realod(){

      this.user= JSON.parse(localStorage.user)
      this.strength = parseInt(this.user.abilities.strength);
      this.attack = parseInt(this.user.abilities.attack);
      this.defense = parseInt(this.user.abilities.defense);
      this.hp = parseInt(this.user.abilities.hp);

      this.control_equip_weapon();
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


    control_equip_weapon() {


      for (let i = 0; i < user.inventory.length; i++) {
        if (user.inventory[i].type === 'weapon' && user.inventory[i].equip) {
          this.user.abilities.attack -= user.inventory[i].value;
        }

        else if (user.inventory[i].type !== 'weapon' && user.inventory[i].equip) {
          this.user.abilities.defense -= user.inventory[i].value;
        }


      }

    },


  },


  }
</script>

<style scoped>

.upgrade-button{
  box-shadow:inset 0 1px 0 0 #54a3f7;
  background: #007dc1 linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
  border-radius:3px;
  border:1px solid #124d77;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial,serif;
  font-size:20px;
  padding:3px 8px;
  text-decoration:none;
  text-shadow:0 1px 0 #154682;
}



</style>
