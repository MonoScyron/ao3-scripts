"use strict";
// ==UserScript==
// @name            AO3 Personal Bookmarking
// @namespace       https://github.com/MonoScyron/ao3-scripts
// @version         1.0.2
// @description     Personal bookmark formatting script, activates on pressing bookmark button.
// @author          MonoScyron
// @updateURL       https://raw.githubusercontent.com/MonoScyron/ao3-scripts/main/dist/ao3-personal-bookmarking.js
// @downloadURL     https://raw.githubusercontent.com/MonoScyron/ao3-scripts/main/dist/ao3-personal-bookmarking.js
// @match           https://archiveofourown.org/works/*
// @match           https://archiveofourown.org/chapters/*
// @icon            https://archiveofourown.org/images/ao3_logos/logo_42.png
// @noframes
// ==/UserScript==
(function () {
    'use strict';
    var _a;
    let autoAddBookmarks = function () {
        /* Auto-add some tags based on fic stats:
            - "oof" if fic isn't complete and hasn't been updated in 2 years
            - "bitesized" if fic is complete and is less than 10k words
        */
        let bookmarkTagInput = document.getElementById("bookmark_tag_string_autocomplete");
        let chapter = document.querySelector("dl.meta dl.stats dd.chapters").innerText.split("/");
        if (chapter[1] == "?" || chapter[0] != chapter[1]) {
            let date = new Date(document.querySelector("dl.meta dl.stats dd.status").innerText);
            let daysSince = (Date.now() - date.getTime()) / (1000 * 60 * 60 * 24);
            if (daysSince > 731) {
                bookmarkTagInput.value = "oof";
                bookmarkTagInput.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
            }
        }
        else {
            let wordCount = parseInt(document.querySelector("dl.meta dl.stats dd.words").innerText);
            if (wordCount < 10000) {
                bookmarkTagInput.value = "bitesized";
                bookmarkTagInput.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
            }
        }
    };
    let displayPersonalTags = function () {
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
    };
    let newBookmark = function (title, author, fandom) {
        // Open bookmarks editor
        document.getElementsByClassName("bookmark_form_placement_open")[0].click();
        // Input formatted notes
        let bookmarkInput = document.querySelector("fieldset #bookmark_notes");
        bookmarkInput.value = `${title.trim()} by ${author.trim()} [${fandom.trim()}]`;
        displayPersonalTags();
        autoAddBookmarks();
    };
    let editBookmark = function () {
        displayPersonalTags();
    };
    let fandom = document.querySelector('dl.work.meta.group dd.fandom.tags a[href]').innerText;
    let title = document.querySelector("#workskin div.preface.group h2.title.heading").innerText;
    let author = document.querySelector("#workskin div.preface.group h3.byline.heading").innerText;
    // If fic is not currently bookmarked
    if (!((_a = document.querySelector("a.bookmark_form_placement_open:not([style])")) === null || _a === void 0 ? void 0 : _a.innerHTML.includes("Edit"))) {
        document.querySelectorAll("ul.actions a.bookmark_form_placement_open").forEach((e) => {
            e.addEventListener("click", () => newBookmark(title, author, fandom));
        });
    }
    else {
        document.querySelectorAll("ul.actions a.bookmark_form_placement_open").forEach((e) => {
            e.addEventListener("click", () => editBookmark());
        });
    }
})();
