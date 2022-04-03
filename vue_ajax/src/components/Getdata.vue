<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="getJson">获取数据</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "vue_getdata",
    data() {
        return {
            msg:"数据"
        }
    },
    methods: {
        getJson(){
            axios.get('http://localhost:8080/api/student')
            .then(function(res){
                console.log(res.data)
            })
            .catch(function(err){
                console.log(err)
            })
        }
    },
    mounted() {
        
    },
}
</script>

<style>

</style>