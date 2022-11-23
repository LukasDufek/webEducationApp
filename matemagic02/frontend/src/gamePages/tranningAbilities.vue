<template>
<div>
  <game-header/>
  <div class="container">
      <div class="main-content">
        <h2>Tvoje postava {{this.$store.state.attributes.first_name}}</h2>

        <h3>Vylepšit schonposti:</h3>
        <h3>Síla: {{this.strength}} <button @click="training('strength', strength)">+</button> cena: {{this.strength}} stříbrných</h3>
        <h3>Útok: {{this.attack}} <button @click="training('attack', attack)">+</button> cena: {{this.attack}} stříbrných</h3>
        <h3>Obrana: {{this.defense}} <button @click="training('defense', defense)">+</button> cena: {{this.defense}} stříbrných</h3>
        <h3>Výdrž: {{this.hp}} <button @click="training('hp', hp)">+</button> cena: {{this.hp}} stříbrných</h3>
        <br>
        <h3>Vlastníš: {{Math.floor(this.$store.state.attributes.money /10)}} zlatých a {{this.$store.state.attributes.money % 10}} stříbrných mincí</h3>
        <h3>Zkušenosti: {{this.$store.state.attributes.exp}}</h3>

      </div>

  </div>
</div>
</template>

<script>
import GameHeader from "@/gamePages/gameHeader";
import store from "@/store/store";
export default {
  name: "tranningAbilities",
  components: {GameHeader},

  data(){
    return{
      strength:0,
      attack:0,
      defense:0,
      hp:0,

    }
  },

  mounted() {
    this.realod();

  },

  methods:{

    realod(){
      this.strength = parseInt(this.$store.state.attributes.abilities.strength);
      this.attack = parseInt(this.$store.state.attributes.abilities.attack);
      this.defense = parseInt(this.$store.state.attributes.abilities.defense);
      this.hp = parseInt(this.$store.state.attributes.abilities.hp);
    },

    //switch na vylepseni schonposti
    training(type, price){
      console.log(this.hp);

      price = parseInt(price);
      if(this.$store.state.attributes.money >= price){
        store.commit('upgradeAbillity', type);
        store.commit('addMoney', -(price));
        this.realod();
      }else{
        alert('Nedostatek peněz');
      }
    }
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
