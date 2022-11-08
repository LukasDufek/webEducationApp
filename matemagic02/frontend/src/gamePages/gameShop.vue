<template>
  <div>
    <game-header/>
  <div class="main-content">
    <button @click="changeShopping">{{this.button_msg}}</button>
    <br>
    <br>

    <button @click="changeSelectedType('zbrane')">Zbrane</button>
    <button @click="changeSelectedType('helmy')">Helmy</button>
    <button @click="changeSelectedType('brneni')">Brneni</button>
    <hr>

    <section v-for="item in selectedItems" :key="item._id" class="one-item">
      <h2><u>{{item.name}}</u></h2>
      <h3 v-if="item.using==='attack'">Útok +{{item.value}}</h3>
      <h3 v-else-if="item.using==='defence'">Obrana +{{item.value}}</h3>
      <h3>Cena: {{item.price}} stříbrných</h3>
      <h3>Prodejní cena: {{item.sell_price}} stříbrných</h3>
      <img v-bind:src=item.img_address class="imgItem" alt="" />
      <br>
      <br>
      <button class="buy-button" @click="buyItem(item)">KOUPIT</button>
      <br>
      <br>
    </section>

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

    this.players_items = this.$store.state.attributes.inventory;
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
      if(!this.buying){
        this.button_msg = "Nakoupit předměty";
        this.items = this.players_items;
        this.changeSelectedType('zbrane');

      }else if(this.buying){
        this.button_msg = "Prodat předměty";
        this.items = this.shop_items;
        this.changeSelectedType('zbrane');

      }

    },

    buyItem(item){
      if(this.$store.state.attributes.money >= item.price){
        //pridat do inventare
        store.commit('addItem', item);
      }else{
        alert("Nedostatek peněz");
      }

    }


  }
}
</script>

<style scoped>

.main-content{
  margin-top: 10%;
}
.imgItem{
  padding: 10px;
  border: 2px;
  border-style: solid;
  background-color: white;
}

.one-item{
  width: 26%;
  margin-bottom: 5%;
  margin-left: 37%;
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
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

</style>
