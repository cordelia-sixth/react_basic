const path = require("path");

module.exports = {
    // webpackの現在の実行モード
    mode: 'development',

    // bundleの出力方法
    output: {
      // bundleの出力先をパスで指定する
      path: path.join(__dirname, "dist")
    },

    // webpack-dev-serverの設定
    devServer: {
        // ブラウザを起動する時に開くファイル
        openPage: "index.html",

        // html,image,cssなどの静的コンテンツを配置するディレクトリを指定する。
        // index.htmlはここに置く
        contentBase: path.join(__dirname, "public"),

        // contentBaseのファイルに変更があった場合は自動的にブラウザをリロードする
        watchContentBase: true,

        // 待ち受けport
        port: 8080,
    },

    // moduleの扱いを設定する
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env"
            ]
          }
        }
      }]
    },

    devtool: 'inline-source-map'
};
