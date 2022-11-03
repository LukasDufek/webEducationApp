<template>
  <div>
    <header-page/>
    <div class="profile-overview-content">
<h1>Přehled tvého profilu</h1>
<h2>Jméno: {{first_name}}</h2>
<h2>Příjmení: {{last_name}}</h2>
<h2>Ročník: {{year_of_study}}</h2>
<h2>Zkušenosti: {{exp}}</h2>
<h2>Peníze: {{money}}</h2>
      <img src="../assets/silver-coin.png" class="imgCar" alt="" border="0" />
    </div>
    <section v-if="this.year_of_study >= 3">
      <button>VSTOUPIT DO HRY</button>
    </section>


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

    this.first_name=  this.$store.state.attributes.first_name;
    this.last_name =  this.$store.state.attributes.last_name;
    this.year_of_study = this.$store.state.attributes.year_of_study;
    this.exp = this.$store.state.attributes.exp;
    this.money = this.$store.state.attributes.money;


  },

}
</script>

<style scoped>

.profile-overview-content{
  margin-top: 10rem;
}

</style>
