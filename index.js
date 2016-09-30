require('./coreSource/createComponent');
let RouterConfig = require('./coreSource/createRouter');

// let RouterConfig = require('./config/router');
let Entry = require('./coreSource/createEntry');
// Entry(RouterConfig)

window.frameInit(Entry, RouterConfig);