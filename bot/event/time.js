const _bot = require('../bot');
const spawn = require('./spawn');

const { antiafk } = require('../../config.json');
const actions = ['forward', 'back', 'left', 'right']
const pi = 3.14159;

let lastAction;
let lastTime = -1;
let moving = 0;

exports.handleTime = function() {
    // Anti AFK
    if(lastTime < 0) {
        lastTime = _bot.bot.time.age;
    }else {
        const randomAdd = Math.random() * antiafk.maxRandom * 20;
        const interval = antiafk.moveInterval * 20 + randomAdd;

        if (_bot.bot.time.age - lastTime > interval) {
            if (moving === 1) {
                _bot.bot.setControlState(lastAction, false);
                moving = 0;
                lastTime = _bot.bot.time.age;
            } else {
                const yaw = Math.random() * pi - (0.5 * pi);
                const pitch = Math.random() * pi - (0.5 * pi);
                _bot.bot.look(yaw, pitch, false);

                lastAction = actions[Math.floor(Math.random() * actions.length)];
                _bot.bot.setControlState(lastAction, true);
                moving = 1;
                lastTime = _bot.bot.time.age;
                _bot.bot.activateItem();
            }
        }
    }
}