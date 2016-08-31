const preset = require('babel-preset-es2020')
const through = require('through2')
const babel = require('babel-core')

module.exports = es2020

// In hindsight we can do without most of ES6
// (str, obj) -> transformStream
function es2020 (filename, options) {
  if (/\.json$/i.test(filename)) return through()
  const bufs = []
  const transformStream = through(write, end)
  return transformStream

  function write (buf, enc, next) {
    bufs.push(buf)
    next()
  }

  function end () {
    const src = Buffer.concat(bufs).toString('utf8')
    try {
      var res = babel.transform(src, {
        plugins: preset.plugins,
        sourceMaps: options._flags.debug ? 'inline' : false,
        filename: filename,
        compact: false
      })
    } catch (err) {
      this.emit('error', err)
      return
    }
    this.push(res.code)
    this.push(null)
  }
}
