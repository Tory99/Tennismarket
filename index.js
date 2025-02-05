let server = require('./server.js');
let router = require('./router.js');
let requesthandler = require('./requesthandler.js');

const mariadb = require('./database/connect/mariadb.js');
mariadb.connect();

server.start(router.route, requesthandler.handle);