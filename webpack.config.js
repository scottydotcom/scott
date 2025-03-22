module.exports = {
  // other configurations...

  module: {
    rules: [
      {
        test: /\.css$/,

        use: [
          "style-loader",

          "css-loader",

          {
            loader: "postcss-loader",

            options: {
              sourceMap: false, // Set this to false if you want to ignore source maps
            },
          },
        ],
      },
    ],
  },

  devtool: false, // Disable source maps entirely
};
