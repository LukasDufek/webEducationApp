<template>
  <div>
    <header-page/>
    <div class="profile-overview-content">
<h1>Přehled tvého profilu</h1>
<h2>Jméno: {{jmeno}}</h2>
<h2>Příjmení: {{prijmeni}}</h2>
<h2>Ročník: {{rocnik}}</h2>
<h2>Zkušenosti: {{zkusenosti}}</h2>
<h2>Peníze: {{penize}}</h2>
      <img src="../assets/silver-coin.png" class="imgCar" alt="" border="0" />
    </div>

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
      jmeno:'',
      prijmeni: '',
      rocnik:0,
      zkusenosti:0,
      penize:0

    }
  },

  mounted(){

    this.jmeno=  this.$store.state.atributy.jmeno;
    this.prijmeni =  this.$store.state.atributy.prijmeni;
    this.rocnik = this.$store.state.atributy.rocnik;
    this.zkusenosti = this.$store.state.atributy.zkusenosti;
    this.penize = this.$store.state.atributy.penize;


  },

}
</script>

<style scoped>

.profile-overview-content{
  margin-top: 10rem;
}

</style>
