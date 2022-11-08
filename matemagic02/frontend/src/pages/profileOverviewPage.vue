<template>
  <div>
    <header-page/>
    <div class="profile-overview-content">
<h1>Přehled tvého profilu</h1>
<h2>Jméno: {{this.$store.state.attributes.first_name}}</h2>
<h2>Příjmení: {{this.$store.state.attributes.last_name}}</h2>
<h2>Ročník: {{this.$store.state.attributes.year_of_study}}</h2>
<h2>Zkušenosti: {{this.$store.state.attributes.exp}}</h2>
<h2>Peníze: {{this.$store.state.attributes.money}}</h2>
      <img src="../assets/silver-coin.png" class="imgCar" alt="" border="0" />
    </div>
    <!--
    <section v-if="this.$store.state.attributes.year_of_study >= 3">
      <button @click="toGame">VSTOUPIT DO HRY</button>
    </section>
    -->
    <button @click="toGame">VSTOUPIT DO HRY</button>
    <br>

    <router-link to="/" class="link">
      <span role="link">Odlásit se</span>
    </router-link>

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

.profile-overview-content{
  margin-top: 10rem;
}

</style>
