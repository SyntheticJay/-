const _bot = require('../bot');
const commandHandler = require('../commands');

const ws = require('../../server/ws');
const socket = require('socket.io').listen(ws.http);

require('../commands/insult');
require('../commands/quran');
require('../commands/urban');
require('../commands/players');
require('../commands/ping');
require('../commands/near');
require('../commands/help');

exports.handleChat = function(username, message) {
    //emit message to websocket
    socket.emit("chat", {'username': username, 'message': message});

    if (username === _bot.bot.username) return;

    //handle command
    commandHandler.handleCommand(username, message);
}