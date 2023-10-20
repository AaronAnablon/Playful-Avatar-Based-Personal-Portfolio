module.exports = {
    module: {
      rules: [
        {
          test: /react-facebook/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      ],
    },
  };