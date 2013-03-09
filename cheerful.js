var cheerio = require('cheerio')
  , request = require('hyperquestionable')

module.exports =
function request$(url, cb) {
  request(url, function(err, body) {
    if (err) return cb(err)
    var $
    try {
      $ = cheerio.load(body)
    }
    catch (e) {
      return cb(e)
    }
    cb(null, $)
  })
}

