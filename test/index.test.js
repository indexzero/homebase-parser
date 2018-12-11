const assume = require('assume');
const path = require('path');
const { Parser, readFile } = require('../index');

const fixtures = path.join(__dirname, 'fixtures');

describe('homebase-parser', function () {
  it('has expected exports', () => {
    assume(Parser).is.a('function');
    assume(readFile).is.a('asyncFunction');
  });

  it('reads a file smaller than the highwater mark (64kb)', async () => {
    const books = await readFile(path.join(fixtures, 'humor.txt'));
    assume(books.length).equals(24);
  });

  it('reads a file larger than the highwater mark (112kb)');
  it('reads a file larger than the highwater mark (240kb)');
});
