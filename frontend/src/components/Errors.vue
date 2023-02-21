<template>
  <div v-if="!closed" class="alert alert-danger">
    <button @click="close_box" class="close-btn" >✖</button>
    <br>
    <h3 class="err-msg">{{ msg }}</h3>
  </div>
</template>

<script>

export default {
  name:"ErrorsComponent",
  props: ["msg"],

  data(){
    return{
      closed:false
    }
  },

  methods: {
    close_box(){

      this.closed = true;
    },
  }
}

</script>

<style scoped>
.alert {
  position: relative;
  border-radius: 0;
}

.close-btn{

  position: center;

  margin-top: 1rem;
  background: #4e9b4e;
  font-size: 18px;
}

.alert-danger {
  position: absolute;

  text-align: center;


  top:0;
  left:0;
  bottom:0;
  right:0;
  margin: auto;

  border-style: solid;
  border-radius: 0.5em;

  width: 300px;
  height: 160px;

  background: #ff9474;
  color: black;
}

.err-msg{
  font-size: 27px;
}

</style>
