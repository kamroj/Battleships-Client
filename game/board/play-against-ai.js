const communication = require('../communication-server-client');
const player = require('../player/player');
const { remote } = require('electron');

document.getElementById('MENU_PLAY_VERSUS_AI').onclick = () => {
    startPlayingAgainstAi();
}

function startPlayingAgainstAi() {
    communication.post('playVersusAi', player.id(), result => {
        remote.getCurrentWindow().loadFile('game/game.html');
    })
}
