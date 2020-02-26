<template>
  <div class="parent">
    <h1>Parent</h1>
    <h3>{{ msg }}</h3>
    <h5>Vuex<span style="color:green">{{ count }}</span></h5>
    <h5>getters<span style="color:red">{{ doubleCount }}--{{ tripleCount }}</span></h5>
    <button @click="addStore">add store</button>
    <m-child ref="compChild" :msg="'from Parent message'" @showMsg="tickAss" v-bind="$attrs"></m-child>
  </div>
</template>

<script>
import MChild from './Child'
import { mapState,mapMutations,mapGetters } from 'vuex'
export default {
  data() {
    return {
      msg: 'Hi Child'
    }
  },
  computed: {
    // count() {
    //   return this.$store.state.count
    // },
    // doubleCount() {
    //   return this.$store.getters.doubleCount
    // },
    ...mapGetters([
      'doubleCount',
      'tripleCount'
    ]),
    ...mapState({
      count: state => state.text.count
    })
  },
  components: {
    MChild,
  },
  methods: {
    ...mapMutations([
      'increase',
      'decrease'
    ]),
    tickAss(val) {
      this.msg = val
    },
    addStore() {
      // this.$store.commit('increase')
      // this.increase()
      this.$store.dispatch('delayAdd')
    }
  },
  mounted () {
    console.log(this.$children[0].childMsg)
    console.log(this.$refs.compChild.childMsg)
  },
}
</script>

<style scoped>
.btn{
  width: 80px;
  height: 40px;
  border-radius: 10%;
}
.parent{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>
