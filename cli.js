#!/usr/bin/env node
var request$ = require('./')
if (process.argv.length < 3)
  process.exit(console.error('usage: cheerful <url> [selector]'))

var url = process.argv[2]
  , selector = process.argv[3] || null

request$(url, function(err, $) {
  if (err) console.error('error:', err)
  if (selector)
    return process.exit(console.log($(selector)))
  global.err = err
  global.$ = $
  require('repl').start({})
})
