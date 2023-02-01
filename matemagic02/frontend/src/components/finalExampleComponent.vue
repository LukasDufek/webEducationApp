<template>
  <div>
    <br>

    <div v-for="(item, index) in examples" :key="item.id">

      <section v-if="item.type === 'calculate'" >
        <h3>{{index+1}}.Příklad</h3>
        <h4>{{item.message}}</h4>
        <span class="example-and-input">
        <label>{{part_zeros(item.first_number)}} {{item.operator}} {{part_zeros(item.second_number)}} =  </label>
        <input class="input-submit" type="number" v-model="item.your_result">
          <button class="confirm_button" @click="() => onChanged(index, item.your_result, 0)">✓</button>
          </span>
        <br>



        <hr>
      </section>

      <section v-else-if="item.type === 'compare'">
        <h3>{{index+1}}.Příklad</h3>
        <h4>{{item.message}}</h4>
        <h2>{{item.first_number}}
          <select class="input-submit" v-model="item.your_result">
            <option>=</option>
            <option>&lt;</option>
            <option>&gt;</option>
          </select> {{item.second_number}}</h2>
        <button class="confirm_button" @click="() => onChanged(index, item.your_result, 0)">✓</button>


        <hr>
      </section>

      <section v-else-if="item.type=== 'decimal'" >

          <h3>{{index+1}}.Příklad:</h3>
          <h4>{{item.message}}</h4>
          <h2>{{part_zeros(item.first_number)}} {{item.operator}} {{this.part_zeros(item.second_number)}} =</h2>
          <input class="input-submit" type="number" step="0.01" v-model="item.your_result" >
        <button class="confirm_button" @click="() => onChanged(index, item.your_result, 0)">✓</button>



        <hr>
      </section>


      <section v-else-if="item.type=== 'round'" >

          <h3>{{index+1}}.Příklad:</h3>
          <h4>{{item.message}} {{item.second_number}}</h4>
          <h2>{{part_zeros(item.first_number)}} {{item.operator}} </h2>
          <input class="input-submit" type="number" v-model="item.your_result">
          <button class="confirm_button" @click="() => onChanged(index, item.your_result, 0)">✓</button>



        <hr>
      </section>

      <section v-else-if="item.type=== 'division_remainder'" >
          <h3>{{index+1}}.Příklad:</h3>
          <h4>{{item.message}}</h4>
          <h2>{{item.first_number}} {{item.operator}} {{item.second_number}} = </h2>
          <input class="input-submit" type="number" v-model="item.your_result">
          <p>Zb.</p>
          <input class="input-submit" type="number" v-model="item.your_remainder" >
        <button class="confirm_button" @click="() => onChanged(index, item.your_result, item.your_remainder)">✓</button>

        <hr>
      </section>


      <section v-else-if="item.type=== 'roman_num'" >

          <h3>{{index+1}}.Příklad:</h3>
          <h4>Římská čísla</h4>
          <h4>{{item.message}}</h4>
          <h2>{{item.first_number}} {{item.operator}} =</h2>
          <input class="input-submit-roman" type="text" v-model="item.your_result">
        <button class="confirm_button" @click="() => onChanged(index, item.your_result, 0)">✓</button>


        <hr>
      </section>


    </div>


    <br>
  </div>

</template>

<script>
export default {
  name: "finalExampleComponent",
  props: ["examples", "index"],
  emits: ["resultchanged"],

  data() {
    return {
      result: 0,
      remainder: 0,
      char_result:this.generate_crosses()

    }
  },



  methods: {
    onChanged(index, your_result, your_remainder){
      this.$emit("resultchanged", {index, your_result, your_remainder});



    },


    generate_crosses(){

      let arr = [];
      for(let i=0; i<this.examples.length; i++){
        arr[i]='X';
      }

      return arr;

    },



    text_tmp_result(your_number, index){

      if(parseInt(your_number[index]) !== -1){
        this.char_result[index]='✓';
      }

    },


    part_zeros(number){
      if(number % 1 !== 0){
        let parts = number.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return parts.join(".");

      }else{
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      }

    },

  },
}
</script>

<style scoped>

.example-and-input{
  display: inline-block;
  text-align: left;
  font-size: 28px;
  font-family: "Arial Black",serif;

}

.input-submit{
  height: 30px;
  width: 100px;
  font-size: 25px;

}

.confirm_button{

  margin-top: 1em;
  margin-left: 0.5em;
  background-color: #00ff04;
  border:2px solid #020402;


  display:inline-block;
  color:#666666;


  font-family:Arial,serif;
  font-size:25px;
  font-weight:bold;
  padding:4px 12px;
  text-decoration:none;
}

/*
.confirm_button:focus{
  box-shadow:inset 0 1px 0 0 #caefab;
  background-color:#77d42a;
  border:1px solid #268a16;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial,serif;
  font-size:21px;
  font-weight:bold;
  padding:6px 12px;
  text-decoration:none;
}

 */


</style>
