<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">首页</router-link> |
      <router-link to="/about">关于</router-link>|
      <router-link v-bind:to="'/user/'+userId">用户</router-link>|   
      <router-link :to="{path:'/profile',query:{name:'spongebob',age:3}}">档案</router-link> 


      <!-- <button @click="userClick">用户</button>
      <button @click="profileClick">档案</button> -->
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
  data(){
    return {
      userId:'abc'
    }
  },
  methods:{
    userClick(){
      this.$router.push('/user/'+this.userId)
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'name',
          age:3
        }
      })
    }
  }
}
</script>