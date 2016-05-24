const through = require('through2')
const babel = require('babel-core')

const templateLiterals = require('babel-plugin-transform-es2015-template-literals')
const arrowFunctions = require('babel-plugin-transform-es2015-arrow-functions')
const blockScoping = require('babel-plugin-transform-es2015-block-scoping')
const checkConstants = require('babel-plugin-check-es2015-constants')

module.exports = es2020

// In hindsight we can do without most of ES6
// (str, obj) -> transformStream
function es2020 (filename, options) {
  const bufs = []
  const transformStream = through(write, end)
  return transformStream

  function write (buf, enc, next) {
    bufs.push(buf)
    next()
  }

  function end () {
    const src = Buffer.concat(bufs).toString('utf8')
    const res = babel.transform(src, {
      plugins: [
        checkConstants,
        templateLiterals,
        arrowFunctions,
        blockScoping
      ]
    })
    this.push(res.code)
    this.push(null)
  }
}
