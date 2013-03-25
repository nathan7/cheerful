var cheerio = require('cheerio')
  , request = require('hyperquestionable')

module.exports =
function request$(url, cb) {
  request(url, function(err, body, res) {
    if (err) return cb(err)
    var $
    try {
      $ = cheerio.load(body)
    }
    catch (e) {
      e.statusCode = res.statusCode
      e.headers = res.headers
      return cb(e)
    }
    $.statusCode = res.statusCode
    $.headers = res.headers
    cb(null, $)
  })
}

