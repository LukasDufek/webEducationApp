<template>

  <div>
    <header-teacher/>
    <div class="main-content">
      <br>
      <section v-for="(item,index) in ulohy" :key="index">
        <h1>{{index +1}}.Úloha</h1>
      <h3>Zadání úlohy</h3>
        <h4>{{ulohy[index].zadani}}</h4>

      <h2>Ročník</h2>
        <h3>{{ulohy[index].proRocnik}}</h3>

      <h2>Správný výsledek</h2>
        <h3>{{ulohy[index].vysledek}}</h3>

      <h2>Odměna pro žáka</h2>
        <h3>{{ulohy[index].odmena}}</h3>

        <button>Upravit</button>
        <button @click="smazatUlohu(index)">Smazat</button>
        <hr>



      </section>

    </div>
  </div>

</template>

<script>
import HeaderTeacher from "@/components/headerTeacher";
export default {
  name: "slovniUlohyEdit",
  components: {HeaderTeacher},

  data(){
    return{
      ulohy:[],
      vybranaUloha:{}
    }
  },
  mounted() {
    this.ulohy = this.$store.state.ulohy;
  },
  methods:{

    smazatUlohu(pozice){
      this.ulohy.splice(pozice,1);
      this.$store.state.ulohy = this.ulohy;

    },


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
