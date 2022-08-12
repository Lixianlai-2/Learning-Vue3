<template>
  <div class="app"></div>
</template>

<script>
import {
  customRef,
  provide,
  reactive,
  readonly,
  ref,
  toRefs,
  isRef,
  isReactive,
  isReadonly,
  isProxy,
} from "vue";

export default {
  name: "App",
  setup() {
    let car = reactive({
      name: "BYD",
      price: "40W",
    });
    let sum = ref(0);
    let car2 = readonly(car);
    let car3 = ref({
      name: "BYD",
      price: "40W",
    });

    // console.log(isReactive(car));
    // console.log(isRef(sum));
    // console.log(isReadonly(car2));
    console.log(isProxy(car2));
    // console.log(`car3:@@@`, car3);

    // console.log(`car3  isRef:`, isRef(car3));
    // console.log(isProxy(car3));

    return { ...toRefs(car), sum, car2 };
  },
};
</script>

<style>
.app {
  background-color: aquamarine;
  padding: 10px;
}
</style>
