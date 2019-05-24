const communication = require('../communication-server-client');
const buttons = require('../buttons-helper');
const myBoards = require('../board/board-marks')

var path = window.location.pathname;
var currentPage = path.split("/").pop();

/**
 * Load id from local storage (browser memory), and if it doesn't exist, generate it randomly
 */
var id = localStorage.getItem("id");
if (id == null) {
    generateRandomId();
}

function generateRandomId() {
    id = Math.floor(Math.random() * 100000000);
    localStorage.setItem("id", id)
}

var askedOnceForSummaryAfterStartingTurn = false;

/**
 * Ask server if it is my turn
 */
function isMyTurn() {
    communication.get2Params(`turn`, id, localStorage.getItem("gameId"), result => {
        console.log(id)
        console.log(localStorage.getItem("gameId"));
        console.log(result)
        if(result === '')
            return;

        console.log(`My turn: ${result}`);
        buttons.disable('board_action_buttons', !result);
        askForSummaryIfRequired(result);
    })
}

function askForSummaryIfRequired(result) {
    if (result && !askedOnceForSummaryAfterStartingTurn) {
        communication.get("summary", id, result => {
            try {
                result.shotResults.forEach(element => {
                    myBoards.markOpponent(element.field, element.shotOutcome != "MISS")
                });
            } catch (err) {
                console.log('No summary shots from opponent yet!');
            }
        })
        askedOnceForSummaryAfterStartingTurn = true;
    }
}

if (currentPage === 'game.html') {
    var interval = setInterval(isMyTurn, 3000);
}

module.exports = {
    id: () => {
        return id;
    },
    refresh: () => {
        isMyTurn();
    },
    turnEnded: () => {
        askedOnceForSummaryAfterStartingTurn = false;
    },
    stopCheckingTurn: () => {
        clearInterval(interval);
    },
    resetId: () => {
        generateRandomId();
    }
}