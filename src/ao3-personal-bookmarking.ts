// ==UserScript==
// @name            AO3 Personal Bookmarking
// @namespace       https://github.com/MonoScyron/ao3-scripts
// @version         1.0.3
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
    let autoAddBookmarks = function () {
        /* Auto-add some tags based on fic stats:
            - "oof" if fic isn't complete and hasn't been updated in 2 years
            - "bitesized" if fic is complete and is less than 10k words
        */
        let bookmarkTagInput = document.getElementById("bookmark_tag_string_autocomplete") as HTMLInputElement;
        let chapter = (document.querySelector("dl.meta dl.stats dd.chapters") as HTMLElement).innerText.split("/");
        if(chapter[1] == "?" || chapter[0] != chapter[1]) {
            let date = new Date((document.querySelector("dl.meta dl.stats dd.status") as HTMLElement).innerText);
            let daysSince = (Date.now() - date.getTime()) / (1000 * 60 * 60 * 24);
            if(daysSince > 731) {
                bookmarkTagInput.value = "oof";
                bookmarkTagInput.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
            }
        }
        else {
            let wordCount = parseInt((document.querySelector("dl.meta dl.stats dd.words") as HTMLElement).innerText.replace(/[^0-9]/g, ''));
            if(wordCount < 10000) {
                bookmarkTagInput.value = "bitesized";
                bookmarkTagInput.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
            }
        }
    }

    let displayPersonalTags = function () {
        // Display personal bookmark tags under bookmark input
        const bookmarkTags = [" read for fluff", " read for pain", " read for big brain takes",
            " read for character", " read for spicy", " bitesized", " rotating...", " oof"];
        let bookmarkTagDisplayHTML = `<span class=" LV_validation_message LV_invalid">
            ${bookmarkTags}
        </span>`;

        let bookmarkTagDisplay = document.createElement('div');
        bookmarkTagDisplay.innerHTML = bookmarkTagDisplayHTML;
        bookmarkTagDisplay = bookmarkTagDisplay.firstChild as HTMLDivElement;
        document.querySelector("#bookmark-form ul.autocomplete")!.appendChild(bookmarkTagDisplay);
    }

    let newBookmark = function (title: string, author: string, fandom: string) {
        // Open bookmarks editor
        (document.getElementsByClassName("bookmark_form_placement_open")[0] as HTMLButtonElement).click();

        // Input formatted notes
        let bookmarkInput = document.querySelector("fieldset #bookmark_notes") as HTMLInputElement;
        bookmarkInput.value = `${title.trim()} by ${author.trim()} [${fandom.trim()}]`;

        displayPersonalTags();
        autoAddBookmarks();
    }

    let editBookmark = function () {
        displayPersonalTags();
    }

    let fandom = (document.querySelector('dl.work.meta.group dd.fandom.tags a[href]') as HTMLElement).innerText;
    let title = (document.querySelector("#workskin div.preface.group h2.title.heading") as HTMLElement).innerText;
    let author = (document.querySelector("#workskin div.preface.group h3.byline.heading") as HTMLElement).innerText;

    // If fic is not currently bookmarked
    if(!document.querySelector("a.bookmark_form_placement_open:not([style])")?.innerHTML.includes("Edit")) {
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