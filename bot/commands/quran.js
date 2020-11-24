const request = require('request');
const utils = require('../utils');

commands['quran'] = function(data) {
    function retrieveVerse(verse) {
        const url = 'http://api.alquran.cloud/ayah/'+ verse.toString() +'/editions/quran-uthmani,en.pickthall';
        request(url, function(err, response, body) {
            const res = JSON.parse(body);
            const en = res.data[1].text;
            data.respond(en);
        });
    }
    let r = utils.randomInt(0, 6237);
    retrieveVerse(r);
}