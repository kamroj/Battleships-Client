const player = require('../player/player');
const communication = require('../communication-server-client');
const { remote } = require('electron')

/**
 * @RoomID will be used in sprint 4.
 */
let roomID;

document.getElementById("MENU_NEW_GAME").onclick = () => {
    communication.post(`createRoom`, player.id(), result => {
        roomID = result;
        remote.getCurrentWindow().loadFile('game/game.html')
        console.log(`Room id: ${roomID}`)
        localStorage.setItem("gameId", roomID);
    })
}
