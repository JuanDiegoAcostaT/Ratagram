const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const workboxPlugin = require('workbox-webpack-plugin')
// const { GenerateSW } = require('workbox-webpack-plugin')
// const { CacheFirst, NetworkFirst } = require('workbox-strategies')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'

  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css'
    }),
    new WebpackPwaManifestPlugin({
      name: 'Ratagram | tu app de fotos de Ratas',
      shortname: 'Ratagram 🦝',
      description: 'con Ratagram podras encontrar fotos de ratas muy bonitas .',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 12, 192, 256, 384, 512]
        }
      ]
    }),
    new workboxPlugin.GenerateSW({
      // swDest: 'sw.js',
      // clientsClaim: true,
      // skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://petgram-server.midudev.now.sh'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        },
        {
          urlPattern: new RegExp('https://petgram-server.midudev.now.sh'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      }
    ]
  }
}
