# vue_getgit 

vue通过axios搜索github用户

## 安装必要modules
```
npm install
```

## 运行
```
npm run serve
```

## 接口地址
```
https://api.github.com/search/users?q=xxx
```

## 请求代码
```javascript
    Search.vue

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
```

## 数据组件间传递 （全局事件总线）
```javascript

    main.js

    new Vue({
        render: h => h(App),
        beforeCreate(){
            Vue.prototype.$bus =this//配置总线
        }
    }).$mount('#app')


    List.vue

    mounted() {//谁需要接收数据就在mounted上挂载接收方法
        this.$bus.$on('getUsers',(users)=>{
            console.log('我是List组件，收到了数据')
            this.users = users
        })
    }

    Search.vue

    this.$bus.$emit('getUsers',response.data.items)
    //谁发送数据，就在谁那调用发送方法并附带数据

```

