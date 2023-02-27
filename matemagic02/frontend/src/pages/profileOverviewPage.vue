<template>
  <div v-if="user.role==='student'">
    <header-page/>
    <div class="container">
      <help-tutorial :message="text_tutorial_for_student"/>

    <div  class="user-card">
      <h1>Přehled tvého profilu</h1>
      <h2>Jméno: {{user.first_name}}</h2>
      <h2>Příjmení: {{user.last_name}}</h2>
      <h2>Ročník: {{user.year}}</h2>
      <h2>Zkušenosti: {{user.exp}}</h2>
      <h2>{{Math.floor(user.money/10)}} <gold-coin-component/>  a {{user.money%10 }} <silver-coin-component/></h2>

      <!--
      <section v-if="this.$store.state.attributes.year_of_study >= 3">
        <button @click="toGame">VSTOUPIT DO HRY</button>
      </section>
      -->


      <button v-if="user.year >= 3" class="to-game-button" @click="toGame">VSTOUPIT DO HRY</button>

      <h3 v-if="user.year < 3">Do hry můžeš vstoupit až od 3.ročníku</h3>

      <br>


    </div>


  </div>


  </div>


  <div v-else>

    <header-page/>
    <div class="container">
      <help-tutorial :message="text_tutorial_for_teacher"/>

      <div  class="user-card">
        <h1>Přehled tvého učitelského profilu</h1>
        <h2>Jméno: {{user.first_name}}</h2>
        <h2>Příjmení: {{user.last_name}}</h2>



        <br>


      </div>


    </div>


  </div>




</template>

<script>
import SilverCoinComponent from "@/components/silverCoinComponent";
import GoldCoinComponent from "@/components/goldCoinComponent";
import helpTutorial from "@/components/helpTutorial";
import {mapGetters} from "vuex";
import { mapActions } from "vuex";
//import NoLogged from "@/components/noLogged";
export default {
  name: "profileOverviewPage",
  components: {GoldCoinComponent, SilverCoinComponent, helpTutorial},
  data() {
    return {
      text_tutorial_for_student:"Zde můžeš vidět celkový přehled tvých vlastností. Kromě přehledu máš navíc od 3.ročníku možnost vstoupit do hry, kde můžeš využít mince, které si získal za vypočítané příklady a úlohy.",

      text_tutorial_for_teacher:"Dobrý den pane učiteli. Jako učitel můžete vytvářet a přidávat nové slovní úlohy pro různé ročníky studentů. Můžete ale také, v sekci 'Spravovat úlohy' mazat nebo jen upravovat již existující slovní úlohy. ",

      first_name: '',
      last_name: '',
      year_of_study:0,
      exp:0,
      money:0

    }
  },

  computed: mapGetters(["user"]),

  methods: {
    ...mapActions(["getProfile"]),


    toGame(){
      console.log(this.user.year);
      this.$router.push('./characterOverview');


    },


  },
  created() {
    this.getProfile();
  }
};

</script>

<style scoped>


.user-card{
  /* margin: auto; */
  margin-left: 2rem;
  max-width: 350px;
  padding: 40px 40px;

  border: #3449ff 4px solid;
  border-radius: 0.5em;

  background: white;
}

.to-game-button {
  margin-top: 3%;
  margin-bottom: 3%;

  box-shadow: 0 1px 0 0 #f0f7fa;
  background: #4734ed linear-gradient(to bottom, #4734ed 5%, #019ad2 100%);
  border-radius:6px;
  border:1px solid #057fd0;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial,serif;
  font-size:15px;
  font-weight:bold;
  padding:6px 24px;
  text-decoration:none;
  text-shadow:0 -1px 0 #5b6178;
}
.to-game-button:hover{
  background: #019ad2 linear-gradient(to bottom, #019ad2 5%, #4734ed 100%);
  text-decoration: underline;
}



.logout{
  margin-top: 3%;
}

.no-logged{
  font-size: 400%;
  padding-bottom: 50%;
}

</style>
