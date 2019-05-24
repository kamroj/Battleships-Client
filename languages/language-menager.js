const communication = require('../game/communication-server-client');
const $ = require('jQuery');

if (localStorage.getItem("currentLanguage") === null) {
    localStorage.setItem("currentLanguage", `en`);
}

document.getElementById(`CHANGE_LANGUAGE`).onclick = () => {
    if (localStorage.getItem("currentLanguage") === `en`)
        localStorage.setItem("currentLanguage", `pl`)
    else
        localStorage.setItem("currentLanguage", `en`)
    setLanguage(localStorage.getItem("currentLanguage"));
}

function setLanguage(language) {
    communication.get(`language`, language, result => {
        for (var key in result) {
            $(`#${key}`).html(`${result[key]}`);
            $(`.${key}`).html(`${result[key]}`);
        }
        //zapisanie języków do pamięci
        localStorage.setItem("currentLanguageMap", JSON.stringify(result));
    })
}

$(document).ready(() => {
    setLanguage(localStorage.getItem("currentLanguage"));
});

function getTranslation(key) {
    let languageMap = JSON.parse(localStorage.getItem("currentLanguageMap"));
    for (var k in languageMap) {
        if (k === key)
            return languageMap[key];
    }
    return 'KEY_NOT_FOUND'
}

module.exports = {
    getTranslation: (key => {
        return getTranslation(key);
    })
}