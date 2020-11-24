const _bot = require('../bot/bot');
const { prefix, commandRate } = require('../config.json');

global.commands = {}

const ratelimited = {}
function handleCommand(username, message) {
    if(username in ratelimited) return;
    ratelimited[username] = true;
    setTimeout(function() {
        delete ratelimited[username];
    }, commandRate);

    // admin check later
    if(!message.startsWith(prefix)) return;

    let r = message.trim().substring(1).trim();
    let command = r.includes(" ") ? r.split(" ")[0] : r.trim();

    let msg = r.substr(command.length).trim();

    if(command in commands)
        commands[command]({
        username: username,
        message: msg,
        respond: function(text) {
            _bot.bot.chat(`>${text}`);
        },
        getTarget: function() {
            //retrieve target from 2nd arg
            //not sure about this function's efficiency
            let target = _bot.bot.players[msg.split(" ")[0]];
            if(target === null || target === undefined) {
                target = _bot.bot.players[username];
            }
            return target;
        }
    });
}


exports.handleCommand = handleCommand;