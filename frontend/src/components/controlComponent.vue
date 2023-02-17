<template>

  <div>

        <h3>Ke spuštění testu musíš splnit minimálně 40 cvičení s celkovou úspěšností 85%</h3>
        <h3>Splnil si: {{user.total_count_of_excercies}} cvičení</h3>
        <h3>Tvoje úspěšnost je: {{user.success_rate}}%</h3>

        <section v-if="main_control()">
          <h2>Tvoje podmínky k absolvování testu jsou splněné</h2>
          <button @click="to_test">Přejít k testu</button>
        </section>
      </div>


</template>

<script>



export default {
  name: "controlComponent",

  data(){
    return{
      user: JSON.parse(localStorage.user)
    }
  },

  methods:{

    main_control(){
      // true X false

      if( (this.user.total_count_of_excercies >= 40) && (this.user.success_rate >= 85) ){
        //jeste navic exp, kvuli postupu v pribehu
        return true;
      }else{
        return false;
      }
    },

    to_test(){
      console.log(this.main_control());
      this.$router.push('./finalExam');
    }

  }



}
</script>

<style scoped>


</style>
