<template>
  <div class="container">
    <Search/>
    <List/>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  components:{
    Search,List
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
   width: 80%;
   margin: 0 auto;
   padding: 10%;
}
</style>
