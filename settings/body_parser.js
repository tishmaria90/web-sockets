let bodyParser = require('body-parser');

module.parent.app.use(bodyParser.urlencoded());
module.parent.app.use(bodyParser.json());
