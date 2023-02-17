<template>
  <div>
    <game-header/>
    <div class="container">
      <div class="main-content">

        <div class="fight">

          <h1>Průběh boje</h1>
          <section class="column">
            <h3 class="enemy-name"><u>{{user.first_name}}</u></h3>
          <img src="https://s9.gifyu.com/images/hlavni_postava.md.png" class="avatar" alt="" />
            <h3>Síla: {{user.abilities.strength}}</h3>
            <h3>Útok: {{user.abilities.attack}}</h3>
            <h3>Obrana: {{user.abilities.defense}}</h3>
            <h3>Životnost: {{user.abilities.hp}}</h3>
          </section>

        <section class="column">
          <h3 class="enemy-name"><u>{{enemy.name}}</u></h3>
          <img v-bind:src=enemy.link class="avatar" alt="" />
          <h3>Síla: {{enemy.strength}}</h3>
          <h3>Útok: {{enemy.attack}}</h3>
          <h3>Obrana: {{enemy.defense}}</h3>
          <h3>Životnost: {{enemy.hp}}</h3>
        </section>


        </div>


        <section v-if="fight() === true">
          <h2>Vyhrál jsi!</h2>
        </section>

        <section v-else-if="fight() === false">
          <h2>Nepřítel vyhrál!</h2>
        </section>

        <button class="back-to-story-btn" @click="back">Zpět</button>

      </div>
  </div>
</div>


</template>

<script>

import GameHeader from "@/gamePages/gameHeader";
import store from "@/store/store";


export default {
  name: "fightComponent",
  components:{GameHeader},

  data(){
    return{
      user:JSON.parse(localStorage.user) || {},
      enemy: JSON.parse(localStorage.enemy) || {}
    }
  },

  methods:{
    back(){
      this.$router.push('./fightingStory')
    },

    fight(){
      let myHP = this.user.abilities.hp;
      let enemyHP = this.enemy.hp;
      let end = false;

      let myStrengthTmp = Math.random() * ((this.user.abilities.strength *1.2) - (this.user.abilities.strength *0.8)) + (this.user.abilities.strength * 0.8);
      let enemyStrengthTmp = Math.random() * ((this.enemy.strength *1.2) - (this.enemy.strength *0.8)) + (this.enemy.strength * 0.8);

      console.log('my '+myStrengthTmp);
      console.log('enemy '+enemyStrengthTmp);

      while(!end){

        //1) utok hrace
        if( (myStrengthTmp + this.user.abilities.attack) > (enemyStrengthTmp +this.enemy.defense) ){
          enemyHP--;
          if(enemyHP <= 0){
            end = true;
            //hrac vyhral
            //nepritele pridat do defeated_oponents
            store.commit('defeat_enemy', this.enemy);
            localStorage.removeItem('enemy');


            return true;
          }
        }

        //2) utok nepritele
        if((enemyStrengthTmp + this.enemy.attack) >= (myStrengthTmp +this.user.abilities.defense)){
          myHP--;
          if(myHP <= 0){
            end = true;
            //nepritel vyhral
            return false;
          }
        }
      }


    },
  }
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
  width: 80%;
  background: #ffee80;
  font-size: 20px;
  border-style: solid;
  border-radius: 1em;
  padding-top: -1em;
}

.fight:after{
  content: "";
  display: table;
  clear: both;
}

.column{
  float: left;
  width: 35%;
  padding: 10px;
  margin-left: 8%;
  margin-top: 5%;
  margin-bottom: 5%;
  text-align: center;
  align-items: center;
  background: #69d3ff;
  border-style: solid;



}



.avatar{
  border-style: solid;
  border-radius: 1rem;
  width: 50%;
  height: 50%;
}

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}


.my-card{
  margin-right: auto;
  margin-left: auto;
  margin-top: 3rem;
  text-align: center;
  align-items: center;
  width: 30%;
  background: #69d3ff;
  border-style: solid;

  padding-top: -1em;

}

.enemy-card{
  margin-right: auto;
  margin-left: auto;
  margin-top: 3rem;
  text-align: center;
  align-items: center;
  width: 30%;
  background: #69d3ff;
  border-style: solid;

  padding-top: -1em;

}

.back-to-story-btn{

  margin-bottom: 2rem;

  box-shadow:inset 0 1px 0 0 #97c4fe;
  background-color:#3d94f6;
  border-radius:6px;
  border:1px solid #337fed;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial,serif;
  font-size:20px;
  font-weight:bold;
  padding:6px 24px;
  text-decoration:none;
  text-shadow:0 1px 0 #1570cd;
}

.back-to-story-btn:hover{
  text-decoration: underline;
}


</style>
