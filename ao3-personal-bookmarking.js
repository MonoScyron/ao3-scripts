// ==UserScript==
// @name            AO3 Personal Bookmarking
// @namespace       https://github.com/MonoScyron/ao3-scripts
// @version         0.0.2
// @description     Personal bookmark formatting script, activates on pressing kudos button.
// @author          MonoScyron
// @updateURL       https://raw.githubusercontent.com/MonoScyron/ao3-scripts/main/ao3-personal-bookmarking.js
// @downloadURL     https://raw.githubusercontent.com/MonoScyron/ao3-scripts/main/ao3-personal-bookmarking.js
// @match           https://archiveofourown.org/works/*
// @icon            https://archiveofourown.org/images/ao3_logos/logo_42.png
// @noframes
// ==/UserScript==

(function() {
    'use strict';
    let inputBookmark = function() {
        let fandom = document.querySelector('dl.work.meta.group dd.fandom.tags a[href]').innerText;
        let title = document.querySelector("#workskin div.preface.group h2.title.heading").innerText;
        let author = document.querySelector("#workskin div.preface.group h3.byline.heading").innerText;

        // Open bookmarks editor & input formatted notes
        document.getElementsByClassName("bookmark_form_placement_open")[0].click();
        let bookmarkInput = document.querySelector("fieldset #bookmark_notes");
        bookmarkInput.value = `${title} by ${author} [${fandom}]\n\nsum`;
    }

    // If fic is not currently bookmarked
    if(!document.querySelector("a.bookmark_form_placement_open:not([style])").innerHTML.includes("Edit"))
        document.getElementById("new_kudo").addEventListener("click", inputBookmark);
})();