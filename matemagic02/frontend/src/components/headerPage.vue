<template>

  <header class="header">

    <div class="logo">MateMagic</div>

    <div class="navbar">
        <router-link v-for="route in this.routes" :key="route.path" v-bind:to="route.path"  class="link">
          <span role="link">{{route.title ?? route.path}}</span>
        </router-link>

      <!--
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

      -->

      <button class="to-game-button" @click.prevent="logoutUser">Odhlásit se</button>




    </div>

    <div class="study-year" v-if="role==='student'">{{year}}.Ročník</div>


  </header>

</template>

<script>

import {routes} from '../router/index';
import { mapGetters, mapActions } from "vuex";
const { role }  = JSON.parse(localStorage.user ?? '{}');
const { year }  = JSON.parse(localStorage.user ?? '{}');


export default {
  name: "headerPage",
  data(){
    return {

      role: role,
      year: year,
      routes: routes.filter(route => {
        //console.log(role);
        return route.roles?.includes(role) && !route.inGame
      })
    }
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["logout"]),

    logoutUser() {
      this.logout();
      this.$router.push('./registerPage');
    }
  },
};

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
