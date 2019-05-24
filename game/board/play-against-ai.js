const communication = require('../communication-server-client');
const player = require('../player/player');
const { remote } = require('electron');

document.getElementById('MENU_PLAY_VERSUS_AI').onclick = () => {
    startPlayingAgainstAi();
}

/**
 * Send request to server with player id to lunch game against AI. 
 */
function startPlayingAgainstAi() {
    communication.post('playVersusAi', player.id(), result => {
        localStorage.setItem("gameId", result);
        remote.getCurrentWindow().loadFile('game/game.html');
    })
}