<template>
  <div class="alert alert-danger">{{ msg }}</div>
</template>

<script>

export default {
  name:"ErrorsComponent",
  props: ["msg"]
}

</script>

<style scoped>
.alert {
  border-radius: 0;
}
.alert-danger {
  margin-top: 2rem;
  background: red;
  color: #fff;
}
</style>
