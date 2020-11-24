const _bot = require('../bot');
const {botserver, joinmessage} = require('../../config.json');

exports.handleSpawn = function() {
    _bot.bot.chat(joinmessage);
    console.log(`Connected to ${botserver.host}:${botserver.port}`);
}