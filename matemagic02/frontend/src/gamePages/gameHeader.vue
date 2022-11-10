<template>
  <header class="header">

    <div class="logo">MateMagic</div>

    <div class="navbar">

      <router-link to="/characterOverview"  class="link">
        <span role="link">Přehled postavy</span>
      </router-link>


      <router-link to="/tranningAbilities"  class="link">
        <span role="link">Vylepšení schonpostí</span>
      </router-link>


      <router-link to="/gameShop" class="link">
        <span role="">Obchod</span>
      </router-link>

      <router-link to="/fightingStory" class="link">
        <span role="link">Pokračovat v příběhu</span>
      </router-link>

      <router-link to="/profileOverviewPage" class="link">
        <span role="link">Odejít ze hry</span>
      </router-link>


    </div>

  </header>

</template>

<script>
export default {
  name: "gameHeader"
}
</script>

<style scoped>

.header {
  float: inside;
  background-color: white;
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100px;
  display: flex;
  flex: auto;
  align-items: center;
  padding-bottom: 1em;
  border-bottom: 4px solid black;

  box-shadow: 0 0 45px 0 blue;

}

.navbar .link {

  margin-left: 2rem;

  position: center;
  font-size: 2em;



}

.logo{
  float: left;

  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 4rem;
}


</style>
