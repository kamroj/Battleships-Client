const communication = require('../communication-server-client');

let messages;
let chatBoxDiv = document.getElementById('chat_box');

function refreshChat() {
    communication.getChatRequest('chat', localStorage.getItem('gameId'), localStorage.getItem('id'), 'pl', messages => {
        chatBoxDiv.innerText = '';
        messages.forEach(message => {
            chatBoxDiv.innerText += `${message}\n`
        })
    })
}

setInterval(refreshChat, 1000);

