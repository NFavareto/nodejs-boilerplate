const vars = require('./config/vars')
const server = require('./config/server')
server.listen(vars.port)

module.exports = server