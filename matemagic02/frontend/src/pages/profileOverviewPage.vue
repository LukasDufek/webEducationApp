<template>
  <div v-if="user">
    <header-page/>
    <div class="container">
    <div   class="user-card">
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
      <button class="to-game-button" @click="toGame">VSTOUPIT DO HRY</button>
      <br>


    </div>


  </div>


  </div>

  <div v-else>
    <button @click="route">K přihlášení</button>
  </div>




</template>

<script>
import SilverCoinComponent from "@/components/silverCoinComponent";
import GoldCoinComponent from "@/components/goldCoinComponent";
import {mapGetters} from "vuex";
import { mapActions } from "vuex";
export default {
  name: "profileOverviewPage",
  components: {GoldCoinComponent, SilverCoinComponent},
  data() {
    return {
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
      this.$router.push('./characterOverview');


    },

    route(){
      this.$router.push('./');
    }

  },
  created() {
    this.getProfile();
  }
};

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
