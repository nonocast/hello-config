require('dotenv').config();
const config = require('config');
const debug = require('debug')('app');

debug(`NODE_ENV: ${process.env.NODE_ENV}`);
debug(config.get('foo'));
debug(config.foo);

debug(config.bar);
debug(process.env.TEST);