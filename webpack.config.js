var webpack = require('webpack');

global.Promise = global.Promise || require('es6-promise');


module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        'app/app.jsx'
    ],
    externals: {
      jquery: 'jQuery'
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery'
      })
    ],
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    resolve: {
      root: __dirname,
      alias: {
        Main: 'app/components/Main.jsx',
        Nav: 'app/components/Nav.jsx',
        Weather: 'app/components/Weather.jsx',
        About: 'app/components/About.jsx',
        Examples: 'app/components/Examples.jsx',
        WeatherForm: 'app/components/WeatherForm.jsx',
        WeatherMessage: 'app/components/WeatherMessage.jsx',
        apixu: 'app/api/apixu.jsx'
      },
      extensions: ['','.js','.jsx']
    },
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'latest']
          },
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/
        }
      ]
    },
    devtool: 'cheap-module-eval-source-map'
};
