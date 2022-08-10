import { onMounted, reactive, onBeforeUnmount } from "vue";
const getPoint = function () {
  // 设置对象类型的响应式数据，x和y就是坐标
  let point = reactive({
    x: 0,
    y: 0,
  });

  // 修改坐标的函数
  const getPoint = function (event) {
    point.x = event.pageX;
    point.y = event.pageY;
    console.log(point.x, point.y);
  };

  // 挂载成功后，获得坐标
  onMounted(() => {
    document.addEventListener("click", getPoint);
  });

  // 卸载之前，移除点击事件里的对应函数
  onBeforeUnmount(() => {
    document.removeEventListener("click", getPoint);
  });

  return point;
};
export default getPoint;
