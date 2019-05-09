
const communication = require('../communication-server-client');
const buttons = require('../buttons-helper');

/**
 * Generate randomly player id
 */
const id = Math.floor(Math.random() * 100000000);
// register yourself as a player on the server
communication.post("/register", id, null);

/**
 * Ask server if it is my turn
 */
function isMyTurn() {
    console.log(`Turn check`);
    communication.get(`turn`, id, result => {
        console.log(result);
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
