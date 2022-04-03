const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  
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


})

