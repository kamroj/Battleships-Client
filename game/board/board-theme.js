const theme = require('../theme-change-helper');

console.log("Wczytanie js board theme")

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
    theme.toggleCss("game-style", "game-style-light.css", false);
}

function loadDarkThemeSettings() {
    theme.toggleCss("game-style", "game-style.css", true);
}

function loadLightThemeSettingsWithoutTogging() {
    theme.loadCss("game-style", "game-style-light.css");
}

function loadDarkThemeSettingsWithoutTogging() {
    theme.loadCss("game-style", "game-style.css");
}

theme.isDark() ? loadDarkThemeSettingsWithoutTogging() : loadLightThemeSettingsWithoutTogging();