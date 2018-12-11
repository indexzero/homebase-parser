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
    assume(parser.books).deep.equals([{
      'book-number': 332,
      author: 'Alumit, Noel',
      title: 'Letters to Montgomery Clift',
      publisher: 'MacAdam/Cage',
      description: 'Softcover Advance Proof copy of author\'s first novel.',
      price: 6,
      'last-updated': new Date('2010-06-15T04:00:00.000Z'),
      categories: [ 'ARCs/Uncorrected Proofs' ],
      ISBN: '1931561028',
      edition: 'Uncorrected Proof',
      'jacket-condition': 'No Jacket',
      binding: 'Original Wraps',
      'publish-place': 'San Francisco',
      'publish-year': 2002,
      'book-condition': 'NF',
      size: '8vo - over 7¾" - 9¾" tall',
      'book-type': 'Advanced Reading Copy (ARC)',
      status: 'For Sale',
      cost: 1,
      comments: 'SHELF 9'
    }])
  });
});
