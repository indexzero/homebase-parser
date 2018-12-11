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

    assume(parser.books).is.an('array');
    assume(parser.books.length).equals(1);

    const [book] = parser.books;
    assume(book['book-number']).equals(332);
    assume(book['author']).equals('Alumit, Noel');
    assume(book['title']).equals('Letters to Montgomery Clift');
    assume(book['publisher']).equals('MacAdam/Cage');
    assume(book['description']).equals('Softcover Advance Proof copy of author\'s first novel.');
    assume(book['price']).equals(6);
    assume(book['last-updated']).deep.equals(new Date('2010-06-15T04:00:00.000Z'));
    assume(book['categories']).deep.equals(['ARCs/Uncorrected Proofs']);
    assume(book['ISBN']).equals('1931561028');
    assume(book['edition']).equals('Uncorrected Proof');
    assume(book['jacket-condition']).equals('No Jacket');
    assume(book['binding']).equals('Original Wraps');
    assume(book['publish-place']).equals('San Francisco');
    assume(book['publish-year']).equals(2002);
    assume(book['book-condition']).equals('NF');
    assume(book['size']).equals('8vo - over 7.75" - 9.75" tall');
    assume(book['book-type']).equals('Advanced Reading Copy (ARC)');
    assume(book['status']).equals('For Sale');
    assume(book['cost']).equals(1);
    assume(book['comments']).equals('SHELF 9');

  });
});
