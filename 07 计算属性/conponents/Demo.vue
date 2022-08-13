<template>
  姓：<input type="text" v-model="person.firstName" />
  <br />
  名：<input type="text" v-model="person.lastName" />
  <hr />
  <span>姓名：{{ person.fullName }}</span>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "App",
  setup() {
    let person = reactive({
      firstName: "李",
      lastName: "宪来",
    });
    // vue3计算属性的简写形式
    // person.fullName = computed(() => {
    //   return person.firstName + "-" + person.lastName;
    // });

    // vue3计算属性的完整写法
    person.fullName = computed({
      set(value) {
        console.log(`set函数中的参数value是什么？   `, value);
        [person.firstName, person.lastName] = value.split("-");
      },
      get() {
        console.log(`调用了getter`);
        return person.firstName + "-" + person.lastName;
      },
    });

    // 这里才再进行setter的设置，会传入value给set函数
    person.fullName = "li-xiao";

    return {
      person,
    };
  },
};
</script>
