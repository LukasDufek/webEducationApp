<template>
  <div>
    <game-header/>
    <div class="container">
  <div class="main-content">
    <h2 class="your-money">{{Math.floor(user.money/10)}} <gold-coin-component/>   {{user.money%10 }} <silver-coin-component/></h2>
    <button class="change-shopping-btn" @click="changeShopping">{{this.button_msg}}</button>
    <br>
    <br>

    <button class="change-type-btn" @click="changeSelectedType('zbrane')">Zbrane</button>
    <button class="change-type-btn" @click="changeSelectedType('helmy')">Helmy</button>
    <button class="change-type-btn" @click="changeSelectedType('brneni')">Brneni</button>
    <hr>

    <section v-for="item in selectedItems" :key="item._id" class="one-item">
      <h2><u>{{item.name}}</u></h2>
      <h3 v-if="item.using==='attack'">Útok +{{item.value}}</h3>
      <h3 v-else-if="item.using==='defence'">Obrana +{{item.value}}</h3>

      <h3 class="money" v-if="item.price%10 === 0">Cena: {{item.price/10}} <gold-coin-component/> </h3>
      <h3 class="money" v-else-if= "item.price/10 > 0 ">Cena: {{item.price/10}} <gold-coin-component/> {{item.price%10}}  <silver-coin-component/> </h3>
      <h3 class="money" v-else >Cena: {{item.price}}  <silver-coin-component/> </h3>


      <h3 class="money" v-if="item.price%10 === 0">Prodejní cena: {{item.sell_price/10}} <gold-coin-component/> </h3>
      <h3 class="money" v-else-if= "item.price/10 > 0 ">Prodejní cena: {{item.sell_price/10}}<gold-coin-component/> {{item.sell_price%10}}  <silver-coin-component/> </h3>
      <h3 class="money" v-else >Prodejní cena: {{item.sell_price}}  <silver-coin-component/> </h3>

      <!-- {{this.$store.state.attributes.money/10}} <gold-coin-component/>  a {{this.$store.state.attributes.money%10 }} <silver-coin-component/> -->

      <img v-bind:src=item.img_address class="imgItem" alt="" />
      <br>
      <br>
      <button class="buy-button" @click="buyItem(item)">{{button2_msg}}</button>
      <br>
      <br>
    </section>

  </div>
    </div>
  </div>

</template>

<script>

import axios from "axios";

import GameHeader from "@/gamePages/gameHeader";
import store from "@/store/store";
import SilverCoinComponent from "@/components/silverCoinComponent";
import goldCoinComponent from "@/components/goldCoinComponent";
import {mapActions, mapGetters} from "vuex";


export default {

  name: "gameShop",
  components: {goldCoinComponent, SilverCoinComponent, GameHeader},
  data(){
    return{
      selectedType: "Zbraň",
      items:[],
      shop_items:[],
      players_items:[],
      selectedItems:[],
      button_msg: "Prodat předměty",
      button2_msg: "KOUPIT",
      buying: true
    }
  },
  computed: mapGetters(["user"]),

  async mounted(){
    try {
      this.shop_items = (await axios.get("api/items/")).data;
      this.$store.state.items = this.shop_items;
      console.log(this.shop_items.length);
      for(let i=0; i<this.shop_items.length; i++){
        if(this.shop_items[i].type === this.selectedType){
          this.selectedItems.push(this.shop_items[i]);
        }
      }
      this.items = this.shop_items;

    }catch (err){
      this.err = err;
      console.log(this.err);
    }

    //this.players_items = this.$store.getters.user.inventory;


  },
  methods:{
      ...mapActions(["getProfile"]),

    changeSelectedType(parameter){

      this.selectedItems = [];


      switch (parameter){
        case 'zbrane':
          this.selectedType = "Zbraň"
          break;
        case 'helmy':
          this.selectedType = "Helma";
          break;
        case 'brneni':
          this.selectedType = "Brnění";
          break;
      }

      for(let i=0; i<this.items.length; i++){
        if(this.items[i].type === this.selectedType){
          this.selectedItems.push(this.items[i]);
        }
      }

    },

    changeShopping(){
      this.buying = !this.buying;
      this.items = [];
      if(!this.buying){
        this.button_msg = "Nakoupit předměty";
        this.items = this.user.inventory;
        this.changeSelectedType('zbrane');
        this.button2_msg = "PRODAT";

      }else if(this.buying){
        this.button_msg = "Prodat předměty";
        this.items = this.shop_items;
        this.changeSelectedType('zbrane');
        this.button2_msg = "KOUPIT";


      }


    },

    buyItem(item){
      if(this.button2_msg ==="KOUPIT") {
        if (this.user.money >= item.price) {
          if (!this.sameItem(item)) {
            //pridat do inventare
            store.commit('addItem', item);
            store.commit('addMoney', -(item.price));
            //this.players_items.push(item);

            alert("Položka koupena");
          } else {
            alert("Tento předmět už máš");
          }
        } else {
          alert("Nedostatek peněz");
        }

      }
      else if(this.button2_msg ==="PRODAT"){
        store.commit('removeItem', item);
        store.commit('addMoney', item.sell_price);
        alert("Položka prodána");
        this.changeShopping();
      }

    },

    sameItem(item){
      let allready_got = false;

      for(let i=0; i<this.user.inventory.length; i++){
        if(this.user.inventory[i]._id ===item._id){
          allready_got = true;
        }
      }
      return allready_got;
    }


  },

  created() {
    this.getProfile();
  }
}
</script>

<style scoped>

.container{
  margin-top: 5rem;
  padding-top: 1rem;
  height: auto;
  padding-bottom: 5rem;
}

.main-content{
  margin-top: 5%;
  margin-right: auto;
  margin-left: auto;

  position: center;
  text-align: center;
  width: 70%;
  /* background: #fff498; */
  background: rgba(255,244,152,0.8);
  font-size: 20px;
  border-style: solid;
  border-radius: 1em;
  padding-left: 2em;
  padding-top: -1em;
  padding-bottom: 2rem;
}
.imgItem{
  padding: 10px;
  border: 2px;
  border-style: solid;
  background-color: white;
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
  background-color:#bfff5e;

}

.buy-button{
  background-color: #008CBA;
  border: none;
  color: white;
  padding: 1% 2%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 115%;
  margin-left: 1%;
}
.money{

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.change-type-btn, .change-shopping-btn{
  background-color: #555555;
  border: none;
  color: white;
  padding: 1% 2%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 115%;
  margin-left: 1%;
}

.change-shopping-btn{
  background-color: #4CAF50;
  margin-top: 2%;
}
.your-money{
  text-align: right;
  padding-right: 2rem;
  margin-bottom: -2rem;
}

</style>
