const test = require('tape')
const es2020 = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(es2020)
})
