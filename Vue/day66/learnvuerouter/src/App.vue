<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/" tag="button">首页</router-link> |
      <router-link to="/about">关于</router-link> -->
      <button @click="homeClick">首页</button>
      <button @click="aboutClick">关于</button>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  name:'App',
  methods:{
    homeClick(){
      this.$router.push('/')
      console.log('homeClick');
    },
    aboutClick(){
      this.$router.push('/about')

      console.log('aboutClick');
    }
  }
}
</script>