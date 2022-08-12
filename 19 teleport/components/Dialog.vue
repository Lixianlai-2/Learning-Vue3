<template>
  <div>
    <button @click="diaLog = !diaLog">点击我显示弹窗</button>
    <teleport to="body">
      <div v-show="diaLog" class="mask">
        <div class="diaLog">
          <h3>我是一个弹窗</h3>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <button @click="diaLog = !diaLog">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DiaLog",
  setup() {
    let diaLog = ref(false);

    return { diaLog };
  },
};
</script>

<style>
.mask {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  /* width: 100%;
  height: 100%; */
  background-color: rgba(241, 239, 239, 0.507);
}
.diaLog {
  /* top: 50%;
  left: 50%; */
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  position: absolute;
  /* transform: translate(-50%, -50%); */
  text-align: center;
  width: 300px;
  height: 300px;
  background-color: skyblue;
}
</style>
