const _bot = require('../bot');
const utils = require('../utils');

commands['ping'] = function(data) {
    let target = data.getTarget();
    data.respond(`${target.username} has a ping of ${target.ping}.`);
}