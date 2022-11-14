<!--Login script-->

<template>
  <div class="container">
    <div class="card card-container">
      <h1 class="welcome">Vítejte ve hře <u>MateMagic</u> </h1>
      <h1 class="login-card">Pihlášení</h1>
      <h2>Nemáš účet?</h2>
      <button class="btn btn-lg btn-primary btn-block btn-signin" @click="login" type="submit">Registruj se zde</button>
      <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
      <p id="profile-name" class="profile-name-card"></p>
      <form class="form-signin">
        <span id="reauth-email" class="reauth-email"></span>
        <input type="text" id="inputFirstName" placeholder="Jméno" v-model="first_name" />
        <input type="text" id="inputLastName" placeholder="Příjmení" v-model="last_name" />
        <input type="password" id="inputPassword" placeholder="Heslo" v-model="password" />
        <button class="btn btn-lg btn-primary btn-block btn-signin" @click="login" type="submit">Přihlásit</button>
        <br>

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

        <div>Jsem: {{ role }}</div>
        <br>
        <input type="radio" id="Žák" value="Žák" v-model="role" />
        <label for="Žák">Žák</label>

        <input type="radio" id="Učitel" value="Učitel" v-model="role" />
        <label for="Učitel">Učitel</label>

        <br>


      </form>
    </div>
  </div>

</template>
<script>


export default {
  data() {
    return {
      first_name: '',
      last_name: '',
      password: '',
      year:0,
      msg: '',
      role: 'vyber',


    };
  },
  methods: {
    /**
     * login method
     * @values username, password
     */
    login() {
      if(this.role ==="Žák") {

        this.$store.state.attributes.first_name = this.first_name;
        this.$store.state.attributes.last_name = this.last_name;
        this.$store.state.attributes.password = this.password;
        this.$store.state.attributes.year_of_study = this.year;
        this.$store.state.attributes.money = 250;
        this.$store.state.logged = true;


        this.$router.push('./profileOverviewPage');
      }else if(this.role ==="Učitel"){
        this.$router.push('./addWordTask');
      }

    },

  }
};
</script>


<style>

.container{
  margin-top: -5%;

}

.login-card{

  font-size: 30px;
  text-align: center;
  padding-bottom: 50px;
}

.card-container.card {
  margin-top: 5%;
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
  margin: auto;

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
