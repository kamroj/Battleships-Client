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

function fire() {
    console.log(`FIRE :: ${field.chosenFieldToFire()} PACH PACH`);
    
    /**
     * Send request to server about chosen field
     * being fired
     */
    let request = {"playerID": player.id(), "field": field.chosenFieldToFire()};

    communication.post(`shot`, request, result => {
        console.log("Wynik strzału" + result);
        if(result.shotOutcome === 'MISS')
            mark.fire(field.chosenFieldToFire(), false);
        else {
            mark.fire(field.chosenFieldToFire(), true);
            if (result.shotOutcome === 'SUNK' || result.shotOutcome === 'WIN') {
                communication.get('misses', player.id(), misses => {
                    misses.forEach(value => {
                        mark.fire(value, false);
                    })
                })
            }
        }
        player.refresh();
    })
}

document.getElementById('PLACE_SHIP').onclick = () => {
    placeShip();
}

function placeShip() {
    console.log(`Wysyłam:: Statek: ${ship.lenght} masztowy, 
    pole: ${field.chosenFieldToPlaceShip()}, wertkalnie: ${ship.isHorizontally}`)

    ship.fieldNumber = field.chosenFieldToPlaceShip();

    /**
     * Send request to server about chosen fields
     * where ship is going to be placed
     */
    let request = {"playerID": player.id(), "field": ship.fieldNumber, "shipLength": ship.lenght,"isHorizontally": ship.isHorizontally};
    //let request = {"length": ship.lenght,"isHorizontally": ship.isHorizontally,"fieldNumber": ship.fieldNumber};

    communication.post(`placeShip`, request, shipFields =>{
        console.log(shipFields)
        shipFields.shotDownFields.forEach(field => {
            mark.ship(field, ship.lenght);
        })
    });
}
