const player = require('../player/player');
const communication = require('../communication-server-client');
const { remote } = require('electron')

let roomID;

document.getElementById("MENU_NEW_GAME").onclick = () => {
    communication.post(`createRoom`, player.id(), result => {
        roomID = result;
        remote.getCurrentWindow().loadFile('game/game.html')
        console.log(`Room id: ${roomID}`)
    })
}
