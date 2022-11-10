<template>
  <div>
    <game-header/>
    <div class="container">
  <div class="main-content">
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
      <h3 class="money">Cena: {{item.price}} stříbrných</h3>
      <h3 class="money">Prodejní cena: {{item.sell_price}} stříbrných</h3>
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

export default {

  name: "gameShop",
  components: {GameHeader},
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

    //this.players_items = this.$store.state.attributes.inventory;

    for(let i=0; i<this.players_items.length; i++){
      console.log(this.players_items[i].name);
    }
  },
  methods:{
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
        this.items = this.players_items;
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
        if (this.$store.state.attributes.money >= item.price) {
          if (!this.sameItem(item)) {
            //pridat do inventare
            store.commit('addItem', item);
            store.commit('addMoney', -(item.price));
            this.players_items.push(item);

            alert("Položka koupena");
          } else {
            alert("Tento předmět už máš");
          }
        } else {
          alert("Nedostatek peněz");
        }

      }//sell item
      for(let i=0; i<this.players_items.length; i++){
        console.log(this.players_items[i].name);
      }

    },

    sameItem(item){
      let allready_got = false;

      for(let i=0; i<this.players_items.length; i++){
        if(this.players_items[i]._id ===item._id){
          allready_got = true;
        }
      }
      return allready_got;
    }


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
  background: #fff498;
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
  position: relative;
  /*
  margin-bottom: 5%;
  position: relative;
  left: 37%;
  right: 37%;
  top: 20%;
   */

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

</style>
