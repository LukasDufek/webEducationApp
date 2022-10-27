<template>
<div class="main-contentA">
  <header-page/>
  <div class="main-content">
    <h1>Příklady pro {{this.$store.state.atributy.rocnik}}.Ročník</h1>
    <h2>Dnes jsi už absolvoval {{this.denni_limit}} cvičení</h2>


      <section class="one-example" v-if="!konec_cviceni && priklady[item]">

        <h3>{{item+1}}.Příklad: <h2>{{priklady[item].prvniCislo}} {{priklady[item].operator}} {{priklady[item].druheCislo}} =</h2> <input type="number" v-model="vysledek">
          <button @click="pridatDoVysledku(vysledek)">✔</button> </h3>

    <br>

      </section>

    <section v-if="item > 19">
      <button @click="vyhodnotit">Vyhodnotit</button>
    </section>

    <section v-if="konec_cviceni">
      <h2>Počet chyb: {{pocet_chyb}} z {{priklady.length}} příkladů</h2>
      <h2>Tvoje úspěšnost je : {{this.uspesnost}}%</h2>
      <h2>Dostáváš odměnu : {{this.odmena}}</h2>
      <h2 v-if="chybne_priklady.length > 0">Příklady, které byly špatně: </h2>
      <section v-for="(item, index) in chybne_priklady" :key="index">
      <h3>{{(index+1)}}.Příklad: {{chybne_priklady[index].prvniCislo}} {{chybne_priklady[index].operator}} {{chybne_priklady[index].druheCislo}}
       = {{chybne_priklady[index].vysledek}} </h3>
        <p>Tvuj vysledek: {{chybne_priklady[index].tvujVysledek}}</p>


      </section>
      <button @click="znovu">Další procvičování</button>
    </section>

  </div>

</div>

</template>

<script>
import store from "@/store/store";

export default {
  name: "mathExamples",

  data() {
    return {
      //rocnik: 1, //default
      priklad: {},
      priklady: [],
      vysledky:[],
      vysledek: 0,
      konec_cviceni: false,
      item: 0,
      pocet_chyb:0,
      uspesnost:100,
      chybne_priklady:[],
      denni_limit : 0,
      odmena:0

    }
  },

  mounted() {
    //this.vygenerujCviceniPro_I();

    switch (this.$store.state.atributy.rocnik){
      case 1:
        this.vygenerujCviceniPro_I();
        break;
      case 2:
        this.vygenerujCviceniPro_II();
        break;
    }


  },

  methods: {

    //GNEREROVANI CVICENI PRO I.ROCNIK
    //1. FUNKCE pro 1.ROCNIK
    generujPrikladyScitani_I() {
      let prvniCislo = Math.floor(Math.random() * 10) +1;
      let druheCislo = Math.floor(Math.random() * 10) +1;
      let operator = '+';
      let tvujVysledek = 0;
      let vysledek = prvniCislo + druheCislo;
      this.priklad = {prvniCislo, druheCislo, operator, vysledek, tvujVysledek}

      if(this.existujeTakovyPriklad(this.priklad)){
        this.generujPrikladyScitani_I();
        //prechod pres desitku
      }else if((prvniCislo%10) + (druheCislo%10) > 10){
        this.generujPrikladyScitani_I();
      }else {
        this.priklady.push(this.priklad);
      }

    },
    //2.FUNKCE pro 1.ROCNIK
    generujPrikladyOdcitani_I() {
      let prvniCislo = Math.floor(Math.random() * 20) +1;
      let druheCislo = Math.floor(Math.random() * 20) +1;
      let tmp;
      if(druheCislo > prvniCislo){
        tmp=druheCislo;
        druheCislo = prvniCislo;
        prvniCislo = tmp;

      }

      let operator = '-';
      let tvujVysledek = 0;
      let vysledek = prvniCislo - druheCislo;
      this.priklad = {prvniCislo, druheCislo, operator, vysledek, tvujVysledek}


      if(this.existujeTakovyPriklad(this.priklad)){
        this.generujPrikladyOdcitani_I();
        //prechod pres desitku
      }else if((prvniCislo%10) - (druheCislo%10) < 0){
        this.generujPrikladyOdcitani_I();
      } else {
        this.priklady.push(this.priklad);
      }

    },

    //3. FUNKCE pro 1.ROCNIK
    vygenerujCviceniPro_I(){
      for(let i = 1; i<=2; i++){
        this.generujPrikladyScitani_I();
        this.generujPrikladyOdcitani_I();
      }
      // eslint-disable-next-line
      this.priklady = this.priklady.sort((a, b) => 0.5 - Math.random());

    },








    //GNEREROVANI CVICENI PRO II.ROCNIK
    //1. FUNKCE pro 2.ROCNIK
    generujPrikladyScitani_II() {
      let prvniCislo = Math.floor(Math.random() * 100) +20;
      let druheCislo = Math.floor(Math.random() * 100) +20;
      let operator = '+';
      let tvujVysledek = 0;
      let vysledek = prvniCislo + druheCislo;
      this.priklad = {prvniCislo, druheCislo, operator, vysledek, tvujVysledek}

      if(vysledek > 100){
        this.generujPrikladyScitani_II();
      }else if(this.existujeTakovyPriklad(this.priklad)){
        this.generujPrikladyScitani_II();
        //prechod pres desitku
      }else if((prvniCislo%10) + (druheCislo%10) > 10){
        this.generujPrikladyScitani_II();
      }else {
        this.priklady.push(this.priklad);
      }

    },
    //2.FUNKCE pro 2.ROCNIK
    generujPrikladyOdcitani_II() {
      let prvniCislo = Math.floor(Math.random() * 100) +1;
      let druheCislo = Math.floor(Math.random() * 100) +1;
      let tmp;
      if(druheCislo > prvniCislo){
        tmp=druheCislo;
        druheCislo = prvniCislo;
        prvniCislo = tmp;

      }

      let operator = '-';
      let tvujVysledek = 0;
      let vysledek = prvniCislo - druheCislo;
      this.priklad = {prvniCislo, druheCislo, operator, vysledek, tvujVysledek}


      if(this.existujeTakovyPriklad(this.priklad)){
        this.generujPrikladyOdcitani_II();
        //prechod pres desitku
      }else if((prvniCislo%10) - (druheCislo%10) < 0){
        this.generujPrikladyOdcitani_II();
      } else {
        this.priklady.push(this.priklad);
      }

    },


    generujPrikladyNasobeni_II() {
      let prvniCislo = Math.floor(Math.random() * 5) +1;
      let druheCislo = Math.floor(Math.random() * 5) +1;

      let operator = '•';
      let tvujVysledek = 0;
      let vysledek = prvniCislo * druheCislo;
      this.priklad = {prvniCislo, druheCislo, operator, vysledek, tvujVysledek}


      if(this.existujeTakovyPriklad(this.priklad)){
        this.generujPrikladyNasobeni_II();
        //prechod pres desitku
      } else {
        this.priklady.push(this.priklad);
      }

    },

    //3. FUNKCE pro 1.ROCNIK
    vygenerujCviceniPro_II(){

      for(let i=0; i<4; i++){
        this.generujPrikladyNasobeni_II();
      }
      for(let i = 0; i<8; i++){

        this.generujPrikladyScitani_II();
        this.generujPrikladyOdcitani_II();
      }
      // eslint-disable-next-line
      this.priklady = this.priklady.sort((a, b) => 0.5 - Math.random());

    },

    existujeTakovyPriklad(priklad){
      let existuje = false;
        for(let i=0; i<this.priklady.length; i++){
          if(priklad.prvniCislo === this.priklady[i].prvniCislo && priklad.druheCislo === this.priklady[i].druheCislo &&
              priklad.operator === this.priklady[i].operator){
            existuje = true;
          }
        }

        return existuje;
    },



    pridatDoVysledku(vysledne_cislo){
      vysledne_cislo = parseInt(vysledne_cislo);
      //console.log(vysledne_cislo);
      this.vysledky.push(vysledne_cislo);
      this.item ++;


      //console.log(this.vysledky);


      //this.vysledky.splice(0,index, vysledne_cislo);
      //console.log(this.vysledky);



    },

    vyhodnotit(){
      this.item = 0
      this.konec_cviceni = true;
      this.chybne_priklady = [];
      this.pocet_chyb = 0;
      //zbytecne
      this.odmena =0;

      for(let i=0; i<this.priklady.length; i++){
        if(this.priklady[i].vysledek !== this.vysledky[i]){
          this.pocet_chyb++;
          this.priklady[i].tvujVysledek = this.vysledky[i];
          this.chybne_priklady.push(this.priklady[i]);
        }
      }
      this.uspesnost = ((this.priklady.length - this.chybne_priklady.length) / this.priklady.length) * 100;
        if(this.uspesnost>= 90){
          this.odmena = 4;
        }else if(this.uspesnost >= 75){
          this.odmena =2;
        }else if(this.uspesnost >= 60){
          this.odmena =1;
        }

        //this.$store.state.atributy.penize += this.odmena;
        store.commit('zvysPocet', this.odmena);


    },


    znovu(){
      this.denni_limit++;
      this.konec_cviceni = false;
      this.vysledky=[];
      console.log(this.odmena);
      console.log(this.$store.state.atributy.penize);
      console.log('this.$store.state.atributy.jmeno');
    }

  }
}

</script>

<style scoped>


.main-content{
  margin: auto;
  margin-top: 10rem;
  position: center;
  text-align: center;
  width: 85%;
  background: #ffee80;
  font-size: 20px;
  border-radius: 1em;
  padding-left: 2em;
  padding-top: -1em;

  margin-bottom: 5rem;
}

</style>
