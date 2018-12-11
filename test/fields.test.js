const assume = require('assume');
const fields = require('../fields');

describe('fields', function () {
  it('should expose name mappings, ignores & control fields', () => {
    assume(fields.names).is.an('object');
    assume(fields.ignore).is.an('object');
    assume(fields.control).is.an('object');
  });

  it('should have expected control fields', () => {
    assume(fields.control.start).equals('BOOS');
    assume(fields.control.end).equals('BOOE');
  });

  it('should have expected ignores', () => {
    assume(Object.keys(fields.ignore).sort()).deep.equals(
      ['ABLE', 'BIND', 'BOOE', 'BOOS', 'EDTN', 'TRAN', 'UBID', 'UPTM']
    );
  });

  it('should have expected name mappings', () => {
    const keys = Object.keys(fields.names);
    const values = Object.values(fields.names);

    assume(values.sort()).deep.equals([
      'ISBN',
      'author',
      'binding',
      'book-condition',
      'book-number',
      'book-type',
      'category',
      'comments',
      'cost',
      'description',
      'edition',
      'illustrator',
      'jacket-condition',
      'keywords',
      'last-updated',
      'price',
      'publish-place',
      'publish-year',
      'publisher',
      'size',
      'status',
      'title'
    ]);

    assume(keys.sort()).deep.equals([
      'ANAM',
      'BCAT',
      'BNDC',
      'BOOC',
      'BOOK',
      'BTYP',
      'DESC',
      'EDNT',
      'INAM',
      'ISBN',
      'JACK',
      'PBLS',
      'PBPL',
      'PBYR',
      'PDSC',
      'PPRC',
      'PRIC',
      'SIZE',
      'STAT',
      'SUB1',
      'TNAM',
      'UPDT'
    ]);
  });
});
