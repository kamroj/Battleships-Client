const { remote } = require('electron')

//TODO: Zoptymalizować odświeżanie
document.getElementById("button_refresh").onclick = () => {
    remote.getCurrentWindow().loadFile('game/room-list/room-list.html')
}