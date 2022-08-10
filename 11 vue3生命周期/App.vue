<template>
  <button @click="showOrNot">点击我展示或隐藏Demo组件{{ show }}</button>
  <Demo v-if="show" />
</template>

<script>
import Demo from "./conponents/Demo.vue";
import { ref } from "vue";
export default {
  name: "App",
  components: { Demo },
  setup() {
    let show = ref(true);
    let showOrNot = function () {
      show.value = !show.value;
    };
    return {
      show,
      showOrNot,
    };
  },
};
</script>
