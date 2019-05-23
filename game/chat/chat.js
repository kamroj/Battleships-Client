const player = require('../player/player');
const communication = require('../communication-server-client');

let textbox;

document.getElementById('SEND_MESSAGE').onclick = () => {
    textbox = document.getElementById('textbox');
    getText();
}

function getText() {
    let body = { "playerId": player.id(), "gameId": localStorage.getItem("gameId"), "textMessage": textbox.value, "language": "pl" };
    communication.post('chat', body, request => {
        console.log(request);
    })
    textbox.value = "";
}