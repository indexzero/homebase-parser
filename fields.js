
/**
 * Default values to ignore when processing a given entry
 * @type {Array}
 */
const ignore = [
  'UBID', // Internal ABE Book ID
  'BOOS', // Book Start
  'BOOE', // Book End
  'UPTM', // Last Updated (Time)
  'ABLE', // Locatable?
  'TRAN', // Unknown (Values ['A', 'D'] observed)
  'BIND', // Unknown (Values ['H', 'S'] observed)
  'EDTN'  // Unknown (Values ['F'] observed)
];

/**
 * Mapping of field ids to descriptive names
 * @type {Object}
 */
const names = {
  // Indexing
  BOOK: 'book-number',
  ISBN: 'ISBN',
  STAT: 'status',
  UPDT: 'last-updated',

  // Author(s)
  ANAM: 'author',
  INAM: 'illustrator',

  // Details
  TNAM: 'title',
  BTYP: 'book-type',
  DESC: 'description',
  BCAT: 'category',
  SUB1: 'keywords',
  PDSC: 'comments',
  SIZE: 'size',

  // Condition
  BOOC: 'book-condition',
  JACK: 'jacket-condition',
  BNDC: 'binding',

  // Publisher
  PBLS: 'publisher',
  PBYR: 'publish-year',
  PBPL: 'publish-place',
  EDNT: 'edition',

  // Value
  PRIC: 'price',
  PPRC: 'cost'
};

module.exports = {
  names,
  ignore
};
