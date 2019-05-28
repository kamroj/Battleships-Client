const language = require('../languages/language-manager');
const { dialog } = require('electron').remote
const $ = require('jQuery');

let isDarkTheme = localStorage.getItem("isDarkTheme");
if (isDarkTheme === null) {
    saveThemeInLocalStorage(true);
}

let epilepticInfoCounter = 0;

function saveThemeInLocalStorage(isDark) {
    localStorage.setItem("isDarkTheme", isDark);
}

function loadCssToElement(withId, cssFile, isDark) {
    $(`#${withId}`).attr("href", `${cssFile}`);
    saveThemeInLocalStorage(isDark);
    epilepticInfo();
}

function epilepticInfo() {
    const options = {
        type: 'warning',
        buttons: [`${language.getTranslation('EPILEPSY_APPROVE')}`],
        defaultId: 2,
        title: `${language.getTranslation('EPILEPSY_WARNING')}`,
        message: `${language.getTranslation('EPILEPSY_INFO')}`
    };

    epilepticInfoCounter++;
    if (epilepticInfoCounter === 5) {
        dialog.showMessageBox(null, options);
        epilepticInfoCounter = 0;
    }
}

module.exports = {
    isDark: () => {
        return JSON.parse(localStorage.getItem("isDarkTheme"));
    },
    toggleCss: (withId, cssFile, choosenDarkTheme) => {
        loadCssToElement(withId, cssFile, choosenDarkTheme);
    },
    loadCss: (withId, cssFile) => {
        $(`#${withId}`).attr("href", `${cssFile}`);
    }
}