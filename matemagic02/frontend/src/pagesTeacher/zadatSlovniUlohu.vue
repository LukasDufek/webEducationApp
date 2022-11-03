<template>
  <div>
    <header-teacher/>
    <div class="main-content">
    <h2>Jako učitel můžeš zadávat slovní úlohy</h2>

    <h2>Zadání slovní úlohy:</h2>
    <p style="white-space: pre-line;">{{ zadani }}</p>
    <textarea v-model="zadani" placeholder="Zde napiš celé znění slovní úlohy"></textarea>
      <br>
      <h2>Zadej ročník, pro jaký je úlohu určena</h2>
    <select v-model="proRocnik">
      <option disabled value="">Zvolit ročník</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>

    <h2>Sem zadej výsledek slovní úlohy</h2>
    <input type="number" v-model="vysledek">
    <h2>Sem zadej výsledek odměnu pro žáka ve stříbrných mincích</h2>
    <input type="number" min=1 max=10 v-model="odmena">

      <br>
    <button @click="pridatUlohu(zadani, proRocnik, vysledek, odmena)">Přidat úlohu</button>
      <br>
      <br>
      <br>
      <button @click="odhlasit">Odhlásit se</button>
  </div>
</div>

</template>

<script>
import store from "@/store/store";
import HeaderTeacher from "@/components/headerTeacher";


export default {
  name: "zadatSlovniUlohu",
  components: {HeaderTeacher},
  //components: {HeaderTeacher},
  data() {
    return {
      zadani:'',
      proRocnik: 1,
      vysledek:0,
      odmena:1,
      ulohy:[]
    }
  },
  methods: {

    pridatUlohu(zadani, proRocnik, vysledek, odmena){
      let vysledekZaka =0;
      let uloha = {zadani, proRocnik, vysledek, odmena, vysledekZaka};
      this.ulohy.push(uloha);
      store.commit('pridejUlohu', uloha);

      alert("Úloha úspěšně přidána");
      //location.reload();
      console.log(this.ulohy);
    },
    odhlasit(){
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

.main-content{
  margin-top: 10rem;
}

</style>
