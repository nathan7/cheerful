
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

  Example:
```javascript
var request$ = require('cheerful')
request$('http://google.com', findDoodle)
function findDoodle(err, $) {
  var headers = (err || $).headers
  if (headers && headers.location)
    return request$(headers.location, findDoodle)
  if (err) return console.error('error', err)
  var div = $('center div[title="Google"]')
  var img = 'http://google.com'+ div.attr('style').match(/url\((\S+)\)/)[1]
  console.log('today\'s Google Doodle:', img)
}
```

## License

  MIT
