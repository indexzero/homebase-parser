const assume = require('assume');
const path = require('path');
const { Parser, readFile } = require('../index');

const fixtures = path.join(__dirname, 'fixtures');

/**
 * Assumes a valid book has been parsed from source text
 * @param  {Book} book Parsed book returned by Parser
 */
function assumeValidBook(book) {
  // Indexing
  assume(book['book-number']).is.a('number');
  if (book.ISBN) assume(book.ISBN).is.a('string');
  assume(book.status).is.either(['Sold', 'For Sale']);
  assume(book['last-updated']).is.a('date');

  // Author(s)
  assume(book.author).is.a('string');
  if (book.illustrator) assume(book.illustrator).is.a('string');


  // Details
  assume(book.title).is.a('string');
  if (book['book-type']) assume(book['book-type']).is.a('string');
  assume(book.description).is.a('string');
  assume(book.categories).is.an('array');
  if (book.keywords) assume(book.keywords).is.an('array')
  if (book.comments) assume(book.comments).is.a('string');
  if (book.size) assume(book.size).is.a('string');

  // Condition
  assume(book['book-condition']).is.a('string');
  if (book['jacket-condition']) assume(book['jacket-condition']).is.a('string');
  assume(book['binding']).is.a('string');

  // Publisher
  assume(book['publisher']).is.a('string');
  if (book['publish-year']) assume(book['publish-year']).is.a('number');
  assume(book['publish-place']).is.a('string');
  assume(book['edition']).is.a('string');

  // Value
  assume(book.price).is.a('number');
  assume(book.cost).is.a('number');
}

/*
 * Test helper that assumes the `filename` when parsed
 * represents `length` valid books.
 */
function assumeParsedBooks(filename, length) {
  return async () => {
    const books = await readFile(path.join(fixtures, filename));
    assume(books.length).equals(length);
    books.forEach(assumeValidBook);
  }
}

describe('homebase-parser', function () {
  it('has expected exports', () => {
    assume(Parser).is.a('function');
    assume(readFile).is.a('asyncFunction');
  });

  it('reads a file smaller than the highwater mark (64kb)',
    assumeParsedBooks('humor.txt', 24)
  );

  it('reads a file larger than the highwater mark (112kb)',
    assumeParsedBooks('uncorrected-proofs.txt', 135)
  );

  it('reads a file larger than the highwater mark (240kb)',
    assumeParsedBooks('general-fiction.txt', 154)
  );
});
