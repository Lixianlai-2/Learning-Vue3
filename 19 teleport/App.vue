<template>
  <div class="app">
    <h3>这是App组件</h3>
    <Son />
  </div>
</template>

<script>
import Son from "./components/Son.vue";
export default {
  components: { Son, Son },
  name: "App",
};
</script>

<style>
.app {
  background-color: grey;
  padding: 10px;
}
</style>
