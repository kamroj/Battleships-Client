const communication = require('../game/communication-server-client');
const $ = require('jQuery');

let avaibleLanguagesMap; //Will be used in Sprint 4

let currentLanguage;

document.getElementById(`CHANGE_LANGUAGE`).onclick = () => {
    currentLanguage = getLanguageFromLocalStorage();
    console.log("klucz");
    console.log(Object.keys(avaibleLanguagesMap)[0]);
    var wartosc = avaibleLanguagesMap.EN;
    console.log("wartosc");
    console.log(wartosc);
    currentLanguage = currentLanguage === `en` ? `pl` : `en`;
    setLanguageInLocalStorage(currentLanguage);
    setLanguage(getLanguageFromLocalStorage());
}

document.getElementById(`LANGUAGE_COMBO_BOX`).onclick = () => {
    currentLanguage = $("#LANGUAGE_COMBO_BOX :selected").val();
    setLanguageInLocalStorage(currentLanguage);
    setLanguage(getLanguageFromLocalStorage());
}

function getAvaibleLanguages() {
    communication.get(`language`, "", result => {
        avaibleLanguagesMap = result;
    })
}

function setLanguage(language) {avaibleLanguagesMap
    communication.get(`language`, language, result => {
        console.log("set language");
        console.log(result);
        for (var key in result) {
            $(`#${key}`).html(`${result[key]}`);
        }
    })
}

function setLanguageInLocalStorage(currentLanguage){
    localStorage.setItem("currentLanguage", currentLanguage);
}

function getLanguageFromLocalStorage(){
   return localStorage.getItem("currentLanguage");
}

function displayLanguageComboBox(){
        var select = $("<select></select>").attr("type", "menu_enabled").attr("id", "LANGUAGE_COMBO_BOX").attr("name", "language");
        $.each(avaibleLanguagesMap,function(value, text){
            select.append($("<option></option>").attr("value", value).text(text));
        });     
        $("#LANGUAGE_COMBO_BOX").html(select);
 }

$(document).ready(() => {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    if (filename === "room-list.html"){
        currentLanguage = 'en';
         setLanguageInLocalStorage(currentLanguage);
    }
        getAvaibleLanguages();
        setLanguage(getLanguageFromLocalStorage());
        displayLanguageComboBox();
});
