const $ = require('jQuery');
const player = require('../player/player');
const communication = require('../communication-server-client');

let roomsList;

$(document).ready(() => {
    setTimeout(() => {
        getRoomsList();
        createRoomList();
        loadRoomListeners();
    }, 1)
})

function getRoomsList() {
    communication.getWithoutRequest(`rooms`, result => {
        roomsList = result;
        console.log(result);
    })
}

getRoomsList();

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

// In the main process.
const { remote } = require('electron')

function loadRoomListeners() {
    $('.ROOMS').click(function () {
        let body = `playerId=${player.id()}&roomId=${this.id}`;
        console.log(body)
        communication.postUrlEncoded(`joinRoom`, body, result => {
            console.log(result);
            remote.getCurrentWindow().loadFile('game/game.html')
        })
    });
}


