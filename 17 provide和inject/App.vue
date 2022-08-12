<template>
  <div class="app">
    <h3>这是App组件</h3>
    车子信息：{{ name }}--{{ price }}

    <Son></Son>
  </div>
</template>

<script>
import Son from "./components/Son";
import { customRef, provide, reactive, ref, toRefs } from "vue";

export default {
  components: { Son },
  name: "App",
  setup() {
    let car = reactive({
      name: "BYD",
      price: "40W",
    });
    provide("car", car);
    return { ...toRefs(car) };
  },
};
</script>

<style>
.app {
  background-color: aquamarine;
  padding: 10px;
}
</style>
