const communication = require('../communication-server-client');
const buttons = require('../buttons-helper');
const player = require('../player/player');
const keyFor = require('../keys')

let chatBoxDiv = document.getElementById('chat_box');

/**
 * Each second refresh chat and update inner text of div with id #chatBoxDiv.
 * If messages have special server code, end the game
 */
function refreshChat() {
    communication.getChatRequest(
        'chat',
        localStorage.getItem('gameId'),
        localStorage.getItem('id'),
        localStorage.getItem(keyFor.languageInLocalStorage),
        messages => {
            chatBoxDiv.innerText = '';
            messages.forEach(message => {
                chatBoxDiv.innerText += `${message}\n`
                if (message.startsWith(keyFor.specialServerCodeForWhenGameEnded)) {
                    player.stopCheckingTurn();
                    buttons.disableAllButSendMessage();
                }
            })
        })
}

setInterval(refreshChat, 1000);