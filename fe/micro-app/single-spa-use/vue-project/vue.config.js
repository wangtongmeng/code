const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 4000
  },
  chainWebpack:(config)=>{
    if(config.plugins.has('SystemJSPublicPathWebpackPlugin')){
      config.plugins.delete('SystemJSPublicPathWebpackPlugin') 
    }
  }
})
