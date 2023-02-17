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




    </div >

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
      user: JSON.parse(localStorage.user),
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
  margin-right: 1rem;
  font-size: 4rem;
  /* color: #A7DD3C; */

  color: #e5e883;
background: #FFFFFF;
text-shadow: 2px 0 0 #800040, 3px 2px 0 rgba(77,0,38,0.5), 3px 0 3px #FF002B, 5px 0 3px #800015, 6px 2px 3px rgba(77,0,13,0.5), 6px 0 9px #FF5500, 8px 0 9px #802A00, 9px 2px 9px rgba(77,25,0,0.5), 9px 0 18px #FFD500, 11px 0 18px #806A00, 12px 2px 18px rgba(77,66,0,0.5), 12px 0 30px #D4FF00, 14px 0 30px #6A8000, 15px 2px 30px rgba(64,77,0,0.5), 15px 0 45px #80FF00, 17px 0 45px #408000, 17px 2px 45px rgba(38,77,0,0.5);

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
