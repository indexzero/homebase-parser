const Parser = require('./parser');
const fs = require('fs');

module.exports = {
  Parser,
  readFile: async function reader(filename, opts = { encoding: 'latin1' }) {
    const file = fs.createReadStream(filename, opts);
    const parser = new Parser();

    file.on('readable', () => {
      let data;
      while (data = file.read()) {
        parser.parse(data);
      }
    });

    return new Promise((resolve, reject) => {
      file.once('error', err => reject(err));
      file.once('end', () => resolve(parser.books));
    });
  }
};
