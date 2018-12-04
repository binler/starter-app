const fs = require("fs");
const path = require("path");

module.exports = (server, express) => {
  // API routes
  fs.readdirSync(__dirname).forEach((file) => {
    if(file !== 'index.js') {
      require(`./${file.substr(0, file.indexOf('.'))}`)(server, express);
    }
  });
};
