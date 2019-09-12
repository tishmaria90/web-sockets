let session = require('express-session');

module.parent.app.use(session({
    secret: 'learning sockets',
}));
