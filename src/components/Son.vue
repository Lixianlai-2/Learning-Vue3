<template>
  <div class="son">
    这是子组件
    <Grandson />
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
  background-color: rgb(87, 173, 87);
  padding: 10px;
}
</style>
