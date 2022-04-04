<template>
  <div class="Search">
      <h1>{{msg}}</h1>
      <input type="text" placeholder="something" v-model="keyword">
      <button @click="getData">{{button_name}}</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "vue_Search",
    data() {
        return {
            msg:"Search Github Users",
            button_name:"search",
            keyword:""
        }
    },
    methods: {
        getData(){
            console.log(this.keyword)
            
            axios.get(`https://api.github.com/search/users?q=${this.keyword}`)
            .then(
                response => {
                    console.log('请求成功')
                    this.$bus.$emit('getUsers',response.data.items)
                },
                error => {
                    console.log('请求失败',error)
                }
            )
        }
    },
}
</script>

<style>
    .Search{
        width: 100%;
    }
    .Search input{
        width: 300px;
        height: 40px;
        padding-left: 15px;
        border: none;
        border: 1px solid #999;
        border-radius: 5px;
    }
    .Search button{
        width: 125px;
        height: 48px;
        margin-left: 20px;
        background: rgb(0, 70, 220);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        color: #fff;
    }
</style>