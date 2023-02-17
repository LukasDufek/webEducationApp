<template>
    <div class="noLoggedPage">
      <div class="window">
      <h1>Nejsi přihlášen</h1>
        <button class="to-login" @click="toLogin">Přihlásit zde</button>
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
  margin-top: -4rem;
  padding-top: 1rem;
  height: auto;
  padding-bottom: 5rem;



}


.window{
  margin-right: auto;
  margin-left: auto;
  margin-top: 3rem;

  font-size: 5vw;
  color: #ff0000;

  position: center;
  text-align: center;
  width: 70%;
  background: #ffee80;
  border-style: solid;
  border-radius: 1em;




}

.to-login{
  margin-bottom: 1rem;
  box-shadow:inset 0 1px 0 0 #caefab;
  background-color:#77d42a;
  border-radius:6px;
  border:1px solid #268a16;
  display:inline-block;
  cursor:pointer;
  color:#306108;
  font-family:Arial,serif;
  font-size:15px;
  font-weight:bold;
  padding:6px 24px;
  text-decoration:none;
  text-shadow:0 1px 0 #aade7c;
}

.to-login:hover{
  text-decoration: underline;
  background-color:#5cb811;
}

</style>
