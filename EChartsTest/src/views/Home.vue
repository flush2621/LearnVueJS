<template>
  <div>
    This is Home
    <h1>{{ $route.params.id }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>