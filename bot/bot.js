const mineflayer = require('mineflayer');

// events
const spawn = require('./event/spawn');
const chat = require('./event/chat');
const time = require('./event/time');

const { authentication, botserver } = require('../config.json');

function connect() {
    let bot = mineflayer.createBot({
        username: authentication.email,
        password: authentication.password,
        host: botserver.host,
        port: botserver.port,
        version: botserver.version
    });

    bot.on('spawn', spawn.handleSpawn);
    bot.on('chat', chat.handleChat);
    bot.on('time', time.handleTime);

    bot.on('kicked', (reason) => {
        console.log(`Bot kicked for ${reason}, attempting reconnect...`);
        connect();
    });

    bot.on('error', (err) => console.log(`Bot error: ${err}`));

    exports.bot = bot;
}
connect();