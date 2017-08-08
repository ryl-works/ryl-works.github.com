var path = require('path'); // 引入path模块

module.exports = {
  entry: path.join(__dirname, 'src/index.js'), // 指定入口文件，
  output: {
    path: path.join(__dirname, 'dist'), // 打包到哪个路径下，
    filename: 'build.js' // 打包成功后的文件名称
  }
}
