<template>
  <div class="home">
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      message: "Hello",
      path: "/home/news",
    };
  },
  created() {
    console.log("home created");
    document.title = "首页";
  },

  destroyed() {
    console.log("destoryed");
  },

  // 这两个函数，只有该组件被保持了状态使用了keep-alive时，才是有效的
  activated() {
    this.$router.push(this.path);
  },
  deactivated() {
    console.log("deactivated");
    this.path = this.$route.path;
  },

  // beforeRouteLeave(to, from, next) {
  //   this.path = this.$route.path;
  //   next();
  // },
};
</script>
