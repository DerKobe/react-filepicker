var path = require('path');
var webpack = require('webpack');
var loaders = [
  { test: /\.js$/, loader: 'babel' },
  {
    test: /\.css/, exclude: /\.global\.css/,
    loaders: [
      'style?sourcemap', 'css?modules&importLoaders=1'
    ]
  },
  { test: /\.global\.css/, loader: 'style!raw' }
];

module.exports = [{
  entry: './src/ReactFilestack.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-filestack.js',
    libraryTarget: 'commonjs2'
  },
  module: { loaders: loaders },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'filepicker-js': 'filepicker'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.ProvidePlugin({
      filepicker: 'filepicker-js',
      'window.filepicker': 'filepicker-js'
    })
  ]
}, {
  entry: './src/demo.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'demo.js'
  },
  module: { loaders: loaders },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.ProvidePlugin({
      filepicker: 'filepicker-js',
      'window.filepicker': 'filepicker-js'
    })
  ]
}];