const assume = require('assume');
const fields = require('../fields');

describe('fields', function () {
  it('should expose name mappings & ignores', () => {
    assume(fields.names).is.an('object');
    assume(fields.ignore).is.an('array');
  });

  it('should have expected ignores', () => {
    assume(fields.ignore.sort()).deep.equals(
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
