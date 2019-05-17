const { remote } = require('electron')

//TODO: Zoptymalizować odświeżanie
document.getElementById("MENU_REFRESH").onclick = () => {
    remote.getCurrentWindow().loadFile('game/room-list/room-list.html')
}