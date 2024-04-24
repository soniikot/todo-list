const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
  mode: 'development',
   entry: {
     index: './src/index.js'
   },

    watch: true,

  plugins: [
    new HtmlWebpackPlugin({
      title: 'ToDoList',
      template:'src/index.html'
    }),
  ],
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
 };