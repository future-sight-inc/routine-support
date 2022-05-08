const { merge } = require("webpack-merge");

module.exports = (config) => {
  return merge(config, {
    module: {
      rules: [
        {
          test: /\.mp3$/,
          loader: "file-loader",
        },
      ],
    },
  });
};
