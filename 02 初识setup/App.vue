<template>
  <h1>学习vue3</h1>
  <button @click="say">点击我显示姓名和年龄</button>
</template>

<script>
export default {
  name: "App",
  setup() {
    // 数据
    let name = "Li";
    let age = "28";

    let say = function () {
      alert("我是" + name + age);
    };

    // 方法
    return {
      name,
      age,
      say,
    };
  },
};
</script>
