<template>
  <h1>学习Vue3</h1>
  <h1>姓名：{{ name }}</h1>
  <h1>年龄：{{ age }}</h1>
  <button @click="add">点击我+1岁</button>
  <br />
  <br />
  <h2>职业：{{ obj.job }}</h2>
  <h2>工资:{{ obj.salary }}</h2>
  <button @click="changeSalary">点击我加工资</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    let name = ref("Li");
    let age = ref("28");
    let obj = ref({
      salary: "20k",
      job: "前端工程师",
    });

    let add = function () {
      console.log(age);
      age.value++;
    };

    let changeSalary = function () {
      obj.value.salary = "40k";
    };

    // 方法
    return {
      name,
      age,
      obj,
      add,
      changeSalary,
    };
  },
};
</script>
