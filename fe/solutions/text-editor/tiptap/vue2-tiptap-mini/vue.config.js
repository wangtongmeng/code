const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': require('path').resolve(__dirname, 'src')
      }
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          tiptap: {
            test: /[\\/]node_modules[\\/]@tiptap[\\/]/,
            name: 'chunk-tiptap',
            chunks: 'all',
            priority: 20,
            enforce: true
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'chunk-vendors',
            priority: 10,
            chunks: 'async'
          }
        }
      }
    }
  }
})
