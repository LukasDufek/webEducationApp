<template>
  <div>
    <header-page/>
    <div class="container">
      <div class="main-content">

    </div>
    </div>
   </div>
</template>

<script>

//import MathExamples from "@/pages/mathExamples";

export default {
  name: "finalExam",
  data(){
    return{
      examples:[]
    }

  },
  mounted() {


  }
}
</script>

<style scoped>

.container{
  margin-top: 5rem;
  padding-top: 1rem;
  padding-bottom: 20rem;


}


.main-content{
  margin-right: auto;
  margin-left: auto;
  margin-top: 2rem;

  position: center;
  text-align: center;
  width: 70%;
  background: #ffee80;
  font-size: 20px;
  border-style: solid;
  border-radius: 1em;
  padding-left: 2em;
  padding-top: -1em;


}

</style>
