let server = require('http').Server(module.parent.app);
let io = require('socket.io')(server);

server.listen(3000);

module.exports = io;
