<template>
  <div>
    <game-header/>
    <div class="container">

      <help-tutorial :message="text_tutorial"/>

      <div class="main-content">


        <button v-if="parseInt(user.year) > 2" class="choose-year" @click="chooseYear(3)">3.Ročník</button>

        <button v-if="parseInt(user.year) > 3" class="choose-year" @click="chooseYear(4)">4.Ročník</button>

        <button v-if="parseInt(user.year) > 4" class="choose-year" @click="chooseYear(5)">5.Ročník</button>



        <div class="book">
        <p>{{actualContent}}</p>

        </div>




        <br>
          <button @click="flipping_in_book_back" class="next-page" v-if="year > 0">🡸</button>
          <button @click="flipping_in_book_forward" v-if="continue_story && year >0" class="next-page">🡺</button>





        <div v-if="!continue_story" class="enemy-card"> <!-- v-if="!continue_story"-->

          <h3 class="enemy-name"><u>{{actual_enemy.name}}</u></h3>
          <img v-bind:src=actual_enemy.link class="avatar" alt="" />

          <br>
          <button @click="fight" class="attack-btn">Útok</button>

        </div>


        <br>
        <br>
        <br>
      </div>
    </div>
  </div>

</template>

<script>
//import axios from "axios";

import GameHeader from "@/gamePages/gameHeader";
import story3Text from './story3year.txt'
import story4Text from './story4year.txt'
import story5Text from './story5year.txt'
import store_of_enemies from "@/store/store_of_enemies";
import helpTutorial from "@/components/helpTutorial";



export default {
  name: "fightingStory",
  components: {GameHeader, helpTutorial},

  data() {
    return {
      text_tutorial:"Tato stránka obsahuje příběh hry MateMagic. Příběh je rozdělen do 3 částí, podle ročníků. Vyber si části příběhu podle svého ročníku, ale pokud si například 3.ročník nestihl, můžeš začít od něho. V textu listuješ pomocí šipek pod textem, jakmile narazíš na úryvek, ve kterém se máš utkat s protivníkem, pod textem se ukáže karta protivníka s možností 'Útok'. Až když ho porazíš, můžeš pokračovat v příběhu dál. Na konci každého ročníku na tebe čeká vyvrcholení a závěrečný souboj. Pokud nějakého protivníka nemůžeš porazit, vylepši si schonpnosti, nakup lepší předměty a pak se do příběhu vrať.",

      user:JSON.parse(localStorage.user) || {},
      allContent: '',
      link:'https://s9.gifyu.com/images/loupeznik_4.md.png',
      actualContent: '',
      year:0,
      Chapter:0,
      actual_index_text:-1,
      story_progress:-1,
      pages:'',
      continue_story:true,
      //breakpoint:0,
      //breakpoints:[4],
      actual_enemy:{},
      enemies: [] //store_of_enemies.state.enemies
      //v mounted se budou řešit defeated_opponents

    }

  },
  mounted() {

    this.actualContent = "Vyber si část příběhu, nejlépe podle tvého ročníku";


  },


  methods: {

    chooseYear(year){

      switch(year){
        case 3:
          this.year = 3;
          this.actualContent = "Pro pokračování listuj šipkami na další stranu";
          this.allContent = story3Text.split(";");
          this.enemies = store_of_enemies.state.enemies_from_3;
          this.control_progress();
          break;

        case 4:
          this.year = 4;
          this.actualContent = "Pro pokračování listuj šipkami na další stranu";
          this.allContent = story4Text.split(";");
          this.enemies = store_of_enemies.state.enemies_from_4;
          this.control_progress();

          break;

        case 5:
          this.year = 5;
          this.actualContent = "Pro pokračování listuj šipkami na další stranu";
          this.allContent = story5Text.split(";");
          this.enemies = store_of_enemies.state.enemies_from_5;
          this.control_progress();

          break;

          default:
            this.allContent = 'Vyber si část příběhu, nejlépe podle tvého ročníku;';
            break;

      }


    },

    flipping_in_book_forward(){
        this.actual_index_text++;


        this.story_progress++;

        /*
        if (this.story_progress === this.breakpoints[this.breakpoint] && this.continue_story) {
          this.continue_story = false;
          this.actual_enemy = this.enemies[0];
        }
         */


      if(this.allContent[this.actual_index_text].includes('@')){
        this.continue_story = false;

        if(!this.user.defeated_oponents.includes(this.enemies[this.user.defeated_oponents.length])){
          this.actual_enemy = this.enemies[this.user.defeated_oponents.length];
        }

      }

      this.actualContent = this.allContent[this.actual_index_text].replace('@', '');



    },

    flipping_in_book_back(){

      if(this.actual_index_text > 0){
        this.actual_index_text--;
        if(this.allContent[this.actual_index_text].includes('@')) {
          this.actualContent = this.allContent[this.actual_index_text].replace('@', '');

        }else{
          this.actualContent = this.allContent[this.actual_index_text];
        }
      }


    },

    control_progress(){
      //let count_of_char =0;

      //console.log(this.actualContent);
      //console.log(typeof this.allContent);
      //console.log(this.allContent);


      if(this.user.defeated_oponents.length >0) {

        let i=0;
        let j=0;

        while (i < this.user.defeated_oponents.length) {

          //console.log(this.allContent[j]);
          console.log('actual content', this.actualContent);
          if (this.allContent[j].includes('@')) {
            this.allContent[j] = this.allContent[j].replace('@', '');
            //count_of_char++;
            i++;
          }
          j++;
        }
      }

    },


    fight(){
      //remove item po porazce nepritele
      //console.log(this.actual_enemy);
      //console.log('k souboji');
      localStorage.setItem('enemy', JSON.stringify(this.actual_enemy));
      this.$router.push('./fight');
    }


  }
}

</script>

<style scoped>



.book{

  height:400px;
  width:80%;
  overflow:scroll;
  background: #edfaff;
  font-size: 20px;
  border-style: solid;
  border-radius: 0.3em;
  padding-left: 1em;

  margin-left: auto;
  margin-right: auto;
  position: center;
  margin-top: 3rem;
  text-align: left;


}

.choose-year{
  margin-top: 2rem;
  margin-left: 1%;

  box-shadow:inset 0 1px 0 0 #a6827e;
  background: #7d5d3b linear-gradient(to bottom, #7d5d3b 5%, #634b30 100%);
  border-radius:3px;
  border:1px solid #54381e;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial,serif;
  font-size:25px;
  padding:6px 24px;
  text-decoration:none;
  text-shadow:0 1px 0 #4d3534;
}

.choose-year:hover{
  text-decoration: underline;
  border-width: 3px;
}

.next-page{
  box-shadow: 0 1px 0 0 #bbdaf7;
  background-color:#378ee5;
  border-radius:6px;
  border:1px solid #84bbf3;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial,serif;
  font-size:20px;
  font-weight:bold;
  padding:6px 24px;
  text-decoration:none;
  text-shadow:0 -1px 0 #528ecc;
}

.next-page:hover{
  border-width: 2px;

}


.avatar{
  border-style: solid;
  border-radius: 1rem;
  width: 50%;
  height: 50%;
}

.enemy-card{
  margin-right: auto;
  margin-left: auto;
  margin-top: 3rem;
  position: center;
  text-align: center;
  align-items: center;
  width: 30%;
  background: #69d3ff;
  border-style: solid;

  padding-top: -1em;

}

.enemy-name{
  font-size: 2rem;
  font-family: "Bell MT",serif;

}

.attack-btn{

  margin-bottom: 1rem;
  margin-top: 1rem;


  box-shadow:inset 0 1px 3px 0 #91b8b3;
  background-color:#6c7c7c;
  border-radius:5px;
  border:1px solid #566963;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial,serif;
  font-size:20px;
  font-weight:bold;
  padding:11px 23px;
  text-decoration:none;
  text-shadow:0 -1px 0 #2b665e;
}

.attack-btn:hover{
  text-decoration: underline;
  font-size: 22px;
  border-width: 2px;
}


</style>
