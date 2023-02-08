// ==UserScript==
// @name            AO3 Show Kudos Ratio
// @namespace       https://github.com/MonoScyron/ao3-scripts
// @version         0.5.4
// @description     Shows kudos to hit ratio of a work as a stat. Can be toggled on and off.
// @author          MonoScyron
// @updateURL       https://raw.githubusercontent.com/MonoScyron/ao3-scripts/main/ao3-kudos-ratio-script.js
// @downloadURL     https://raw.githubusercontent.com/MonoScyron/ao3-scripts/main/ao3-kudos-ratio-script.js
// @match           https://archiveofourown.org/*
// @icon            https://archiveofourown.org/images/ao3_logos/logo_42.png
// @noframes
// ==/UserScript==

(function() {
    "use strict";
    // Create ratio elements for all works on page
    var ratio_dtList = [];
    var ratio_ddList = [];
    // Get list of works
    var workList = [];
    if(document.URL.split('/')[3] == "works") {
        workList = document.getElementsByClassName("work meta group"); // meta
    }
    else {
        document.querySelectorAll('.index.group .group[role="article"]:not([class*=series])').forEach((w) => {
            // Check if work is deleted
            if(w.querySelector('p.message') == null)
                workList.push(w);
        });
    }

    // Get list of work stats
    var statsList = [];
    if(document.URL.split('/')[3] == "works") {
        statsList = document.querySelectorAll("dl.stats");
    }
    else {
        statsList = document.querySelectorAll(".group[role='article']:not([class*=series]) dl.stats");
    }

    // Create list of ratio elements
    for(var i = 0; i < workList.length; i++) {
        var work = workList[i];

        // Get kudos & hits from work
        if(work.querySelector("dd.kudos") != null && work.querySelector("dd.hits") != null) {
            var ratio_dt = document.createElement("dt");
            ratio_dt.className = "ratio";
            ratio_dt.innerHTML = "Ratio:";

            var kudos;
            if(work.querySelector("dd.kudos").firstChild.nodeName == "A") {
                kudos = parseInt(work.querySelector("dd.kudos").firstChild.innerHTML);
            }
            else {
                kudos = parseInt(work.querySelector("dd.kudos").innerHTML);
            }
            var hits = parseInt(work.querySelector("dd.hits").innerHTML);

            var ratio_dd = document.createElement("dd");
            ratio_dd.className = "ratio";
            if(hits > 0) {
                ratio_dd.innerHTML = Math.round((kudos / hits) * 1000) / 10 + "%";
            }
            else {
                ratio_dd.innerHTML = "0";
            }

            ratio_dtList[i] = ratio_dt;
            ratio_ddList[i] = ratio_dd;
        }
        else {
            ratio_dtList[i] = null;
            ratio_ddList[i] = null;
        }
    }

    // Add ratio elements    
    for(var i = 0; i < statsList.length; i++) {
        if(ratio_dtList[i] != null && ratio_ddList[i] != null) {
            statsList[i].append(ratio_dtList[i], ratio_ddList[i]);
        }
    }
})();
