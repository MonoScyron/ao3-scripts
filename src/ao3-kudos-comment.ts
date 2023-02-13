(function () {
    'use strict';
    let tracery = require('tracery-grammar');
    let grammar = tracery.createGrammar(JSON.parse(GM_getResourceText("cJSON")));
    grammar.addModifiers(tracery.baseEngModifiers);

    const COMMENT_INPUT = document.querySelector("textarea[id*='comment_content_for']") as HTMLTextAreaElement;
    let kudos_msg = document.getElementById("kudos_message")
    kudos_msg?.addEventListener('DOMAttrModified', () => {
        if (kudos_msg!.classList.contains("kudos_error")) {
            COMMENT_INPUT.value = grammar.flatten(`#re_read#`).replace("  ", " ")
        }
    });
})();