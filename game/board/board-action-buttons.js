//imports
const field = require('./board-fields');
const c = require('../ship/ship-selector');
const mark = require('./board-marks');

let ship = c.shipPlacerClass();

document.getElementById('button_shoot').onclick = () => {
    fire();
};

function fire() {
    mark.fire(field.chosenFieldToFire(), false);
    console.log(`FIRE :: ${field.chosenFieldToFire()} PACH PACH`);
}


document.getElementById('button_place_ship').onclick = () => {
    placeShip();
}

function placeShip() {
    console.log(`Wysyłam:: Statek: ${ship.lenght} masztowy, 
    pole: ${field.chosenFieldToPlaceShip()}, wertkalnie: ${ship.isVertical}`)

    ship.fieldNumber = field.chosenFieldToPlaceShip();
    let shipJson = JSON.stringify(ship, null, 4);
    //postShipJson(shipJson);
    console.log(`${shipJson}`)

    mark.ship(field.chosenFieldToPlaceShip(), ship.lenght);
}