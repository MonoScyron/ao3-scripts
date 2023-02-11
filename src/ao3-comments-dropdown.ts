(function () {
    'use strict';
    let tracery = require('tracery-grammar');
    let grammar = tracery.createGrammar(JSON.parse(GM_getResourceText("cJSON")));
    grammar.addModifiers(tracery.baseEngModifiers);

    const DROPDOWN_HTML = `
    <p class="footnote" style="margin-bottom: -15px;">
        <select name="nice-comment" id="nice-comment-dropdown">
            <option selected="selected" value="clear"></option>
            <option value="re_read">Re-read</option>
            <option value="love">Love</option>
        </select>
    </p>
    `;
    let dropdownWrap = document.createElement('p');
    dropdownWrap.innerHTML = DROPDOWN_HTML;
    dropdownWrap = dropdownWrap.firstElementChild as HTMLParagraphElement;
    let dropdown = dropdownWrap.firstElementChild as HTMLSelectElement;

    const COMMENT_INPUT = document.querySelector("textarea[id*='comment_content_for']") as HTMLTextAreaElement;
    dropdown.addEventListener('change', () => COMMENT_INPUT.value = grammar.flatten(`#${dropdown.value}#`).replace("  ", " "));

    let comment = document.querySelector("form.new_comment fieldset")!;
    comment.insertBefore(dropdownWrap, comment.children[3]);
})();