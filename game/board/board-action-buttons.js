//imports
const field = require('./board-fields');
const c = require('../ship/ship-class');
const mark = require('./board-marks');
const buttons = require('../buttons-helper')
const communication = require('../communication-server-client');
const player =  require('../player/player');

let ship = c.Ship();

document.getElementById('button_shoot').onclick = () => {
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
        else
            mark.fire(field.chosenFieldToFire(), true);
        console.log(result)
    })
}

document.getElementById('button_place_ship').onclick = () => {
    placeShip();
}

function placeShip() {
    console.log(`Wysyłam:: Statek: ${ship.lenght} masztowy, 
    pole: ${field.chosenFieldToPlaceShip()}, wertkalnie: ${ship.isVertical}`)

    ship.fieldNumber = field.chosenFieldToPlaceShip();

    /**
     * Send request to server about chosen fields
     * where ship is going to be placed
     */
    let request = {"length": ship.lenght,"isVertical": ship.isVertical,"fieldNumber": ship.fieldNumber};

    communication.post(`place`, request, fieldsList =>{
        fieldsList.forEach(field => {
            mark.ship(field, ship.lenght);
        })
    });
}

