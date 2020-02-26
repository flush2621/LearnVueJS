<template>
  <div>
    <h3>Child</h3>
    <h5>{{ msg }}</h5>
    <h5>{{ childMsg }}</h5>
    <button class="btn" @click="tickMsg">Tick Ass</button>
  </div>
</template>

<script>
import bus from '../util/bus'
export default {
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      childMsg: 'Hi Parent'
    }
  },
  methods: {
    tickMsg() {
      this.$emit('showMsg','i am from child')
    }
  },
  mounted () {
    console.log(this.$parent.msg)
    console.log(this.$attrs)
    bus.$on('msg', (val) => {
      this.childMsg = val
    })
  },
}
</script>

<style scoped>
.btn{
  width: 100px;
  height: 80px;
  font-size: 20px;
  border-radius: 10%;
}
</style>