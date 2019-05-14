//imports
const $ = require('jQuery');

let isDarkTheme = true;

document.getElementById(`CHANGE_COLOR`).onclick = () => {
    changeTheme();
}

function changeTheme() {
    isDarkTheme ? loadLightThemeSettings() : loadDarkThemeSettings();
}

function loadLightThemeSettings() {
    console.log("Load light theme!");
    $('body').css({
        'background': '#eeeded'
    })

    $('button').css({
        'color': 'black',
        'border': '1px solid black'
    })
    isDarkTheme = false;
}

function loadDarkThemeSettings() {
    console.log("Load dark theme!");
    $('body').css({
        'background': '#151519'
    })

    $('button').css({
        'color': '#ccc',
        'border': '1px solid #045bbe'
    })
    isDarkTheme = true;
}
