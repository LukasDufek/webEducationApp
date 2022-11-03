<template>
  <header class="header">

    <div class="logo">MateMagic</div>

    <div class="navbar">

      <router-link to="/zadatSlovniUlohu"  class="link">
        <span role="link">Zadat úlohu</span>
      </router-link>


      <router-link to="/slovniUlohyEdit"  class="link">
        <span role="link">Správá úloh</span>
      </router-link>


      <router-link to="/?" class="link">
        <span role="">###</span>
      </router-link>

      <router-link to="/?" class="link">
        <span role="link">####</span>
      </router-link>


    </div>

  </header>

</template>

<script>
export default {
  name: "headerTeacher"
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
  height: 100px;
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


</style>
