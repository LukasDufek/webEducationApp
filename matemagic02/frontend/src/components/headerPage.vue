<template>

  <header class="header">

    <div class="logo">MateMagic</div>

    <div class="navbar">

      <router-link to="/profileOverviewPage"  class="link">
        <span role="link">Přehled</span>
      </router-link>


      <router-link to="/mathExamples"  class="link">
        <span role="link">Procvičování</span>
      </router-link>


      <router-link to="/mathWordTasks" class="link">
        <span role="">Slovní úlohy</span>
      </router-link>

      <router-link to="/finalExam" class="link">
        <span role="link">Závěrečný Test</span>
      </router-link>




    </div>

    <div class="study-year">{{this.$store.state.attributes.year_of_study}}.Ročník</div>


  </header>

</template>

<script>


export default {
  name: "headerPage",
  methods: {


  }
}
</script>

<style scoped>

.header {
  float: inside;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  flex: auto;
  align-items: center;



  box-shadow: 0 0 25px 0 black;
}

.navbar .link {

  margin-left: 2rem;

  position: center;
  font-size: 2rem;


}

.logo{
  float: left;

  margin-left: 1rem;
  font-size: 4rem;
}

.study-year{
  float: right;
  margin-left: auto;
  margin-right: 1rem;

  font-size: 3rem;
}


</style>
