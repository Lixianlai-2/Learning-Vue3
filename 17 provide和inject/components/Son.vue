<template>
  <div class="son">
    这是子组件
    <Grandson></Grandson>
  </div>
</template>

<script>
import Grandson from "./Grandson";
export default {
  components: { Grandson },
  name: "Son",
};
</script>

<style scoped>
.son {
  background-color: green;
  padding: 10px;
}
</style>
