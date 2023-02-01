<template>
  <header class="header">

    <div class="logo">MateMagic</div>

    <div class="navbar">

      <router-link v-for="route in this.routes" :key="route.path" v-bind:to="route.path"  class="link">
        <span role="link">{{route.title ?? route.path}}</span>
      </router-link>



      <router-link to="/profileOverviewPage" class="link">
        <span role="link">Odejít ze hry</span>
      </router-link>


    </div>

    <div class="study-year">{{user.year}}.Ročník</div>

  </header>

</template>

<script>

import {routes} from '../router/index';


export default {
  name: "gameHeader",

  data(){
    return {

      routes: routes.filter(route => {
        return route.inGame
      }),

      user:JSON.parse(localStorage.user)
    }
  }
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
  font-size: 2.1vw;



}

.study-year{
  float: right;
  margin-left: auto;
  margin-right: 1rem;

  font-size: 3rem;
}

.logo{
  float: left;

  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 4rem;
}


</style>
