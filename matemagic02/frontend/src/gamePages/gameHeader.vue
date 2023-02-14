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

  text-decoration: none;
  position: center;
  font-size: 2.1vw;
}
.link:hover{
  background-color: #e5e5e5;
  text-decoration: underline;

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
  /* color: #A7DD3C; */

  color: #e5e883;
  background: #FFFFFF;
  text-shadow: 2px 0 0 #800040, 3px 2px 0 rgba(77,0,38,0.5), 3px 0 3px #FF002B, 5px 0 3px #800015, 6px 2px 3px rgba(77,0,13,0.5), 6px 0 9px #FF5500, 8px 0 9px #802A00, 9px 2px 9px rgba(77,25,0,0.5), 9px 0 18px #FFD500, 11px 0 18px #806A00, 12px 2px 18px rgba(77,66,0,0.5), 12px 0 30px #D4FF00, 14px 0 30px #6A8000, 15px 2px 30px rgba(64,77,0,0.5), 15px 0 45px #80FF00, 17px 0 45px #408000, 17px 2px 45px rgba(38,77,0,0.5);

}


</style>
