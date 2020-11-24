const { insults } = require('../../config.json');
const utils = require('../utils');

commands['insult'] = function(data) {
    let insult = insults[utils.randomInt(0, insults.length)].replace('%p', data.getTarget().username);
    data.respond(insult);
}
