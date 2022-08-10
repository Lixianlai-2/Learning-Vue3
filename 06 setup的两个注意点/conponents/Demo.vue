<template>
  <h1>姓名：{{ person.name }}</h1>
  <h1>年龄：{{ person.age }}</h1>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "App",
  props: ["school"],
  emits: ["userDefined"], //这里不写会黄色警告
  setup(props, context) {
    console.log(`@@`, props.school);
    // 触发自定义事件
    context.emit("userDefined");

    let person = reactive({
      name: "li",
      age: 28,
    });
    // 方法
    return {
      person,
    };
  },
};
</script>
