<template>
  <div v-if="user">
    <game-header/>
    <div class="container">
      <div class="character-main">
    <div class="column character-stats">
      <h2>Postava Jakuba</h2>
      <img v-if="parseInt(user.year) === 3" v-bind:src="'assets/imgs/hlavni-postava/sedlak-Jakub.png'" class="imgItem" alt="">
      <img v-else v-bind:src="'assets/imgs/hlavni-postava/hlavni_postava.png'" class="imgItem" alt="">

      <h3>Schopnosti:</h3>

      <h3>Síla: {{user.abilities.strength}}</h3>
      <h3>Útok: {{user.abilities.attack}}</h3>
      <h3>Obrana: {{user.abilities.defense}}</h3>
      <h3>Výdrž: {{user.abilities.hp}}</h3>
      <br>
      <h3>Vlastníš: {{Math.floor(user.money /10)}} <gold-coin-component/> a {{user.money % 10}} <silver-coin-component/> </h3>

    </div>

   <div class="column character-equip">
     <h1><u>Vybavené předměty</u></h1>

     <section class="one-item" v-if="equip_weapon !== null">
        <h2><u>{{equip_weapon.name}}</u></h2>

        <h3>Útok +{{equip_weapon.value}}</h3>
        <img v-bind:src=equip_weapon.img_address class="imgItem" alt="" />
        <br>
        <button class="equip btn" @click="unequipThisItem(equip_weapon)">Odvybavit</button>



      </section>

     <section class="one-item" v-if="equip_helm !== null">
       <h2><u>{{equip_helm.name}}</u></h2>

       <h3>Obrana +{{equip_helm.value}}</h3>
       <img v-bind:src=equip_helm.img_address class="imgItem" alt="" />
       <br>
       <button class="equip btn"  @click="unequipThisItem(equip_helm)">Odvybavit</button>

     </section>

     <section class="one-item" v-if="equip_armor !== null">
       <h2><u>{{equip_armor.name}}</u></h2>

       <h3>Obrana +{{equip_armor.value}}</h3>
       <img v-bind:src=equip_armor.img_address class="imgItem" alt="" />
       <br>
       <button class="equip btn"  @click="unequipThisItem(equip_armor)">Odvybavit</button>


     </section>



   </div>
</div>

   <div class="character-inventory">
     <h1>Položky ve tvém inventáři</h1>
     <div v-if="user_actual_invetory.length >0">


     <section v-for="item in user_actual_invetory" :key="item.name" class="one-item">

       <h2><u>{{item.name}}</u></h2>

       <h3 v-if="item.using==='attack'">Útok +{{item.value}}</h3>
       <h3 v-else-if="item.using==='defence'">Obrana +{{item.value}}</h3>

       <h3 class="money" v-if="item.price%10 === 0">Prodejní cena: {{item.sell_price/10}} <gold-coin-component/> </h3>
       <h3 class="money" v-else-if= "item.price/10 > 0 ">Prodejní cena: {{item.sell_price/10}}<gold-coin-component/> {{item.sell_price%10}}  <silver-coin-component/> </h3>
       <h3 class="money" v-else >Prodejní cena: {{item.sell_price}}  <silver-coin-component/> </h3>
       <img v-bind:src=item.img_address class="imgItem" alt="" />
       <br>
       <button class="unequip btn"  @click="equipItem(item)">Vybavit</button>


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
import store from "@/store/store";
//import {mapActions, mapGetters} from "vuex";
const user = JSON.parse(localStorage.user ?? '{}') || {};
//const user = store.state.user;


export default {
  name: "characterOverview",
  components: {SilverCoinComponent, GoldCoinComponent, GameHeader},

  //computed: mapGetters(["user"]),

  data(){
    return{
      user:user,
      equip_weapon:null,
      equip_helm:null,
      equip_armor:null,
      user_actual_invetory:[]
    }
  },

  mounted() {
    this.control_equip_weapon();
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    equipItem(item) {


      if(item === this.equip_weapon || item ===this.equip_helm || item ===this.equip_armor) {
        alert('Tato položka je již vybavená');
      }else{
        store.commit('equip_item', item);
        this.control_equip_weapon();
      }



    },

    unequipThisItem(equip_item) {


      store.commit('unequip_this_item', equip_item);

      if(equip_item.type==='weapon'){
        this.equip_weapon = null;
      }else if(equip_item.type==='helm'){
        this.equip_helm=null;
      }else if(equip_item.type==='armor'){
        this.equip_armor = null;
      }

    },

    control_equip_weapon() {

      this.user_actual_invetory=[];

      for (let i = 0; i < user.inventory.length; i++) {
        if (user.inventory[i].type === 'weapon' && user.inventory[i].equip) {
          this.equip_weapon = user.inventory[i];
        }

        if (user.inventory[i].type === 'helm' && user.inventory[i].equip) {
          this.equip_helm = user.inventory[i];
        }

        if (user.inventory[i].type === 'armor' && user.inventory[i].equip) {
          this.equip_armor = user.inventory[i];

        }
        if(!user.inventory[i].equip){
          this.user_actual_invetory.push(user.inventory[i]);
        }

      }

    },


  }

}


</script>

<style scoped>


.column {
  float: left;
  margin-top: 5%;
  margin-left: 5%;
  padding: 10px;
  min-height: 400px; /* Should be removed. Only for demonstration */
}

.character-stats{

  /*
  margin-top: 5%;
  margin-left: 2rem;
  width: 25%;
  padding: 40px 40px;
*/
  width: 20%;
  min-width: 250px;
  border: #3449ff 4px solid;
  border-radius: 0.5em;

  background: rgba(245, 246, 256, 0.97);



}

.character-equip{

  width: 50%;
  min-width: 640px;
  background: rgba(255, 238, 128, 0.9);
  font-size: 20px;
  border-style: solid;
  border-width: 3px;
  border-radius: 1em;

  /*
  min-width: 500px;

  padding-top: 1em;
  padding-bottom: 1em;

   */
}


.character-main:after{
  content: "";
  display: table;
  clear: both;
}

.character-inventory{
  margin-right: auto;
  margin-left: auto;
  margin-top: 2rem;
  position: center;
  text-align: center;
  width: 70%;
  min-width: 500px;
  background: rgba(255, 238, 128, 0.9);
  font-size: 20px;
  border-style: solid;
  border-width: 3px;
  border-radius: 1em;
  padding-top: 1em;
  padding-bottom: 1em;
}

.one-item{
  width: 40%;
  margin-bottom: 5%;
  margin-left: 30%;


  left: 37%;
  right: 37%;
  top: 20%;


  padding: 10px;
  border: 2px;
  border-style: solid;
  border-radius: 10px;
  background-color:#bfff5e
}

.imgItem{
  height: 60%;
  width: 60%;
  border: 3px solid black;
  background-color: black;
  border-radius: 15px;
}

.btn{
  font-size: 22px;
  text-align: center;
  align-items: center;
  padding: 6px 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  border-radius: 6px;
  border: none;

  color: #fff;
  background: linear-gradient(180deg, #4B91F7 0%, #367AF6 100%);
  background-origin: border-box;
  box-shadow: 0 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0 0.8px 0 -0.25px rgba(255, 255, 255, 0.2);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.btn:hover{
  text-decoration: underline;
}



</style>
