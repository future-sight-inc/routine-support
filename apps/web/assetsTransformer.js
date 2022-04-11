require("./custom-text-encoder");

const path = require("path");

module.exports = {
  process(__, filename) {
    return "module.exports = " + JSON.stringify(path.basename(filename)) + ";";
  },
};
