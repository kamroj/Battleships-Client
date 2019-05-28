const theme = require('../theme-change-helper');
const fileFor = require('../keys')

document.getElementById(`CHANGE_COLOR`).onclick = () => {
    changeTheme();
}

function changeTheme() {
    if (theme.isDark()) {
        loadLightThemeSettings()
    } else {
        loadDarkThemeSettings()
    }
}

function loadLightThemeSettings() {
    theme.toggleCss("game-style", fileFor.lightThemeGame, false);
}

function loadDarkThemeSettings() {
    theme.toggleCss("game-style", fileFor.darkThemeGame, true);
}

function loadLightThemeSettingsWithoutTogging() {
    theme.loadCss("game-style", fileFor.lightThemeGame);
}

function loadDarkThemeSettingsWithoutTogging() {
    theme.loadCss("game-style", fileFor.darkThemeGame);
}

theme.isDark() ? loadDarkThemeSettingsWithoutTogging() : loadLightThemeSettingsWithoutTogging();