<template>
  <h2>当前求和为：{{ person.sum }}</h2>
  <button @click="person.sum++">点我+1</button>
  <hr />
  <h2>{{ person.msg }}</h2>
  <button @click="person.msg += '!'">点我加!</button>
  <hr />
  <h2>{{ person.name }}</h2>
  <button @click="person.name += '@'">点击我改名字</button>
  <h2>工资:{{ person.job.j1.salary }}K</h2>
  <button @click="person.job.j1.salary += 1">点我涨工资</button>
</template>

<script>
import { watch, reactive } from "vue";

export default {
  name: "App",
  setup() {
    // let sum = ref(0);
    // let msg = ref("你好啊");

    // watch(
    //   [sum, msg],
    //   (newValue, oldValue) => {
    //     console.log(`新的值:`, newValue, `旧的值:`, oldValue);
    //   },
    //   {
    //     immediate: true,
    //   }
    // );
    let person = reactive({
      sum: 0,
      msg: "你好啊",
      name: "李宪来",
      job: {
        j1: {
          salary: 20,
          type: "sales",
        },
      },
    });

    // 监视reactive所定义的一个响应式数据的全部属性
    // 1.注意：此处无法正确的获取oldValue
    // 2.注意：强制开启了深度监视（deep配置无效）
    watch(person, (newValue) => {
      console.log(newValue);
    });

    // 监视reactive所定义的一个响应式数据的某些属性
    // watch([() => person.name, () => person.msg], (newValue, oldValue) => {
    //   console.log(`person的name变化了:`, newValue, oldValue);
    // });

    watch(
      () => person.job,
      (newValue, oldValue) => {
        console.log(`person的name变化了:`, newValue, oldValue);
      },
      {
        deep: true,
      }
    );

    return {
      person,
    };
  },
};
</script>
