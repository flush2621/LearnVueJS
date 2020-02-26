<template>
  <div class="hello">
    <div id="chart1"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      colors: ['#5793f3', '#d14a61', '#675bba'],
    }
  },
  mounted() {
    this.$chart.line1('chart1', this.colors);
  }
}
</script>

<style scoped>
  #chart1 {
    width: 600px;
    height: 600px;
  }
</style>