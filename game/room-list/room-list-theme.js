const theme = require('../helpers/theme-change-helper');

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
    theme.toggleCss("room-list-style", "room-list-style-light.css", false);
}

function loadDarkThemeSettings() {
    theme.toggleCss("room-list-style", "room-list-style.css", true);
}

function loadLightThemeSettingsWithoutTogging() {
    theme.loadCss("room-list-style", "room-list-style-light.css");
}

function loadDarkThemeSettingsWithoutTogging() {
    theme.loadCss("room-list-style", "room-list-style.css");
}

theme.isDark() ? loadDarkThemeSettingsWithoutTogging() : loadLightThemeSettingsWithoutTogging();