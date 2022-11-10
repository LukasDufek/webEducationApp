<template>
  <div>
    <header-page/>
    <div class="container">
    <div class="user-card">
      <h1>Přehled tvého profilu</h1>
      <h2>Jméno: {{this.$store.state.attributes.first_name}}</h2>
      <h2>Příjmení: {{this.$store.state.attributes.last_name}}</h2>
      <h2>Ročník: {{this.$store.state.attributes.year_of_study}}</h2>
      <h2>Zkušenosti: {{this.$store.state.attributes.exp}}</h2>
      <h2>Peníze: {{this.$store.state.attributes.money}}</h2>
      <img src="../assets/silver-coin.png" class="imgCar" alt="" border="0" />

      <!--
      <section v-if="this.$store.state.attributes.year_of_study >= 3">
        <button @click="toGame">VSTOUPIT DO HRY</button>
      </section>
      -->
      <button class="to-game-button" @click="toGame">VSTOUPIT DO HRY</button>
      <br>

      <router-link to="/" class="logout">
        <span role="link">Odlásit se</span>
      </router-link>
    </div>

  </div>
  </div>
</template>

<script>
export default {
  name: "profileOverviewPage",

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
  methods:{
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

</style>
