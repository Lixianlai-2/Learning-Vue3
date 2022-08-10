<template>
  <h2>当前的坐标{{ point.x + "," + point.y }}</h2>
</template>

<script>
import { onMounted, reactive, ref, onBeforeUnmount } from "vue";

export default {
  name: "App",
  setup() {
    let point = reactive({
      x: 0,
      y: 0,
    });

    const getPoint = function (event) {
      point.x = event.pageX;
      point.y = event.pageY;
      console.log(point.x, point.y);
    };

    onMounted(() => {
      document.addEventListener("click", getPoint);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", getPoint);
    });

    return {
      point,
    };
  },
};
</script>
