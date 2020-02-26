export default{
  state: {
    count: 0,
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
    tripleCount(state) {
      return state.count * 3
    }
  },
  mutations: {
    increase(state) {
      state.count++
    },
    decrease(state) {
      state.count--
    }
  },
  actions: {
    delayAdd(context) {
      setTimeout(() => {
        context.commit('increase')
      },1000)
    }
  }
}