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
    theme.toggleCss("room-list-style", fileFor.lightThemeRoomList, false);
}

function loadDarkThemeSettings() {
    theme.toggleCss("room-list-style", fileFor.darkThemeRoomList, true);
}

function loadLightThemeSettingsWithoutTogging() {
    theme.loadCss("room-list-style", fileFor.lightThemeRoomList);
}

function loadDarkThemeSettingsWithoutTogging() {
    theme.loadCss("room-list-style", fileFor.darkThemeRoomList);
}

theme.isDark() ? loadDarkThemeSettingsWithoutTogging() : loadLightThemeSettingsWithoutTogging();