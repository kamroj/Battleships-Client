//importCHANGE_LANGUAGEs
const $ = require('jQuery');

let isDarkTheme = true;

document.getElementById(`button_change_color`).onclick = () => {
    changeTheme();
}

function changeTheme() {
    isDarkTheme ? loadLightThemeSettings() : loadDarkThemeSettings();
}

function loadLightThemeSettings() {
    console.log("Load light theme!");
    $('#room-list-style').attr("href", "room-list-style-light.css");
    isDarkTheme = false;
}

function loadDarkThemeSettings() {
    console.log("Load dark theme!");
    $('#room-list-style').attr("href", "room-list-style.css");
    isDarkTheme = true;
}
