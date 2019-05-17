const communication = require('../communication-server-client');
const buttons = require('../buttons-helper');

/**
 * Load id from local storage (browser memory), and if it doesn't exist, generate it randomly
 */
var id = localStorage.getItem("id");
if (id == null) {
    id = Math.floor(Math.random() * 100000000);
    localStorage.setItem("id", id)
}

/**
 * Ask server if it is my turn
 */
function isMyTurn() {
    communication.get(`turn`, id, result => {
        buttons.disable('board_action_buttons', !result);
    })
}

setInterval(isMyTurn, 3000);

module.exports = {
    id : () => {
        return id;
    },
    refresh : () => {
        isMyTurn();
    }
}
