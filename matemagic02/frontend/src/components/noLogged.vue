<template>
    <div class="noLoggedPage">
      <div class="window">
      <h1>Nejsi přihlášen</h1>
        <button @click="toLogin">Přihlásit zde</button>
      </div>
    </div>



</template>

<script>
export default {
  name: "noLogged",

  methods:{
    toLogin(){
      this.$router.push('./');
    }
  }
}
</script>



<style scoped>

.noLoggedPage{
  background: url("https://slevomat.sgcdn.cz/images/t/1280/11/45/11456672-186820.webp");

  background-size: cover;
  margin-top: -5rem;
  padding-top: 1rem;
  height: auto;
  padding-bottom: 5rem;



}


.window{
  margin-right: auto;
  margin-left: auto;
  margin-top: 3rem;

  font-size: 5rem;
  color: #ff0000;

  position: center;
  text-align: center;
  width: 70%;
  background: #ffee80;
  border-style: solid;
  border-radius: 1em;




}

</style>
