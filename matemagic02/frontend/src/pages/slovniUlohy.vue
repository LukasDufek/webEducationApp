<template>

  <div class="main-contentA">
    <header-page/>
    <div class="main-content">
      <h1>Slovní úlohy pro {{this.$store.state.atributy.rocnik}}.Ročník</h1>


      <section class="one-example" v-if="!fazeHodnoceni && ulohy[item]">

        <h3>{{ulohy[item].zadani}}</h3>
        <h2>Sem napiš svůj výsledek</h2>
          <input type="number" v-model="vysledek">
          <button @click="vyhodnotit(vysledek)">Vyhodnotit</button>

        <br>

      </section>

      <section v-else-if="fazeHodnoceni">
        <h2 v-if="spravne">Tvoje řešení bylo správné, získáváš odměnu {{this.$store.state.ulohy[item].odmena}} stříbrných mincí</h2>

        <h2 v-else>Tvoje řešení bylo špatně</h2>

        <h2>Chceš zkusit další slovní úlohu?</h2>
        <button @click="dalsiUloha">Další úloha </button>
      </section>

      <section v-if="item > ulohy.length">
        <h2>Bohužel pro tebe nemámme žádné nové úlohy</h2>
      </section>



    </div>

  </div>

</template>

<script>

import store from "@/store/store";

export default {
  name: "slovniUlohy",
  data(){
    return{
      //aktualniUloha:{},
      ulohy:[],
      item: 0,
      vysledek: 0,
      spravne: false,
      fazeHodnoceni: false
    }
  },

  mounted() {

    for(let i=0; i<this.$store.state.ulohy.length; i++){
      if(this.$store.state.atributy.rocnik === this.$store.state.ulohy[i].proRocnik) {
        this.ulohy.push(this.$store.state.ulohy[i]);
      }
    }

  },

  methods:{
    vyhodnotit(vysledek) {
      this.fazeHodnoceni = true;
      this.ulohy[this.item].vysledekZaka = vysledek;

      if(this.ulohy[this.item].vysledekZaka === this.ulohy[this.item].vysledek){
        this.spravne = true;
        store.commit('zvysPocet', this.ulohy[this.item].odmena);
      }

    },
    dalsiUloha(){
      this.fazeHodnoceni = false;
      this.item++;
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
