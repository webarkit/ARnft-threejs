const path = require('path');

module.exports = (env, argv) => {
  let devtool = false;
  if (argv.mode === 'development') {
    devtool = 'inline-source-map';
  }
  console.log(`${argv.mode} build`);
  const module = {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              // @see https://github.com/babel/babel/issues/9849
              ['@babel/transform-runtime']
            ]
          }
        },
        {
          loader: 'ts-loader',
        }
      ]
      },
    ],
  };
  return [{
  name: 'ARnftThreejs',
  entry: './src/index.ts',
  devtool,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ARnftThreejs.js',
    library: 'ARnftThreejs',
    libraryTarget: 'umd',
    // @see: https://github.com/webpack/webpack/issues/3929
    libraryExport: 'default',
    // @see: https://github.com/webpack/webpack/issues/6522
    globalObject: 'this',
  },
  externals: {
    three: {
      commonjs: 'three',
      commonjs2: 'three',
      amd: 'three',
      root: 'THREE' // indicates global variable
    }
  },
  module,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
},
{
  name: 'ARnft-threej.module',
  entry: './src/index.ts',
  experiments: {
    outputModule: true,
  },
  output: {
    library: {
      type: 'module',
    },
    path: path.resolve(__dirname, 'dist'),
    filename: 'ARnftThreejs.module.js',
    //library: 'ARnftThreejs',
    //libraryTarget: 'umd',
    // @see: https://github.com/webpack/webpack/issues/3929
    //libraryExport: 'default',
    // @see: https://github.com/webpack/webpack/issues/6522
    //globalObject: 'this',
  },
  externalsType: 'module',
  externals: {
    three: 'three',
  },
  module,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
}];
};
