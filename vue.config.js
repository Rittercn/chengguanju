const path = require('path')
const pxtorem = require('postcss-pxtorem')
const resolve = (dir) => path.resolve(__dirname, './', dir)

module.exports = {
  

  chainWebpack: (config) => {

  },

  configureWebpack: (config) => {
    // config.module.rules.push({
    //   test: /\.less$/,
    //   include: resolve('./src/'),
    //   use: [
    //     {
    //        loader: 'style-resources-loader',
    //        options: {
    //           sourceMap: false,
    //           patterns: [
    //             path.resolve(__dirname, 'src/styles/variable.less'), // 需要全局导入的less
    //           ],
    //        }
    //     }
    //   ]
    // })
    config.module.rules.push({
      // 处理jquery
      test: /\.less$/,
      include: resolve('./src/'),
      use: [
	    {
	      loader: 'postcss-loader',
	      options: {
	      	sourceMap: false,
	      	postcssOptions: {
	          plugins: [
	            pxtorem({
	              rootValue: 37.5,
	              selectorBlackList: [],
	              propList: ["*"],
	              minPixelValue: 2
	            })
	      	  ]
	      	}
	      }
	    },
	    {
	       loader: 'less-loader',
	       options: {
	       	  sourceMap: false
	       }
	    }
      ]
    })
  },

  css: {
    sourceMap: false
  },

  devServer: {
    // 端口配置
    port: 8080,
    // 反向代理配置
    proxy: {
      '/api/': {
        target: 'http://chenguanadmin.gzbigbang.cn/api/',
        // target: 'http://103.45.147.145:3458',
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },

}
