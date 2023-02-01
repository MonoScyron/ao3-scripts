// ==UserScript==
// @name            AO3 Personal Bookmarking
// @namespace       https://github.com/MonoScyron/ao3-scripts
// @version         0.0.8
// @description     Personal bookmark formatting script, activates on pressing bookmark button.
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

        // Open bookmarks editor
        document.getElementsByClassName("bookmark_form_placement_open")[0].click();

        // Input formatted notes
        let bookmarkInput = document.querySelector("fieldset #bookmark_notes");
        bookmarkInput.value = `${title.trim()} by ${author.trim()} [${fandom.trim()}]`;

        // Display personal bookmark tags under bookmark input
        const bookmarkTags = [" read for fluff", " read for pain", " read for big brain takes",
            " read for character", " read for spicy", " bitesized", " rotating...", " oof"];
        let bookmarkTagDisplayHTML = `<span class=" LV_validation_message LV_invalid">
            ${bookmarkTags}
        </span>`;

        let bookmarkTagDisplay = document.createElement('div');
        bookmarkTagDisplay.innerHTML = bookmarkTagDisplayHTML;
        bookmarkTagDisplay = bookmarkTagDisplay.firstChild;

        document.querySelector("#bookmark-form ul.autocomplete").appendChild(bookmarkTagDisplay);
    }

    // If fic is not currently bookmarked
    if(!document.querySelector("a.bookmark_form_placement_open:not([style])").innerHTML.includes("Edit")) {
        document.querySelectorAll("ul.actions a.bookmark_form_placement_open").forEach((e) => {
            e.addEventListener("click", inputBookmark);
        });
    }
})();