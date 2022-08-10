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
        const nameArr = value.split("-");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
      get() {
        return person.firstName + "-" + person.lastName;
      },
    });

    return {
      person,
    };
  },
};
</script>
