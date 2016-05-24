const test = require('tape')
const browserify = require('browserify')
const es2020 = require('./')

test('es2020', function (t) {
  t.plan(3)

  browserify({
    debug: true
  })
  .add('example.js')
  .transform(es2020)
  .bundle(function (err, code) {
    if (err) return t.end(err)
    code = String(code)

    t.notOk(code.includes('=>'), 'transpiles arrow functions')
    t.notOk(code.includes('`'), 'transpiles template literals')
    t.notOk(code.includes('`'), 'transpiles const assignments')
  })
})
