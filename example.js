const foo = () => 'hello world'

const string = foo`
  there
`

const bar = 'sup'

module.exports = [foo, string, bar]
