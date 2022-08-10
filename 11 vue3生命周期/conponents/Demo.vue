<template>
  <h1>工资:{{ salary }}</h1>
  <button @click="addMoney">点击我加工资</button>
</template>

<script>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";

export default {
  name: "App",
  setup() {
    let salary = ref(20000);
    const addMoney = function () {
      salary.value += 1000;
    };

    // 通过组合式API的形式去使用生命周期钩子
    onBeforeUpdate(() => {
      console.log("----- onBeforeUpdate -----");
    });
    onUpdated(() => {
      console.log("----- onUpdated -----");
    });
    onMounted(() => {
      console.log("----- onMounted -----");
    });
    onBeforeMount(() => {
      console.log("----- onBeforeMount -----");
    });
    onBeforeUnmount(() => {
      console.log("----- onBeforeUnmount -----");
    });
    onUnmounted(() => {
      console.log("-----onUnmounted  -----");
    });
    return {
      salary,
      addMoney,
    };
  },

  // beforeCreate() {
  //   console.log("----- beforeCreate ----");
  // },
  // created() {
  //   console.log("----- created ----");
  // },
  // beforeMount() {
  //   console.log("-----beforeMount  ----");
  // },
  // mounted() {
  //   console.log("-----mounted  ----");
  // },
  // beforeUpdate() {
  //   console.log("----- beforeUpdate ----");
  // },
  // updated() {
  //   console.log("-----updated  ----");
  // },
  // beforeMount() {
  //   console.log("----- beforeMount ----");
  // },
  // mounted() {
  //   console.log("----- mounted ----");
  // },
  // beforeUnmount() {
  //   console.log("-----beforeUnmount  ----");
  // },
  // unmounted() {
  //   console.log("-----unmounted  ----");
  // },
};
</script>
