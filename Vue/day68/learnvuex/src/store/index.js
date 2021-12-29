import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
} from './mutations-type'


// 1. 安装插件
Vue.use(Vuex)


// 2. 创建对象/导出
export default new Vuex.Store({
  state: {
    counter: 1000,
    students: [{
        id: 101,
        name: 'a',
        age: 3
      },
      {
        id: 102,
        name: 'b',
        age: 5
      },
      {
        id: 103,
        name: 'c',
        age: 66
      },
      {
        id: 104,
        name: 'd',
        age: 16
      },
    ]
  },
  mutations: {
    // 方法
    [INCREMENT](state) {
      state.counter++
    },
    // increment(state) {
    //   state.counter++
    // },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, payload) {
      state.counter += payload.count
    },
    addStudent(state, stu) {
      state.students.push(stu)
    }
  },
  actions: {
    aUpdateInfo(context) {
      setTimeout(() => {
        context.commit('updateInfo')
      }, 1000)

    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 15)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      return function (age) {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {
    a:{

    },
    b:{
      
    }
  }
})