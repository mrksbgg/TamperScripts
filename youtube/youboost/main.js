// ==UserScript==
// @name         Remove YouBoost Ad under video title
// @namespace    http://tampermonkey.net/
// @version      2024-03-04
// @description  Remove YouBoost Ad under video title
// @author       github.com/mrksbgg
// @match        https://*.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const checkAndRemoveAd = () => {
        const ad = document.querySelector('#youboost-ad-premium-banner-root');
        if (ad) {
            ad.remove();
            clearInterval(intervalId);
            console.log('YouBoost ad removed!');
        }
    };

    const intervalId = setInterval(checkAndRemoveAd, 1);
})();
