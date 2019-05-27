const $ = require('jQuery');
const player = require('../player/player');
const communication = require('../communication-server-client');
const { remote } = require('electron')
const language = require('../../languages/language-menager');

let roomsList;

getRoomsList();

setTimeout(() => {
    resetPlayerIdAndGameRoom();
    createRoomList()
    loadRoomListeners();
}, 20)


function getRoomsList() {
    communication.getWithoutRequest(`rooms`, result => {
        roomsList = result;
    })
}

function createRoomList() {
    if (typeof roomsList !== "undefined") {
        roomsList.forEach(
            roomId => {
                if (typeof roomId !== null) {
                    let button = document.createElement("button");
                    let buttonDiv = document.getElementById("sub_div_buttons_column");
                    let roomNameDiv = document.createElement("div");
                    let roomNumberDiv = document.createElement("div");

                    button.className = 'ROOMS_BUTTON'

                    roomNameDiv.className = "ROOM";
                    roomNameDiv.innerHTML = language.getTranslation('ROOM');

                    roomNumberDiv.className = 'ROOMS_NUMBERS';
                    roomNumberDiv.innerHTML = roomId;

                    button.appendChild(roomNameDiv);
                    button.appendChild(roomNumberDiv);

                    button.id = roomId;
                    button.type = `list_enabled`;

                    buttonDiv.appendChild(button);
                }
            })
    }
};

function loadRoomListeners() {
    $('.ROOMS_BUTTON').click(function () {
        const childWithRoomIdIndex = 1;
        let gameId = this.childNodes[childWithRoomIdIndex].innerHTML
        let body = `playerId=${player.id()}&roomId=${gameId}`;

        localStorage.setItem("gameId", gameId);
        communication.postUrlEncoded(`joinRoom`, body, result => {
            remote.getCurrentWindow().loadFile('game/game.html')
        });
    });
}

function resetPlayerIdAndGameRoom() {
    player.resetId();
    localStorage.setItem("gameId", null);
}

document.getElementById("MENU_REFRESH").onclick = () => {
    location.reload(getRoomsList());
}