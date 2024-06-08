const path = require("path")

module.exports = {
  // webapck配置
  webpack: {
    // 路径别名配置
    alias: {
      // 约定用@符号表示src文件夹所在路径
      '@': path.resolve(__dirname, 'src')
    }
  }
}