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

      <button class="logout-button" @click.prevent="logoutUser">Odhlásit se</button>




    </div>

    <div class="study-year" v-if="role==='student'">{{year}}.Ročník</div>


  </header>

</template>

<script>

import {routes} from '../router/index';
import { mapGetters, mapActions } from "vuex";
//import Auth from "@/Warehouse/Auth";
//import store from "@/store/store";

const {role}  = JSON.parse(localStorage.user ?? '{}');
const {year}  = JSON.parse(localStorage.user ?? '{}');


export default {
  name: "headerPage",

  computed: {
    ...mapGetters(["isLoggedIn"]),
  },

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



  methods: {
    ...mapActions(["logout"]),


    logoutUser() {


      this.logout();
      this.$router.push('./');
    }
  },


};

</script>

<style scoped>

.header {
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 5rem;
  display: flex;
  flex: auto;

  border-bottom: 4px solid black;
}

.navbar .link {
  top: 20%;
  position: relative;
  margin-left: 1em;
  text-decoration: none;

  font-size: 2.1vw;
  text-align: center;

}
.link:hover{
  background-color: #e5e5e5;
  text-decoration: underline;

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


.logout-button{
  top: 20%;
  position: relative;
  margin-left: 1rem;

  font-size: 1.5vw;
  text-align: center;


  background-color: #008CBA;
  outline: none;
  color: white;
  padding: 0.3vw 1.4vw;

}

.logout-button:hover{
  text-decoration: underline;
}

</style>
