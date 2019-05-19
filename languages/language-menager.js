const communication = require('../game/communication-server-client');
const $ = require('jQuery');

let avaibleLanguagesMap; //Will be used in Sprint 4

let currentLanguage;

document.getElementById(`CHANGE_LANGUAGE`).onclick = () => {
    currentLanguage = getLanguageFromLocalStorage();
    console.log("Blee ");
    console.log(currentLanguage);
    currentLanguage = currentLanguage === `en` ? `pl` : `en`;
    setLanguageInLocalStorage(currentLanguage);
    setLanguage(getLanguageFromLocalStorage());
    console.log("Blee 2");
    console.log(currentLanguage);
}

function getAvaibleLanguages() {
      
    communication.get(`language`, "", result => {
        console.log("getAvaibleLanguages");
        avaibleLanguagesMap = result;
        console.log(avaibleLanguagesMap);
    
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

function domek(){
    var json = {EN: "English", PL: "Polski"};
    console.log("DOMEK");
    console.log(avaibleLanguagesMap);
      
        var select = $("<select></select>").attr("id", "languageComboBox").attr("name", "language");
        $.each(avaibleLanguagesMap,function(value, text){
            select.append($("<option></option>").attr("value", value).text(text));
        });     
        $("#container").html(select);
   
   
    
 }

$(document).ready(() => {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    if (filename === "room-list.html"){
         setLanguageInLocalStorage(`en`);
    }
        getAvaibleLanguages();
        setLanguage(getLanguageFromLocalStorage());
        domek();
});
