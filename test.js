const test = require('tape')
const browserify = require('browserify')
const sourceMap = require('convert-source-map')
const fs = require('fs')
const path = require('path')
const es2020 = require('./')

test('transpilation', function (t) {
  t.plan(4)

  browserify()
    .add('example.js')
    .transform(es2020)
    .bundle(function (err, code) {
      if (err) return t.end(err)
      code = String(code)

      t.notOk(code.includes('=>'), 'transpiles arrow functions')
      t.notOk(code.includes('`'), 'transpiles template literals')
      t.notOk(code.includes('`'), 'transpiles const assignments')
      t.notOk(code.includes('sourceMap'), 'does not build source maps by default')
    })
})

test('source maps', function (t) {
  t.plan(1)

  browserify({
    debug: true
  })
  .add('example.js')
  .transform(es2020)
  .bundle(function (err, code) {
    if (err) return t.end(err)
    code = String(code)

    const data = sourceMap.fromSource(code)
    const original = data.getProperty('sourcesContent')[1]

    t.equal(original, fs.readFileSync(path.resolve(__dirname, 'example.js'), 'utf8'))
  })
})

test('handle errors', function (t) {
  t.plan(1)

  browserify({
    debug: true
  })
  .add('LICENSE')
  .transform(es2020)
  .bundle(function (err, code) {
    t.ok(err, 'handles error')
  })
})
