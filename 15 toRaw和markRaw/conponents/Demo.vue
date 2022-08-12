<template>
  <h2>{{ person.job.j1.salary + "--" + person.sum + "--" + person.name }}</h2>
  <hr />
  <h2>当前求和为：{{ person.sum }}</h2>
  <button @click="person.sum++">点我+1</button>
  <hr />

  <h2>{{ person.name }}</h2>
  <button @click="person.name += '@'">点击我改名字</button>

  <hr />
  <h2>工资:{{ person.job.j1.salary }}K</h2>
  <button @click="person.job.j1.salary += 1">点我涨工资</button>

  <h3>{{}}</h3>
  <button @click="showToRaw">点击展示toRaw改变后的数据</button>
  <hr />

  <h3>车子信息：{{ person.car }}</h3>
  <button @click="makeMarkRaw">让车子信息markRaw</button>
  <br />
  <button @click="person.car.name += '!'">给车名加!</button>
</template>

<script>
import { markRaw, reactive, toRaw, toRefs } from "vue";

export default {
  name: "App",
  setup() {
    let person = reactive({
      sum: 0,
      name: "李宪来",
      job: {
        j1: {
          salary: 20,
          type: "sales",
        },
      },
    });

    const showToRaw = function () {
      // toRaw会把响应式数据变成一个非响应式的，但不会影响原来的内容
      // let person2 = toRaw(person);

      // toRaw会根据person这个响应式对象，生成一个非响应式的普通对象
      // 把这个非响应式数据赋值给变量person2
      // 注意：使用toRaw不会改变原来的响应式数据
      let person2 = toRaw(person);

      console.log(`经过toRaw后的非响应式数据`, person2);
      console.log(`原来的person，经过toRaw后，没有改变，还是响应式的`, person);
    };

    const makeMarkRaw = function () {
      let car = {
        value: "40w",
        name: "BYD",
      };

      // 把car先变成不可响应的数据，然后再放到响应式数据中
      person.car = markRaw(car);
      console.log(`person:`, person);
      console.log(`person.car`, person.car);
      console.log(`person.name`, person.name);
      console.log("使用了markRaw");
    };

    return {
      makeMarkRaw,
      showToRaw,
      person,
      // ...toRefs(person),
    };
  },
};
</script>
