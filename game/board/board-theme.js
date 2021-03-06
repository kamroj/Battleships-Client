//importCHANGE_LANGUAGEs
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
    $('#game-style').attr("href", "game-style-light.css");
    isDarkTheme = false;
}

function loadDarkThemeSettings() {
    console.log("Load dark theme!");
    $('#game-style').attr("href", "game-style.css");
    isDarkTheme = true;
}
