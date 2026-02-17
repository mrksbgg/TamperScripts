// ==UserScript==
// @name         Clean trash in Yandex.Market URLs
// @namespace    https://market.yandex.ru/
// @version      1.0
// @description  Удаляет длинные параметры после ID товара на страницах Маркета
// @author       t.me/steamhvh
// @match        https://market.yandex.ru/card/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function cleanUrl() {
        const url = new URL(location.href);
        if (url.search) {
            history.replaceState(null, '', url.origin + url.pathname);
        }
    }

    const _pushState = history.pushState;
    const _replaceState = history.replaceState;

    history.pushState = function () {
        _pushState.apply(this, arguments);
        cleanUrl();
    };

    history.replaceState = function () {
        _replaceState.apply(this, arguments);
        cleanUrl();
    };

    window.addEventListener('popstate', cleanUrl);

    cleanUrl();
})();
