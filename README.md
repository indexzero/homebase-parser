# homebase-parser

Parser & file reader for the ABE Homebase 2.0 text (*.txt) format. 

## Usage

``` js
const { Parser, readFile } = require('homebase-parser');

// Read book data
const books = await readFile('path/to/your/file.txt');

// Do stuff with book data
// ... profit?
```

## Seriously though – what's all this then? 

🐲 Here be dragons. While using ABE Homebase (don't ask why) this file format
was discovered. There is literally no documentation for it. No where. Any
where. Not even in the [ABE Homebase 2.3 User Guide]. Looking for a sample?

```
BOOS|
BOOK|000332
TRAN|A
ANAM|Alumit, Noel
TNAM|Letters to Montgomery Clift
PBLS|MacAdam/Cage
DESC|Softcover Advance Proof copy of author's first novel.
PRIC|6
BIND|S
EDTN|F
UPDT|6/15/2010
UPTM|12:45:35 PM
BCAT|ARCs/Uncorrected Proofs
ABLE|1
ISBN|1931561028
UBID|367
EDNT|Uncorrected Proof
JCKC|No Jacket
BNDC|Original Wraps
PBPL|San Francisco
PBYR|2002
BOOC|NF
SIZE|8vo - over 7¾" - 9¾" tall
BTYP|Advanced Reading Copy (ARC)
STAT|For Sale
PPRC|1
PDSC|SHELF 9
BOOE|
```

And why would there be? The software itself is more or less dead. So why make
this? Because books – lots of books (seriously don't ask).

#### AUTHOR: [Charlie Robbins][https://github.com/indexzero]
#### LICENSE: APACHE 2.0

[ABE Homebase 2.3 User Guide]: https://www.abebooks.com/homebase/software-inventory-management-system-catalog/user-guide/homebase2.3-user-guide.pdf
