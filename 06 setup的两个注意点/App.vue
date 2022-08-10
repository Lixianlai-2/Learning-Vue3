<template>
  <Demo school="人民大学" @userDefined="userDefined" />
</template>

<script>
import Demo from "./conponents/Demo.vue";
export default {
  name: "App",
  components: { Demo },
  setup() {
    const userDefined = function () {
      console.log("userDefined works");
    };

    return {
      userDefined,
    };
  },
};
</script>
