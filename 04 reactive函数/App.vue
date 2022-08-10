<template>
  <h1>学习Vue3</h1>
  <h1>姓名：{{ obj.name }}</h1>
  <h1>年龄：{{ obj.age }}</h1>
  <button @click="add">点击我+1岁</button>
  <br />
  <br />
  <h2>职业：{{ obj.job }}</h2>
  <h2>工资:{{ obj.salary }}</h2>
  <h2 v-show="obj.gender">性别：{{ obj.gender }}</h2>
  <h2>爱好：{{ obj.hobby }}</h2>
  <button @click="changeSalary">点击我加工资</button>
  <button @click="changeHobby">点击我修改爱好</button>
  <hr />
  <button @click="addGender">添加一个gender属性</button>
  <button @click="deleteName">删除一个name属性</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    // 数据

    let obj = reactive({
      name: "li",
      age: 28,
      salary: "20k",
      job: "前端工程师",
      hobby: ["抽烟", "喝酒", "烫头"],
    });

    let add = function () {
      console.log(age);
      age.value++;
      console.log(`@@@reactive函数处理的对象: `, obj);
    };

    let changeSalary = function () {
      obj.salary = "40k";
    };

    let addGender = function () {
      obj.gender = "男";
    };

    let deleteName = function () {
      delete obj.name;
    };
    let changeHobby = function () {
      obj.hobby[0] = "按摩";
    };

    // 方法
    return {
      obj,
      add,
      changeSalary,
      addGender,
      deleteName,
      changeHobby,
    };
  },
};
</script>
