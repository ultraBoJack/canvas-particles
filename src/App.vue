<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  box-sizing: border-box;
}
body{
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.slide-enter-active, .slide-leave-active{
  transition: all 0.5s;
}
.slide-enter, .slide-leave-to{
  transform: translate3d(0, 1000px, 0);
  opacity: 0;
}
</style>
