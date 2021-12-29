<template>
  <div id="app">
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition">+</button>
    <button @click="substraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>------------------getters相关信息------------------</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>

    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(4)}}</h2>
    <router-view />
  </div>
</template>

<script>
import HelloVuex from "./components/HelloWorld.vue";
import {
INCREMENT
}from './store/mutations-type'
export default {
  name: "App",
  components: {
    HelloVuex,
  },
  data() {
    return {
      message: "我是App组件",
    };
  },
  // computed: {
  //   more20stu() {
  //     return this.$store.students.filter(s => s.age >= 15)
  //   }
  // },
  methods: {
    addition() {
      this.$store.commit("increment");
    },
    substraction() {
      this.$store.commit("decrement");
    },

    
    addCount(count){
      // 普通的提交
      // this.$store.commit("incrementCount",count)
      // console.log(count);

      // 特殊的提交风格                                                                                                                                                                                                                                                                                                                                                                                                                                 
      this.$store.commit({
        type:'incrementCount',
        count
      })
    },

    

    addStudent(){
      const stu={id:105,name:'e',age:18}
      this.$store.commit('addStudent',stu)
    },
    updateInfo(){
      this.$store.dispatch('aUpdateInfo')
    }
  },
};
</script>

<style>
</style>
