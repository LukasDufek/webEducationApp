<template>
  <div v-if="!!item">
    <section class="calculate" v-if="item.type=== 'calculate'" >
      <h3 class="example-text">

        <h3>{{index + 1}}.Příklad:</h3>
        <h4>{{item.message}}</h4>
        <h2>{{this.part_zeros(item.first_number)}} {{item.operator}} {{this.part_zeros(item.second_number)}} =</h2>
        <input class="input submit" :value="item.student_result" type="number" @input="(event) => onChanged(event.target.valueAsNumber)">

      </h3>
    </section>

    <section class="compare" v-else-if="item.type === 'compare'">
      <h3 class="example-text">
        <h3>{{index+1}}.Příklad:</h3>
        <h4>{{item.message}}</h4>
        <h2>{{item.first_number}}
          <select class="input submit"  :value="vyber" @change="(event) => onChanged(event.target.value)">
            <option>=</option>
            <option>&lt;</option>
            <option>&gt;</option>
          </select> {{item.second_number}}</h2>
      </h3>
    </section>

    <section class="calculate" v-else-if="item.type=== 'decimal'" >
      <h3 class="example-text">

        <h3>{{index+1}}.Příklad:</h3>
        <h4>{{item.message}}</h4>
        <h2>{{this.part_zeros(item.first_number)}} {{item.operator}} {{this.part_zeros(item.second_number)}} =</h2>
        <input class="input submit" type="number" step="0.01" :value="item.student_result" @change="(event) => onChanged(event.target.value)">


      </h3>

      <br>
    </section>

    <section class="round" v-else-if="item.type=== 'round'" >
      <h3 class="example-text">
        <h3>{{index+1}}.Příklad:</h3>
        <h4>{{item.message}} {{item.second_number}}</h4>
        <h2>{{this.part_zeros(item.first_number)}} {{item.operator}} </h2>
        <input class="input submit" type="number" :value="item.student_result" @change="(event) => onChanged(event.target.value)">

      </h3>

      <br>
    </section>


    <section class="" v-else-if="item.type=== 'division_remainder'" >
      <h3 class="example-text">
        <h3>{{index+1}}.Příklad:</h3>
        <h4>{{item.message}}</h4>
        <h2>{{item.first_number}} {{item.operator}} {{item.second_number}} = </h2>
        <input class="input submit" type="number" :value="item.student_result">
        <p>Zb.</p>
        <input class="input submit" type="number" v-model="remainder" @change="(event) => onChanged(event.target.value)">
      </h3>

      <br>
    </section>

    <section class="roman-num" v-else-if="item.type=== 'roman_num'" >
      <h3 class="example-text">
        <h3>{{index+1}}.Příklad:</h3>
        <h4>Římská čísla</h4>
        <h4>{{item.message}}</h4>
        <h2>{{item.first_number}} {{item.operator}} =</h2>
        <input class="input submit roman" type="text" :value="item.student_result" @change="(event) => onChanged(event.target.value)">
      </h3>

      <br>
    </section>

    <section class="roman-num" v-else-if="item.type=== 'fraction'" >
      <h3 class="example-text">
        <h3>{{index+1}}.Příklad:</h3>
        <h4>{{item.message}}</h4>
        <h3>{{item.first_number[0]}}/{{item.first_number[1]}} {{item.operator}}  {{item.second_number}}</h3>
        <input class="input submit" type="text" :value="item.student_result" @change="(event) => onChanged(event.target.value)">
      </h3>

      <br>
    </section>


  </div>
</template>

<script>
export default {
  name: "MathProblem",
  props: ["item", "index"],
  emits: ["resultchanged"],

  data() {
    return {
      result: 0,
      remainder: 0
    }
  },

  methods: {
    onChanged(value){
      this.$emit("resultchanged", {index: this.index, value});
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

.input{

  width: 250px;
  font-size: 28px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}

</style>
