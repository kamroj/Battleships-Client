const communication = require('../game/communication-server-client');

const $ = require('jQuery');

let avaibleLanguagesMap; //Map<skrót języka, nazwa języka>
let languageMap; //Map<klucz, wartość>

let currentLanguage = `en`;

document.getElementById(`CHANGE_LANGUAGE`).onclick = () => {
    currentLanguage = currentLanguage === `en` ? `pl` : `en`;
    setLanguage(currentLanguage);
}

function getAvaibleLanguages() {
    communication.get(`language`, "", result => {
        avaibleLanguagesMap = result;
    })
}

function setLanguage(language) {
    communication.get(`language`, language, result => {
        for (var key in result) {
            $(`#${key}`).html(`${result[key]}`);
        }
    })
}

$(document).ready(() => {
        getAvaibleLanguages();
        setLanguage(currentLanguage);
});
