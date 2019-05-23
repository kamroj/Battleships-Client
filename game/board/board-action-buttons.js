//imports
const field = require('./board-fields');
const c = require('../ship/ship-class');
const mark = require('./board-marks');
const communication = require('../communication-server-client');
const player =  require('../player/player');

let ship = c.Ship();

document.getElementById('SHOT').onclick = () => {
    fire();
};

/**
  * Send request to server about chosen field being fired.
  * Mark field according to shot outcome result. 
  */
function fire() {
    let request = {"playerId": player.id(), "field": field.chosenFieldToFire(), "gameId": localStorage.getItem('gameId')};

    communication.post(`shot`, request, result => {
        if(result.shotOutcome === 'MISS') {
            mark.fire(field.chosenFieldToFire(), false);
            player.refresh();
            player.turnEnded();
        }
        else {
            mark.fire(field.chosenFieldToFire(), true);
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
    let request = {"playerID": player.id(), "field": ship.fieldNumber, "shipLength": ship.lenght,"isHorizontally": ship.isHorizontally};

    communication.post(`placeShip`, request, shipFields =>{
        shipFields.shotDownFields.forEach(field => {
            mark.ship(field, ship.lenght);
        })
    });
}

document.getElementById('GENERATE_SHIPS').onclick = () => {
    generateShips();
}

function generateShips() {
    communication.get(`placeShipsRandomly`, player.id(), ships =>{
        console.log(ships)
        ships.forEach(ship => {
            ship.shotDownFields.forEach(field => {
                console.log(field)
                mark.ship(field, ship.shotDownFields.length);
            });
        })
    });
}
