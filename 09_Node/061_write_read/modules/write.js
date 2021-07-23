const fs = require('fs').promises;

module.exports = (dir, datas) => {
  fs.writeFile(dir, datas, { flag: 'w', encoding: 'utf8' });
};
