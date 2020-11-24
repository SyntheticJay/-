const _bot = require('../bot');

commands['near'] = function(data) {
    const target = data.getTarget();
    data.respond(`I am ${(target.entity === null ? "not near" : "near")} ${target.username}.`);
}