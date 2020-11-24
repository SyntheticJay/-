const _bot = require('../bot');
const { botserver } = require('../../config.json');

commands['players'] = function(data) {
    data.respond(`There are currently ${Object.keys(_bot.bot.players).length} player's online in ${botserver.host}.`);
}