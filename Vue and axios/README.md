# Vue配置代理服务器

处理跨域问题主要有 cros 方式盒 nginx 方式
而在开发环境中可以配置一下代理服务器来解决问题

## devServer.proxy

### 配置单个代理

```javascript

	vue.config.js

	module.exports = defineConfig({
  		transpileDependencies: true,
  		lintOnSave: false,
  		devServer:{
    		proxy:'http://localhost:890'
    		//代理服务器会自动模拟前端页面端口，这里要写的是你要请求的后端服务器的端口
  		}
	})
	
	//相应的，在请求方法的代码里面不再写直接后端服务器的端口，而写模拟前端页面的端口
	xxxx.vue
	getJson(){
            axios.get('http://localhost:8080/student')
            .then(function(res){
                console.log(res)
            })
            .catch(function(err){
                console.log(err)
            })
        }

```

如果请求的内容在根目录的public中可以找到则不会去请求后端服务器

### 配置多个代理
```javascript

	vue.config.js

	  devServer:{
    		proxy:{
      			'/api':{//请求前缀
        			target: 'http://localhost:890',//请求服务器地址
        			pathRewrith:{'^/api':''},//把请求前缀在前端发送的时候替换成空
        			ws:true,//用于支持websocket
        			changeOrigin:false //跨域伪造，避开端口封闭
      			}
    		}
  		},
	...
	
	//相对于单代理，这里需要把配置的请求前缀即 api 加到请求地址的端口号后面
	xxxx.vue
	getJson(){
            axios.get('http://localhost:8080/api/student')
            .then(function(res){
                console.log(res.data)
            })
            .catch(function(err){
                console.log(err)
            })
        }

```