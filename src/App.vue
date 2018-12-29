<template>
  <div id="app">  
     <router-view></router-view>
  </div>
</template>

<script>
import vlogin from "@/components/login"
import vmain from "@/components/main"
export default {
  name: 'app',
  data(){
     return{
         
     }
  }
}
</script>

<style>
html,body{
   width: 100%;
   height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
</style>
