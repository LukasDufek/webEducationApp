<template>
  <div v-if="isLoggedIn">
    <header-page/>
    <div class="container">
    <div   class="user-card">
      <h1>Přehled tvého profilu</h1>
      <h2>Jméno: {{this.$store.state.attributes.first_name}}</h2>
      <h2>Příjmení: {{this.$store.state.attributes.last_name}}</h2>
      <h2>Ročník: {{this.$store.state.attributes.year_of_study}}</h2>
      <h2>Zkušenosti: {{this.$store.state.attributes.exp}}</h2>
      <h2>{{this.$store.state.attributes.money/10}} <gold-coin-component/>  a {{this.$store.state.attributes.money%10 }} <silver-coin-component/></h2>

      <!--
      <section v-if="this.$store.state.attributes.year_of_study >= 3">
        <button @click="toGame">VSTOUPIT DO HRY</button>
      </section>
      -->
      <button class="to-game-button" @click="toGame">VSTOUPIT DO HRY</button>
      <br>

      <button class="to-game-button" @click="logoutUser">Odhlásit se</button>

    </div>


  </div>


  </div>

  <div v-else>
    <no-logged/>
  </div>

</template>

<script>
import SilverCoinComponent from "@/components/silverCoinComponent";
import GoldCoinComponent from "@/components/goldCoinComponent";
import {mapGetters} from "vuex";
import { mapActions } from "vuex";
import NoLogged from "@/components/noLogged";
export default {
  name: "profileOverviewPage",
  components: {NoLogged, GoldCoinComponent, SilverCoinComponent},
  data() {
    return {
      first_name:'',
      last_name: '',
      year_of_study:0,
      exp:0,
      money:0

    }
  },

  mounted(){


  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  methods:{

    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
    },

    toGame(){
      this.$router.push('./characterOverview');
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
.user-card{
  /* margin: auto; */
  margin-left: 2rem;
  max-width: 350px;
  padding: 40px 40px;

  border: #3449ff 4px solid;

  background: white;
}

.to-game-button{
  margin-top: 3%;
  margin-bottom: 3%;
}

.logout{
  margin-top: 3%;
}

.no-logged{
  font-size: 400%;
  padding-bottom: 50%;
}

</style>
