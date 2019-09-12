/* SETTINGS */
require('dotenv').config();
module.app = require(__dirname + '/settings/express');
module.io = require(__dirname + '/settings/socket');
let connection = require(__dirname + '/settings/connection');
connection.open();
require(__dirname + '/settings/session');
require(__dirname + '/settings/body_parser');


module.api = require(__dirname + '/api');

require(__dirname + '/routes');

require(__dirname + '/socket_events');
