# Chatbot
A Functional NodeJS Chatbot for Minecraft. ✨

## 💎 Setup 
In this repo there is a config.json file, this is provided to you have
a general basis of the bot's configuration, of course you will have to input 
your own information! Aswell as this, the `server/html` directory is empty. Please supply
your own HTML for your bot, the websocket emits the event 'chat' providing the username and message. Like this:

`{"username": "Kwengface", message: "Hey!"}`.

The websocket library used is socket.io, please refer to their documentation if you need help.

