<template>
  <h2>当前的x值是:{{ x.y }}</h2>
  <button @click="x.y++">点击我x+1</button>
  <hr />
  <h2>{{ job.j1.salary + "--" + sum + "--" + name }}</h2>
  <hr />
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />

  <h2>{{ name }}</h2>
  <button @click="name += '@'">点击我改名字</button>

  <hr />
  <h2>工资:{{ job.j1.salary }}K</h2>
  <button @click="job.j1.salary += 1">点我涨工资</button>
</template>

<script>
import { reactive, toRef, toRefs, shallowReactive, ref, shallowRef } from "vue";

export default {
  name: "App",
  setup() {
    // let x = ref({
    let x = shallowRef({
      y: 0,
    });

    // let person = reactive({
    let person = shallowReactive({
      sum: 0,
      name: "李宪来",
      job: {
        j1: {
          salary: 20,
          type: "sales",
        },
      },
    });

    return {
      ...toRefs(person),
      x,
      // sum: toRef(person, "sum"),
      // name: toRef(person, "name"),
      // salary: toRef(person.job.j1, "salary"),
    };
  },
};
</script>
