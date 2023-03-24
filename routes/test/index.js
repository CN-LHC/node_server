var render = require('./render')
var users = require('./users')

function test(app) {
    app.use('/', render)
    app.use('/users', users)
}
module.exports = test