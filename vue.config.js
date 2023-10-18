const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, 
  devServer: {
    open: {app:{name:'chrome'}},
    allowedHosts: [
      'all',  
    ],
 
    proxy: {
      '/api': {    //proxy:{'/api':{}},代理器中设置/api,项目中请求路径为/api的替换为target
        target: 'http://localhost:8888',// 要跨域的域名
        pathRewrite: { '^/api': '/' },  //pathRewrite方法重写url
 
	               //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
	                //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
 
        ws: true,   //ws: true, // proxy websockets
        changeOrigin: true// 要跨域的域名
      },

    }
  }

})
