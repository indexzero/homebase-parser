const { names, ignore, control, types } = require('./fields');
const diagnostics = require('diagnostics');

/**
 * Descriptive debug directives
 * @type {Object}
 */
const debug = {
  read: diagnostics('homebase:read'),
  book: diagnostics('homebase:book'),
  line: diagnostics('homebase:line'),
  start: diagnostics('homebase:start')
};

/**
 * Simple regular expression to parse the line. e.g
 *
 * BOOS|
 * BOOK|000334
 * TRAN|A
 * ANAM|Niven, Jennifer
 * TNAM|The Ice Master: The Doomed 1913 Voyage of the Karluk
 * PBLS|Hyperion
 * DESC|Softcover Advance Uncorrected Proof of author's first book
 * PRIC|6
 * BIND|S
 * EDTN|F
 * UPDT|6/15/2010
 * UPTM|12:09:01 PM
 * BCAT|Non-Fiction: Exploration/True Adventure
 * BCAT|ARCs/Uncorrected Proofs
 *
 * @type {RegExp}
 */
const lexer = /(\w{4})\|(.*)$/;

/**
 * Parser is responsible for mapping fields into objects using
 * control fields as a guide for boundaries between objects.
 * @type {Parser}
 */
module.exports = class Parser {
  constructor() {
    this.books = [];
    this.current = null;
    this.parseLine = this.parseLine.bind(this);
  }

  parse(text) {
    text
      .split(/\r?\n/)
      .forEach(this.parseLine);
  }

  parseBookEnd() {
    return {
      status: 'For Sale',
      categories: [],
      keywords: [],
      ...this.current
    };
  }

  parseLine(line) {
    debug.read(line);

    const match = lexer.exec(line);
    if (!match) {
      debug.read('Could not match: "%s"', line);
      return;
    }

    const [, field, value] = match;
    if (field === control.end) {
      // BOOE pushes the next book onto the list of all books parsed
      const book = this.parseBookEnd();
      debug.book("Parsed %j", book);
      this.books.push(book);
    } else if (field === control.start) {
      // BOOS starts tracking a new book internally.
      // Only one book at a time.
      debug.start();
      this.current = {};
    } else if (!ignore[field]) {
      this.parseField(field, value);
    }
  }

  parseField(field, value) {
    // If we do not ignore the field, attempt to parse it.
    const name = names[field];
    if (!name) {
      debug.line('No name for: %s in "%s"', field);
      return;
    }

    if (types[field]) {
      const parsed = types[field](value, this.current);
      if (typeof parsed !== 'undefined') {
        this.current[name] = parsed;
      }
    } else {
      this.current[name] = value;
    }

    debug.line(field, name, value);
  }
}
