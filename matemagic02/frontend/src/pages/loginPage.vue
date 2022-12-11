<!--Login script-->

<template>
  <div class="container">
    <div class="card card-container">
      <h1 class="welcome">Vítejte ve hře <u>MateMagic</u> </h1>
      <h1 class="login">Pihlášení</h1>
      <h2>Nemáš účet?</h2>
      <button class="btn btn-lg btn-primary btn-block btn-signin" @click="toRegister" type="submit">Registruj se zde</button>
      <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
      <p id="profile-name" class="profile-name-card"></p>
      <form class="form-signin" @submit.prevent="loginUser">
        <span id="reauth-email" class="reauth-email"></span>
        <input type="text" id="inputLastName" placeholder="Email" v-model="email" />
        <input type="password" id="inputPassword" placeholder="Heslo" v-model="password" />
        <button class="btn btn-lg btn-primary btn-block btn-signin" value="login" type="submit">Přihlásit</button>


        <br>

      </form>
    </div>
  </div>

</template>
<script>

import {mapActions} from 'vuex';
import axios from "axios";
import store from "@/store/store";


export default {
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
      //console.log(this.users);
    } catch (err) {
      //console.log(err);
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


              }else{
                this.$router.push("./profileOverviewPage");
                store.commit('setLocalUser', this.user);
              }

            }
          })
          .catch(err => {
            alert("Nesprávné heslo nebo email");
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

.container {
  /* NUTNE ZMENIT OBRAZEK*/
  background-image: url("https://slevomat.sgcdn.cz/images/t/1280/11/45/11456672-186820.webp");
  background-color: #cccccc;
}

.login{
  font-size: 30px;
  text-align: center;
  padding-bottom: 50px;
}

.card-container.card {
  max-width: 350px;
  padding: 40px 40px;
  border: #7cff97 4px solid;
  /* border: #7cff97; */


}

.btn {
  font-weight: 700;
  height: 36px;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

/*
 * Card component
 */
.card {
  background-color: #F7F7F7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

/*
 * Form styles
 */
.profile-name-card {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0 0;
  min-height: 1em;
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

.btn.btn-signin {
  background-color: rgb(104, 145, 162);
  padding: 0px;
  font-weight: 700;
  font-size: 14px;
  height: 36px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  border: none;
  -o-transition: all 0.218s;
  -moz-transition: all 0.218s;
  -webkit-transition: all 0.218s;
  transition: all 0.218s;
}

.btn.btn-signin:hover,
.btn.btn-signin:active,
.btn.btn-signin:focus {
  background-color: rgb(12, 97, 33);
}
.welcome{
  text-align: center;
  font-size: 35px;
}
</style>
