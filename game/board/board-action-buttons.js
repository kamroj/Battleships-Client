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
    console.log(`FIRE :: ${field.chosenFieldToFire()} PACH PACH`);
    //buttons.disable('board_action_buttons', true);
    
    //komunikacja z serwerem
    let request = {"fieldNumber": field.chosenFieldToFire(), "playerId": id};
    
    $.post('http://localhost:8080/shot', request, (result) => {

        if(result === 'miss')
            mark.fire(field.chosenFieldToFire(), false);
        else
            mark.fire(field.chosenFieldToFire(), true);
        console.log(result)
    });
}


document.getElementById('button_place_ship').onclick = () => {
    placeShip();
}

function placeShip() {
    console.log(`Wysyłam:: Statek: ${ship.lenght} masztowy, 
    pole: ${field.chosenFieldToPlaceShip()}, wertkalnie: ${ship.isVertical}`)

    ship.fieldNumber = field.chosenFieldToPlaceShip();

    //let shipJson = JSON.stringify(ship);
    //let request = {"length": ship.lenght, "isVertical": ship.isVertical, "fieldNumber" : ship.fieldNumber};
    let request = {"length":4,"isVertical":true,"fieldNumber":3};
    let dupa = $.post('http://localhost:8080/place', request, (result) => {
        console.log(result);
    });

    
    // $.post('http://localhost:8080/place', request, (result) => {
    //     console.log(result);
    // });

    //postShipJson(shipJson);
    //console.log(`${shipJson}`)

    mark.ship(field.chosenFieldToPlaceShip(), ship.lenght);
}

