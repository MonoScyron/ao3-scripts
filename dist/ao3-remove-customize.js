"use strict";
// ==UserScript==
// @name            AO3 Remove Customize
// @namespace       https://github.com/MonoScyron/ao3-scripts
// @version         1.0.0
// @description     Hides the "Customize" section in the footer.
// @author          MonoScyron
// @updateURL       https://raw.githubusercontent.com/MonoScyron/ao3-scripts/main/dist/ao3-remove-customize.js
// @downloadURL     https://raw.githubusercontent.com/MonoScyron/ao3-scripts/main/dist/ao3-remove-customize.js
// @match           https://archiveofourown.org/*
// @icon            https://archiveofourown.org/images/ao3_logos/logo_42.png
// @noframes
// ==/UserScript==
(function () {
    'use strict';
    let footer = document.querySelector("#footer ul.navigation.actions");
    let hideSection = footer.querySelector("li");
    footer.setAttribute("style", "justify-content: center; display: flex;");
    hideSection === null || hideSection === void 0 ? void 0 : hideSection.setAttribute("style", "display:none");
})();
