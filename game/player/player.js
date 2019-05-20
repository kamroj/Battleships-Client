const communication = require('../communication-server-client');
const buttons = require('../buttons-helper');
const myBoards = require('../board/board-marks')

/**
 * Load id from local storage (browser memory), and if it doesn't exist, generate it randomly
 */
var id = localStorage.getItem("id");
if (id == null) {
    id = Math.floor(Math.random() * 100000000);
    localStorage.setItem("id", id)
}

var askedOnceForSummaryAfterStartingTurn = false;

/**
 * Ask server if it is my turn
 */
function isMyTurn() {
    communication.get(`turn`, id, result => {
        console.log(`My turn: ${result}`);
        buttons.disable('board_action_buttons', !result);
        if (result && !askedOnceForSummaryAfterStartingTurn) {
            communication.get("summary", id, result => {
                result.shotResults.forEach(element => {
                    myBoards.markOpponent(element.field, element.shotOutcome != "MISS")
                });
            })
            askedOnceForSummaryAfterStartingTurn = true;
        }
    })
}

setInterval(isMyTurn, 3000);

module.exports = {
    id : () => {
        return id;
    },
    refresh : () => {
        isMyTurn();
    },
    turnEnded : () => {
        askedOnceForSummaryAfterStartingTurn = false;
    }
}
