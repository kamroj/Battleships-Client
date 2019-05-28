const player = require('../player/player');
const communication = require('../helpers/communication-server-client');
const { remote } = require('electron')

document.getElementById("MENU_NEW_GAME").onclick = () => {
    communication.post(`createRoom`, player.id(), roomID => {
        remote.getCurrentWindow().loadFile('game/game.html')
        localStorage.setItem("gameId", roomID);
    })
}
