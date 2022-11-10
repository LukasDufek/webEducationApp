<template>
  <div>
    <game-header/>
    <div class="main-content">
      <h2>Tvoje postava {{this.$store.state.attributes.first_name}}</h2>

      <h3>Tvé schonposti:</h3>
      <h3>Síla: {{this.$store.state.attributes.abilities.strength}}</h3>
      <h3>Útok: {{this.$store.state.attributes.abilities.attack}}</h3>
      <h3>Obrana: {{this.$store.state.attributes.abilities.defense}}</h3>
      <h3>Výdrž: {{this.$store.state.attributes.abilities.hp}}</h3>
      <br>
      <h3>Vlastníš: {{Math.floor(this.$store.state.attributes.money /10)}} zlatých a {{this.$store.state.attributes.money % 10}} stříbrných mincí</h3>
      <h3>Zkušenosti: {{this.$store.state.attributes.exp}}</h3>

    </div>
  </div>

</template>

<script>
import GameHeader from "@/gamePages/gameHeader";
export default {
  name: "characterOverview",
  components: {GameHeader}
}
</script>

<style scoped>

.main-content{
  margin-top: 10%;
  margin-left: 2rem;
  max-width: 350px;
  padding: 40px 40px;

  border: #3449ff 4px solid;

  background: white;
}

</style>
