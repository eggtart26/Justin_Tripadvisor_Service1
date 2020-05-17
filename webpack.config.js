const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'public', 'components', 'main.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },

}