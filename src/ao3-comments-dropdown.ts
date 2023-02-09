(function () {
    'use strict';
    let tracery = require('tracery-grammar');
    let grammar = tracery.createGrammar(JSON.parse(GM_getResourceText("cJSON")));
    grammar.addModifiers(tracery.baseEngModifiers);
    console.log(grammar.flatten("ao3ex: #origin#"));
})();