<!--Login script-->

<template>
  <div class="container-login">
    <Errors v-if="error" :msg="error" />
    <div class="card card-container">
      <h1 class="welcome">Vítejte ve hře</h1> <h3 class="logo">MateMagic</h3>
      <h1 class="login-input">Přihlášení</h1>
      <h2>Nemáš účet?</h2>
      <button class="to-register-button" @click="toRegister" type="submit">Registrace zde</button>
      <img class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />

      <form class="form-signin" @submit.prevent="loginUser">
        <span class="reauth-email"></span>
        <input type="text" id="inputLastName" placeholder="Email" v-model="email" />
        <input type="password" id="inputPassword" placeholder="Heslo" v-model="password" />
        <button class="to-register-button" value="login" type="submit">Přihlásit</button>


        <br>

      </form>
    </div>
  </div>

</template>
<script>

import {mapActions} from 'vuex';
import {mapGetters} from "vuex";
import Errors from "@/components/Errors";
import axios from "axios";


export default {
  components:{Errors},
  computed:{
    ...mapGetters(["error"])
  },

  data() {
    return {
      email: '',
      password: '',
      msg: '',
      user:{},
      users:[]


    };
  },

  async mounted() {

    try {
      this.users = (await axios.get("/api/users")).data;
    } catch (err) {
        console.log(err);
    }
  },

  methods: {

    ...mapActions(['login']),
    /**
     * login method
     * @values email, password
     */
    loginUser() {

      this.controllerMethod();


      let user ={
        email: this.email,
        password: this.password

      };


      this.login(user)
          .then(res => {


            if (res.data.success) {

              if(this.user.role === 'teacher'){
                this.$router.push("./addWordTask");


              }else if(this.user.role === 'student'){
                this.$router.push("./profileOverviewPage");
                //store.commit('setLocalUser', this.user);
              }

            }
          })
          .catch(err => {
            //alert("Nesprávné heslo nebo email");
            console.log(err);
          });

    },

    controllerMethod(){


      for(let i =0; i<this.users.length; i++){
        if(this.users[i].email === this.email){
          this.user = this.users[i];
        }
      }



    },

    /**
     * continue as host method
     */

    toRegister(){
      this.$router.push('./registerPage');
    }


  }
};
</script>


<style>

.container-login{
  height: 200%;


  /* Center and scale the image nicely */
  /* background: url("http://localhost:8080/assets/imgs/background.png"); */
  background: url("~@/assets/background.png") no-repeat fixed center;

  background-size: cover;

  margin-top: -4rem;
}

.card-container.card {
  max-width: 550px;
  min-width: 350px;
  padding: 40px 40px;
  border: #7cff97 4px solid;
  /* border: #7cff97; */


}

.welcome{
  text-align: center;
  font-size: 35px;
}


.login-input{
  font-size: 35px;
  font-family: "Arial Black",serif;
  text-align: center;
  padding-bottom: 20px;
}
/*
 * Card component
 */
.card {
  background-color: #F7F7F7;
  padding: 20px 25px 30px;
  margin: 50px auto 25px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
}







.profile-img-card {

  width: 96px;
  height: 96px;
  margin: 20% auto 10px 0;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.reauth-email {
  display: block;
  color: #404040;
  line-height: 2;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.form-signin #inputFirstName, #inputLastName,
.form-signin #inputPassword {
  direction: ltr;
  height: 44px;
  font-size: 16px;
}

.form-signin,
.form-signin input[type=password],
.form-signin input[type=text],
.form-signin button {
  width: 100%;
  display: block;
  margin-bottom: 10px;
  z-index: 1;
  position: relative;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.form-signin:focus {
  border-color: rgb(104, 145, 162);
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);
}

.to-register-button{

  margin-bottom: 5%;

  box-shadow:inset 0 1px 0 0 #bee2f9;
  background-color:#63b8ee;
  border-radius:6px;
  border:1px solid #3866a3;
  display:inline-block;
  cursor:pointer;
  color:#14396a;
  font-family:Arial,serif;
  font-size:18px;
  font-weight:bold;
  padding:6px 24px;
  text-decoration:none;
  text-shadow:0 1px 0 #7cacde;
}

.to-register-button:hover{
  background-color:#468ccf;
  text-decoration: underline;
}

.logo{

  margin-left: 1rem;
  float: left;

  font-size: 4rem;
  /* color: #A7DD3C; */

  color: #e5e883;
  background: #FFFFFF;
  text-shadow: 2px 0 0 #800040, 3px 2px 0 rgba(77,0,38,0.5), 3px 0 3px #FF002B, 5px 0 3px #800015, 6px 2px 3px rgba(77,0,13,0.5), 6px 0 9px #FF5500, 8px 0 9px #802A00, 9px 2px 9px rgba(77,25,0,0.5), 9px 0 18px #FFD500, 11px 0 18px #806A00, 12px 2px 18px rgba(77,66,0,0.5), 12px 0 30px #D4FF00, 14px 0 30px #6A8000, 15px 2px 30px rgba(64,77,0,0.5), 15px 0 45px #80FF00, 17px 0 45px #408000, 17px 2px 45px rgba(38,77,0,0.5);

}



</style>
