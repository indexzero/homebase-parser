const assume = require('assume');
const Parser = require('../parser');
const { single } = require('./fixtures');

describe('Parser', function () {
  it('can be constructed', () => {
    const parser = new Parser();
    assume(parser.books).is.an('array');
    assume(parser.books.length).equals(0);
    assume(parser.current).equals(null);
    assume(parser.parse).is.a('function');
    assume(parser.parseLine).is.a('function');
  });

  it('parses a single book', () => {
    const parser = new Parser();
    parser.parse(single);

    console.dir(parser.books);
  });
});
