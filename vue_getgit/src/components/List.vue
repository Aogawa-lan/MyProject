<template>
  <div class="List">
      <!-- 展示用户数据 -->
      <ul v-show="users.length">
          <li v-for="a in users" :key="users.login">
              <a :href="a.html_url"><img :src="a.avatar_url" alt=""></a>
              <p>{{a.login}}</p>
          </li>
      </ul>
      <!-- 展示用户数据 -->
  </div>
</template>

<script>
export default {
    name: "vue_List",
    data() {
        return {
            users:[]
        }
    },
    mounted() {
        this.$bus.$on('getUsers',(users)=>{
            console.log('我是List组件，收到了数据')
            this.users = users
        })
    },
}
</script>

<style>
    .List{
        width: 100%;
    }
    .List ul{
        width: 100%;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 0;
    }
    .List ul li{
        width:30%;
        margin-top: 20px;
    }
    .List ul li img{
        width: 60%;
        display: block;
        margin: 0 auto;
    }
    .List ul li p{
        text-align: center;
        font-size: 22px;
    }
</style>