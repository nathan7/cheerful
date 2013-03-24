
# cheerful

  the composition of cheerio and hyperquestionable

## Installation

    $ npm install cheerful

## API

    var request$ = require('cheerful')

### request$(url, function cb(err, $))

    request url using [hyperquestionable](https://github.com/nathan7/hyperquestionable), run it through [Cheerio](https://github.com/MatthewMueller/cheerio) and hand it back to you.
    The HTTP status code is added to the Cheerio object and to Cheerio errors as statusCode.

## License

  MIT
