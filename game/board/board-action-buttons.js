//imports
const $ = require('jQuery');
const field = require('./board-fields');
const c = require('../ship/ship-class');
const mark = require('./board-marks');
const communication = require('../communication-server-client');
const player = require('../player/player');

let ship = c.Ship();
let shipLengthFour = 1;
let shipLengthThree = 2;
let shipLengthTwo = 3;
let shipLengthOne = 4;
let allShips = 10;

document.getElementById('SHOT').onclick = () => {
    fire();
};

/**
 * Send request to server about chosen field being fired.
 * Mark field according to shot outcome result. 
 */
function fire() {
    let fieldIndex = field.chosenFieldToFire();
    let request = { "playerId": player.id(), "field": fieldIndex, "gameId": localStorage.getItem('gameId') };

    communication.post(`shot`, request, result => {
        if (result.shotOutcome === 'MISS') {
            mark.fire(fieldIndex, false);
            player.refresh();
            player.turnEnded();
        } else {
            mark.fire(fieldIndex, true);
            checkIfShotIsSunkOrWin(result.shotOutcome);
        }
    })
}

function checkIfShotIsSunkOrWin(shotOutcome) {
    if (shotOutcome === 'SUNK' || shotOutcome === 'WIN') {
        generateMissesAroundShip();
    }
}

function generateMissesAroundShip() {
    communication.get('misses', player.id(), misses => {
        misses.forEach(value => {
            mark.fire(value, false);
        })
    })
}

document.getElementById('PLACE_SHIP').onclick = () => {
    placeShip();
}


/**
 * Send request to server about chosen fields
 * where ship is going to be placed.
 */
function placeShip() {
    ship.fieldNumber = field.chosenFieldToPlaceShip();
    let request = { "playerID": player.id(), "field": ship.fieldNumber, "shipLength": ship.lenght, "isHorizontally": ship.isHorizontally };

    communication.post(`placeShip`, request, shipFields => {
        shipFields.shotDownFields.forEach(field => {
            mark.ship(field, ship.lenght);
        });
        decreaseShipCounters();
        removeShipPlacementButtonIfShipsOfLengthPlaced();
        removeShipPlacementButtonsAndDisablePassiveBoardIfAllShipsPlaced();
    });
}

function decreaseShipCounters() {
    if (ship.lenght === 4) {
        shipLengthFour--;
    }
    else if (ship.lenght === 3) {
        shipLengthThree--;
    }
    else if (ship.lenght === 2) {
        shipLengthTwo--;
    }
    else {
        shipLengthOne--;
    }
    allShips--;
}

function removeShipPlacementButtonIfShipsOfLengthPlaced() {
    if (shipLengthFour === 0) {
        $('#SHIP_4_MAST').remove();
    }
    if (shipLengthThree === 0) {
        $('#SHIP_3_MAST').remove();
    }
    if (shipLengthTwo === 0) {
        $('#SHIP_2_MAST').remove();
    }
    if (shipLengthOne === 0) {
        $('#SHIP_1_MAST').remove();
    }
}

function removeShipPlacementButtonsAndDisablePassiveBoardIfAllShipsPlaced(){
    if (allShips === 0) {
        removeShipPlacementButtons();
        field.disablePassiveBoard();
    }
}

document.getElementById('GENERATE_SHIPS').onclick = () => {
    generateShips();
    removeShipPlacementButtons();
    field.disablePassiveBoard();
}

function removeShipPlacementButtons() {
    $(`#ship_div`).remove();
    $(`#GENERATE_SHIPS`).remove();
}

function generateShips() {
    communication.get(`placeShipsRandomly`, player.id(), ships => {
        ships.forEach(ship => {
            ship.shotDownFields.forEach(field => {
                mark.ship(field, ship.shotDownFields.length);
            });
        })
    });
}