<template>

  <div class="container">
    <div class="main-content">
      <h2>Jako učitel můžeš zadávat slovní úlohy</h2>

      <h2>Zadání slovní úlohy:</h2>
      <p style="white-space: pre-line;">{{ text_of_task }}</p>
      <textarea class="text-area-for-task" v-model="text_of_task" placeholder="Zde napiš celé znění slovní úlohy"></textarea>
      <br>
      <h2>Zadej ročník, pro jaký je úlohu určena</h2>
      <select v-model="for_year">
        <option disabled value="">Zvolit ročník</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>

      <h2>Sem zadej výsledek slovní úlohy</h2>
      <input type="number" v-model="result">
      <h2>Sem zadej výsledek odměnu pro žáka ve stříbrných mincích</h2>
      <input type="number" min=1 max=10 v-model="reward">

      <br>
      <button @click="addWordTask(text_of_task, for_year, result, reward)">Přidat úlohu</button>
      <br>
      <br>
      <br>
      <button @click="odhlasit">Odhlásit se</button>
    </div>
  </div>

</template>

<script>
export default {
  name: "editWordTask",
  data() {
    return {
      text_of_task:'',
      for_year: 1,
      result:0,
      reward:1,
      word_tasks:[],
      actual_task:{}
    }
  },

  methods:{
    metoda(){
      console.log("ahoj");
    }
  }
}
</script>

<style scoped>

</style>
