<template>
  <div id="app">
    <main>
      <Errors v-if="error" :msg="error" />
      <router-view />
    </main>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import {mapGetters} from "vuex";
import Errors from "@/components/Errors";

export default {
  name: 'App',
  components: {
    Errors
  },
  computed:{
    ...mapGetters(["error"])
  }
  //

  //

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
