<!--Login script-->

<template>
  <div class="container-login">
    <Errors v-if="error" :msg="error" />
    <div class="card card-container">
      <h1 class="welcome">Vítejte ve hře</h1> <h3 class="logo">MateMagic</h3>
      <h1 class="login-input">Registrace</h1>
      <h2>Již máš účet?</h2>
      <button class="button-register-login" @click="toLogin" type="submit">Přihlásit zde</button>
      <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
      <p id="profile-name" class="profile-name-card"></p>

      <form @submit.prevent="register">
        <div class="form-signin">
          <input type="text" class="inputName" placeholder="Jméno" v-model="first_name" />

          <input type="text" class="inputName" placeholder="Příjmení" v-model="last_name" />

          <input type="text" class="inputName" placeholder="Email" v-model="email" />

          <input type="password" id="inputPassword" placeholder="Heslo" v-model="password" />

          <input type="password" id="inputPasswordAgain" placeholder="Potvrdit heslo" v-model="confirm_password" />


        <br>
        <input type="radio" id="student" value="student" v-model="role" />
        <label for="student">Žák</label>

        <input type="radio" id="teacher" value="teacher" v-model="role" />
        <label for="teacher">Učitel</label>

        <br>

        <div v-if="role==='student'">
          <h3>Zvolit ročník</h3>
        <select v-model="year">
          <option disabled value="">Zvolit ročník</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <br>
        <br>
        </div>
          <br>

        <button class="button-register-login" @click="registerUser">Zaregistrovat</button>

        </div>
      </form>



    </div>
  </div>

</template>
<script>
import { mapActions } from "vuex";
import {mapGetters} from "vuex";
import Errors from "@/components/Errors";

export default {
  components:{Errors},
  computed:{
    ...mapGetters(["error"])
  },

  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
      year:0,
      msg: '',
      role: 'vyber',
      user:{}


    };
  },


  methods: {
    ...mapActions(["register"]),

    registerUser() {

      if(this.role==='student'){
        this.createNewPlayer();
      }else{
        this.createNewTeacher();

      }
      this.register(this.user).then(res => {

          if (res.data.success) {

            alert("Uživatel úspěšně registrován");
            this.$router.push('./');
          }

            //console.log("data neprosli");
            //console.log(res.status);


      }).catch(() =>{
        //console.log(err);

      })



    },


    toLogin(){
      this.$router.push('./');
    },

    createNewPlayer() {

            let money =0;
            switch (this.year){
              case "1":
                money = 5;
                break;

              case "2":
                money = 50;
                break;

              case "3":
                money = 200;
                break;

              case "4":
                money = 450;
                break;

              case "5":
                money = 900;
                break;
            }


            this.user = {
              "first_name": this.first_name,
              "last_name": this.last_name,
              "email": this.email,
              "password": this.password,
              "confirm_password": this.confirm_password,
              "role": this.role,
              "year": this.year,
              "money": money,
              "exp": 0,
              "abilities": {
                strength: 5,
                attack: 5,
                defense: 5,
                hp: 5
              },
              "inventory": [],
              "helm_equip": {},
              "weapon_equip": {},
              "armor_equip": {},
              "total_count_of_excercies":0,
              "success_rate":0,
              "daily_limit_excercies":0,
              "defeated_oponents":[],
              "completed_word_tasks":[],
              "date_of_last_calculating":null

            }


    },

    createNewTeacher(){
      this.user = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password,
        role: this.role,
      };
    }

  },

};
</script>


<style>

.container-login{
  max-height: 100%;

  /* Center and scale the image nicely */
  /* background: url("http://localhost:8080/assets/imgs/background.png"); */
  /* background-image: url("./src/assets/background.png"); */
  background-size: cover;

  margin-top: -5%;
}


.card-container.card {
  margin-top: 5%;
  max-width: 350px;
  padding: 40px 40px;
  border: #7cff97 4px solid;
  /* border: #7cff97; */


}


/*
 * Card component
 */
.card {
  background-color: rgba(247, 247, 247, 0.9);
  padding: 20px 25px 30px;
  margin: auto;

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


.form-signin .inputName,
.form-signin #inputPassword, #inputPasswordAgain  {
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

.welcome{
  text-align: center;
  font-size: 35px;
}

.button-register-login{
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

.button-register-login:hover{
  background-color:#468ccf;
  text-decoration: underline;
}




</style>
