<template>
  <div>
    <button @click="changeSelectedType('zbrane')">Zbrane</button>
    <button @click="changeSelectedType('helmy')">Helmy</button>
    <button @click="changeSelectedType('brneni')">Brneni</button>

    <section v-for="item in selectedItems" :key="item._id">
      <h2>Název: {{item.name}}</h2>
      <h2>Cena: {{item.price}} stříbrných</h2>
      <h2>Prodejní cena: {{item.sell_price}} stříbrných</h2>
      <br>
      <br>
    </section>

  </div>

</template>

<script>

//import axios from "axios";
import ItemService from "../../dataServices/ItemService";

export default {

  name: "obchodPage",

  data(){
    return{
      selectedType: "Zbraň",
      items:[],
      selectedItems:[]
    }
  },
  async mounted(){
    try {
      this.items = await ItemService.getItems();
      //console.log(this.items);
      for(let i=0; i<this.items.length; i++){
        if(this.items[i].type === this.selectedType){
          this.selectedItems.push(this.items[i]);
        }
      }

    }catch (err){
      this.err = err;
      console.log(this.err);
    }
  },
  methods:{
    changeSelectedType(parametr){

      this.selectedItems = [];

      switch (parametr){
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


  }
}
</script>

<style scoped>

</style>
