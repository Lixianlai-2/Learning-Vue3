<template>
  <input type="text" v-model="msg" />
  <br />
  输入的是：{{ msg }}
</template>

<script>
import { customRef, ref } from "vue";

export default {
  name: "App",
  setup() {
    // 自定义一个ref，叫做myRef
    function myRef(value, delay) {
      let timer = null;
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`通过getter获取数据${value}`);

            track();
            return value;
          },
          set(newValue) {
            value = newValue;
            console.log(`通过setter设置了新数据${value}`);
            clearTimeout(timer);
            timer = setTimeout(() => {
              trigger();
            }, delay);
          },
        };
      });
    }

    let msg = myRef("", 500);

    return {
      msg,
    };
  },
};
</script>
