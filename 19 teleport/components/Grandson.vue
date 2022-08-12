<template>
  <div class="grandson">
    <h5>这是孙组件</h5>
    <Dialog />
  </div>
</template>

<script>
import Dialog from "./Dialog.vue";

export default {
  name: "Grandson",
  components: { Dialog },
};
</script>

<style scoped>
.grandson {
  background-color: rgb(200, 216, 120);
  padding: 10px;
}
</style>
