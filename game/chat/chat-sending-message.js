const $ = require('jQuery');
const player = require('../player/player');
const communication = require('../communication-server-client');

let textbox;

document.getElementById('SEND_MESSAGE').onclick = () => {
    sendText();
}

$(document).ready(function () {

    $('#textbox').keypress(function (e) {
        if (e.which == 13) {
            sendText();
        }
    });
    
});

function sendText() {
    textbox = document.getElementById('textbox');
    getText();
}

function getText() {
    let body = { "playerId": player.id(), "gameId": localStorage.getItem("gameId"), "textMessage": textbox.value, "language": "pl" };
    communication.post('chat', body, request => {
        //console.log(request);
    })
    textbox.value = "";
}
