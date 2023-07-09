"use strict";
// ==UserScript==
// @name            AO3 Remove Mute Banner
// @namespace       https://github.com/MonoScyron/ao3-scripts
// @version         1.1.0
// @description     Hides the "Muted Users" banner on the top of the page.
// @author          MonoScyron
// @updateURL       https://raw.githubusercontent.com/MonoScyron/ao3-scripts/main/dist/ao3-remove-mute-banner.js
// @downloadURL     https://raw.githubusercontent.com/MonoScyron/ao3-scripts/main/dist/ao3-remove-mute-banner.js
// @match           https://archiveofourown.org/*
// @icon            https://archiveofourown.org/images/ao3_logos/logo_42.png
// @noframes
// @run-at          document-start
// ==/UserScript==
(function () {
    'use strict';
    let style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.classList.add('ao3-script-style');
    style.innerHTML = '#main p.muted.notice { display: none }';
    document.head.appendChild(style);
})();
