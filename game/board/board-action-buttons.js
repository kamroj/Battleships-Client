//imports
const field = require('./board-fields');
const c = require('../ship/ship-class');
const mark = require('./board-marks');
const buttons = require('../buttons-helper')
const $ = require('jQuery');
const id = Math.floor(Math.random() * 99999999); 
let ship = c.Ship();

document.getElementById('button_shoot').onclick = () => {
    fire();
};

function fire() {
    mark.fire(field.chosenFieldToFire(), false);
    console.log(`FIRE :: ${field.chosenFieldToFire()} PACH PACH`);
    //buttons.disable('board_action_buttons', true);

    let request = {"fieldNumber": field.chosenFieldToFire(), "playerId": id};
    // //test
    $.post('http://localhost:8080/shot', request, () => {
        console.log(res)
    });
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

