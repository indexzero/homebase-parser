/**
 * Control fields (Book Start, Book End)
 * @type {Object}
 */
const control = {
  start: 'BOOS',
  end: 'BOOE'
};

/**
 * Default values to ignore when processing a given entry
 * @type {Array}
 */
const ignore = {
  'UBID': 'Internal ABE Book ID',
  'BOOS': 'Book Start',
  'BOOE': 'Book End',
  'UPTM': 'Last Updated (Time)',
  'ABLE': 'Locatable?',
  'JACK': `Unknown (Values ['J'] observed)`,
  'TRAN': `Unknown (Values ['A', 'D'] observed)`,
  'BIND': `Unknown (Values ['H', 'S'] observed)`,
  'EDTN': `Unknown (Values ['F'] observed)`
};

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
  BCAT: 'categories',
  SUB1: 'keywords',
  PDSC: 'comments',
  SIZE: 'size',

  // Condition
  BOOC: 'book-condition',
  JCKC: 'jacket-condition',
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

/**
 * Shared known value types for reuse in field=
 * type mappings below.
 * @type {Object}
 */
const shared = {
  integer: value => parseInt(value, 10),
  float: value => parseFloat(value)
};

/**
 * Type mappings for non-string fields
 * @type {Object}
 */
const types = {
  // Dates
  UPDT: value => new Date(value),

  // TODO: People / names. Must support:
  // 1. Last, First
  // 2. Last, First Middle
  // 3. Last, First M.
  // 4. Last, F. Middle
  // 5. Multi Last, First
  // 6. Any permutation of the above
  // 7. Multiple authors (; separated)
  // ANAM: shared.person,
  // INAM: shared.person,

  // Details
  BCAT: (value, book) => {
    const { categories = [] } = book;
    categories.push(value);
    return categories;
  },

  // Comma separated values
  SUB1: values => values.split(',').map(v => v.trim()),

  // Integers
  PBYR: shared.integer,
  BOOK: shared.integer,

  // Decimal
  PRIC: shared.float,
  PPRC: shared.float
};

module.exports = {
  names,
  ignore,
  control,
  types
};
