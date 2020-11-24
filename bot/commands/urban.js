const urban = require('urban');

commands['urban'] = function(data) {
    if(data.message === '')return;

    console.log(data.message);
    urban(data.message).first(function(json) {
        if(!json) {
            data.respond("I could not fucking find that, dirty muslim.");
            return;
        }
        data.respond(json.word + ": " + json.definition);
    });
}