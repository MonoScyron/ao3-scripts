/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/ao3-comments-dropdown.ts ***!
  \**************************************/

// ==UserScript==
// @name                AO3 Comments Dropdown
// @namespace           https://github.com/MonoScyron/ao3-scripts
// @version             0.0.1
// @description         Dropdown button for random nice commments.
// @author              MonoScyron
// @updateURL           https://raw.githubusercontent.com/MonoScyron/ao3-scripts/main/ao3-comments-dropdown.js
// @downloadURL         https://raw.githubusercontent.com/MonoScyron/ao3-scripts/main/ao3-comments-dropdown.js
// @match               https://archiveofourown.org/works/*
// @match               https://archiveofourown.org/chapters/*
// @icon                https://archiveofourown.org/images/ao3_logos/logo_42.png
// @resource cJSON      https://raw.githubusercontent.com/MonoScyron/ao3-scripts/main/json/comments.json
// @grant               GM_getResourceText
// @noframes
// ==/UserScript==
(function () {
    'use strict';
    const COMMENTS = JSON.parse(GM_getResourceText("cJSON"));
    console.log(COMMENTS);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW8zLWNvbW1lbnRzLWRyb3Bkb3duLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FvMy1jb21tZW50cy1kcm9wZG93bi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuLy8gPT1Vc2VyU2NyaXB0PT1cclxuLy8gQG5hbWUgICAgICAgICAgICAgICAgQU8zIENvbW1lbnRzIERyb3Bkb3duXHJcbi8vIEBuYW1lc3BhY2UgICAgICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb25vU2N5cm9uL2FvMy1zY3JpcHRzXHJcbi8vIEB2ZXJzaW9uICAgICAgICAgICAgIDAuMC4xXHJcbi8vIEBkZXNjcmlwdGlvbiAgICAgICAgIERyb3Bkb3duIGJ1dHRvbiBmb3IgcmFuZG9tIG5pY2UgY29tbW1lbnRzLlxyXG4vLyBAYXV0aG9yICAgICAgICAgICAgICBNb25vU2N5cm9uXHJcbi8vIEB1cGRhdGVVUkwgICAgICAgICAgIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Nb25vU2N5cm9uL2FvMy1zY3JpcHRzL21haW4vYW8zLWNvbW1lbnRzLWRyb3Bkb3duLmpzXHJcbi8vIEBkb3dubG9hZFVSTCAgICAgICAgIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Nb25vU2N5cm9uL2FvMy1zY3JpcHRzL21haW4vYW8zLWNvbW1lbnRzLWRyb3Bkb3duLmpzXHJcbi8vIEBtYXRjaCAgICAgICAgICAgICAgIGh0dHBzOi8vYXJjaGl2ZW9mb3Vyb3duLm9yZy93b3Jrcy8qXHJcbi8vIEBtYXRjaCAgICAgICAgICAgICAgIGh0dHBzOi8vYXJjaGl2ZW9mb3Vyb3duLm9yZy9jaGFwdGVycy8qXHJcbi8vIEBpY29uICAgICAgICAgICAgICAgIGh0dHBzOi8vYXJjaGl2ZW9mb3Vyb3duLm9yZy9pbWFnZXMvYW8zX2xvZ29zL2xvZ29fNDIucG5nXHJcbi8vIEByZXNvdXJjZSBjSlNPTiAgICAgIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Nb25vU2N5cm9uL2FvMy1zY3JpcHRzL21haW4vanNvbi9jb21tZW50cy5qc29uXHJcbi8vIEBncmFudCAgICAgICAgICAgICAgIEdNX2dldFJlc291cmNlVGV4dFxyXG4vLyBAbm9mcmFtZXNcclxuLy8gPT0vVXNlclNjcmlwdD09XHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBjb25zdCBDT01NRU5UUyA9IEpTT04ucGFyc2UoR01fZ2V0UmVzb3VyY2VUZXh0KFwiY0pTT05cIikpO1xyXG4gICAgY29uc29sZS5sb2coQ09NTUVOVFMpO1xyXG59KSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=