const communication = require('../communication-server-client');
const buttons = require('../buttons-helper');
const player = require('../player/player');

let chatBoxDiv = document.getElementById('chat_box');

function refreshChat() {
    communication.getChatRequest('chat', localStorage.getItem('gameId'), localStorage.getItem('id'), localStorage.getItem("currentLanguage"), messages => {
        chatBoxDiv.innerText = '';
        messages.forEach(message => {
            chatBoxDiv.innerText += `${message}\n`
            if (message.startsWith("[SERVER]: ~~~")) { // Special code sent from server indicating that game has ended
                player.stopCheckingTurn();
                buttons.disableAllButSendMessage();
            }
        })
    })
}

setInterval(refreshChat, 1000);