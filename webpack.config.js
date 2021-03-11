const path = require("path");

module.exports = {
    // webpackの実行モードを指定
    // productionは最適化された状態で、
    // developmentはソースマップが有効の状態でJSファイルが出力される
    mode: 'development',

    // entry pointとなるファイルを指定する
    entry: path.resolve(__dirname, "src/index.js"),

    // bundleの出力方法
    output: {
      // 出力するファイル名を指定する
      filename: 'bundle.js',
      // bundleの出力先をパスで指定する
      path: path.join(__dirname, "dist")
    },

    // webpack-dev-serverの設定
    devServer: {
        // ファイルを圧縮する
        compress: true,

        // // サーバー起動時に自動で開くページを指定する。openと組み合わせる？
        // openPage: "index.html",

        // // html,image,cssなどの静的コンテンツを配置するディレクトリを指定する。
        // // トップページとしたいindex.htmlをここに置けばルートとして開いてくれる
        contentBase: path.join(__dirname, "dist"),

        // // contentBaseのファイルに変更があった場合は自動的にブラウザをリロードする
        watchContentBase: true,

        hot: true,

        // 待ち受けport
        port: 8080,
    },

    // bundleするときの挙動を設定する
    module: {
      rules: [{
        // ファイルタイプを指定する
        // 以下は拡張子.jsの場合
        test: /\.js$/,
        // bundleの対象外にするものを指定する
        exclude: /node_modules/,
        // 使用するloaderの設定
        use: {
          // loader名
          loader: 'babel-loader',
          // babelのoptionを設定する
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/react"
            ]
          }
        }
      }]
    },
    // IE向けの設定
    target: ["web", "es5"],

    devtool: 'inline-source-map',

    resolve: {
      extensions: ['.js', '.jsx', '.json']  // .jsxも省略可能対象にする
    }
};
