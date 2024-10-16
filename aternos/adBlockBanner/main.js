// ==UserScript==
// @name         Aternos AutoClick Continue
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Aternos AutoClick Continue
// @author       github.com/mrksbgg
// @match        https://aternos.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=aternos.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function clickContinueButton() {
        const button = document.querySelector('.btn.btn-white.QfUrVYMsDYol');

        if (button) {
            button.click();
        }
    }

    setInterval(clickContinueButton, 100);
})();
