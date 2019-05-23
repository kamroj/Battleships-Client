//importCHANGE_LANGUAGEs
const language = require('../../languages/language-menager');
const $ = require('jQuery');
const { dialog } = require('electron').remote

let isDarkTheme = true;
let epilepticInfoCounter = 0;

document.getElementById(`CHANGE_COLOR`).onclick = () => {
    changeTheme();
}

function changeTheme() {
    isDarkTheme ? loadLightThemeSettings() : loadDarkThemeSettings();
    epilepticInfo();
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

function epilepticInfo() {
    const options = {
        type: 'warning',
        buttons: [`${language.getTranslation('EPILEPSY_APPROVE')}`],
        defaultId: 2,
        title: `${language.getTranslation('EPILEPSY_WARNING')}`,
        message: `${language.getTranslation('EPILEPSY_INFO')}`
    };

    if (epilepticInfoCounter === 3) {
        dialog.showMessageBox(null, options);
        epilepticInfoCounter++;
    }
    else { 
        epilepticInfoCounter++;
    }
}
