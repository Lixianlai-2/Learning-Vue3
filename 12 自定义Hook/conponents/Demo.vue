<template>
  <h2>当前的坐标{{ point.x + "," + point.y }}</h2>
</template>

<script>
import getPoint from "@/hooks/userPoint";

export default {
  name: "App",
  setup() {
    //#region
    // 设置对象类型的响应式数据，x和y就是坐标
    // let point = reactive({
    //   x: 0,
    //   y: 0,
    // });

    // // 修改坐标的函数
    // const getPoint = function (event) {
    //   point.x = event.pageX;
    //   point.y = event.pageY;
    //   console.log(point.x, point.y);
    // };

    // // 挂载成功后，获得坐标
    // onMounted(() => {
    //   document.addEventListener("click", getPoint);
    // });

    // // 卸载之前，移除点击事件里的对应函数
    // onBeforeUnmount(() => {
    //   document.removeEventListener("click", getPoint);
    // });
    //#endregion

    // 把自定义hook的返回值赋值给point
    const point = getPoint();

    return {
      point,
    };
  },
};
</script>
