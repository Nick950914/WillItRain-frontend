<template>
  <div class="flex-container">
    <div class="flex-item">
      <img alt="Vue logo" src="../assets/logo.png"/>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "home",
    components: {
        HelloWorld
    }
};
</script>

<style scoped>
  .flex-container {
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
</style>
