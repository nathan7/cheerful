
# cheerful

  the composition of [Cheerio](https://github.com/MatthewMueller/cheerio) and [hyperquestionable](https://github.com/nathan7/hyperquestionable)

## Installation

    $ npm install cheerful

## API

```javascript
var request$ = require('cheerful')
```

### request$(url, function cb(err, $))

  request url using hyperquestionable, run it through cheerio and hand it back to you.
  The HTTP status code is added to the Cheerio object and to Cheerio errors as statusCode.

## License

  MIT
