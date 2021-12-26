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
  created(){
    console.log('home created');
    document.title='首页'
  },
  destroyed(){
    console.log('destoryed');
  },
  actived
};
</script>
