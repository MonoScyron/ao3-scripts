// ==UserScript==
// @name            AO3 Remove Mute Banner
// @namespace       https://github.com/MonoScyron/ao3-scripts
// @version         1.0.0
// @description     Hides the "Muted Users" banner on the top of the page.
// @author          MonoScyron
// @updateURL       https://raw.githubusercontent.com/MonoScyron/ao3-scripts/main/dist/ao3-remove-mute-banner.js
// @downloadURL     https://raw.githubusercontent.com/MonoScyron/ao3-scripts/main/dist/ao3-remove-mute-banner.js
// @match           https://archiveofourown.org/*
// @icon            https://archiveofourown.org/images/ao3_logos/logo_42.png
// @noframes
// ==/UserScript==

(function() {
    'use strict';
    let hideSection = document.querySelector('#main p.muted.notice')
    hideSection?.setAttribute("style", "display:none");
})();
