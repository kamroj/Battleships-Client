const $ = require('jQuery');
const player = require('../player/player');
const communication = require('../communication-server-client');
const { remote } = require('electron')

let roomsList;

getRoomsList();

setTimeout(() => {
    createRoomList()
    loadRoomListeners();
}, 10)


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
        let roomNameDiv = document.createElement("div");
        let roomNumberDiv = document.createElement("div");

        roomNameDiv.className = "ROOMS";
        roomNameDiv.innerHTML = `Room: `

        roomNumberDiv.className = 'ROOMS_NUMBERS';
        roomNumberDiv.innerHTML = roomId;

        button.appendChild(roomNameDiv);
        button.appendChild(roomNumberDiv);

        button.id = roomId;
        button.type = `list_enabled`;

        buttonDiv.appendChild(button);
    })
};

function loadRoomListeners() {
    $('.ROOMS_NUMBERS').click(function() {
        localStorage.setItem("gameId", this.innerHTML);
        let body = `playerId=${player.id()}&roomId=${this.innerHTML}`;
        communication.postUrlEncoded(`joinRoom`, body, result => {
            remote.getCurrentWindow().loadFile('game/game.html')
        })
    });
}

document.getElementById("MENU_REFRESH").onclick = () => {
    location.reload(getRoomsList());
}