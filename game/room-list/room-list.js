const $ = require('jQuery');
const player = require('../player/player');
const communication = require('../communication-server-client');
const { remote } = require('electron')

let roomsList;

getRoomsList();

setTimeout(() => {
    createRoomList()
    loadRoomListeners();
}, 1)


function getRoomsList() {
    communication.getWithoutRequest(`rooms`, result => {
        roomsList = result;
    })
    console.log(`ID GRACZA:: ${player.id()}`)
}

function createRoomList() {
    roomsList.forEach(roomId => {
        let button = document.createElement("button");
        let buttonDiv = document.getElementById("sub_div_buttons_column");

        button.innerHTML = "Pokój: " + roomId;
        button.id = roomId;
        button.className = `ROOMS`;
        button.type = `list_enabled`;

        buttonDiv.appendChild(button);
    })
};

function loadRoomListeners() {
    $('.ROOMS').click(function () {
        let body = `playerId=${player.id()}&roomId=${this.id}`;
        communication.postUrlEncoded(`joinRoom`, body, result => {
            remote.getCurrentWindow().loadFile('game/game.html')
        })
    });
}
