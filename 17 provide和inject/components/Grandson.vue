<template>
  <div class="grandson">
    <h5>这是孙组件</h5>
    从爷组件获得的车子数据：{{ name }}--{{ price }}
  </div>
</template>

<script>
import { inject, toRefs } from "@vue/runtime-core";
export default {
  name: "Grandson",
  setup() {
    let car2 = inject("car");
    return { ...toRefs(car2) };
  },
};
</script>

<style scoped>
.grandson {
  background-color: rgb(200, 216, 120);
  padding: 10px;
}
</style>
