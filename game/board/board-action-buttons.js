//imports
const field = require('./board-fields');
const c = require('../ship/ship-class');
const mark = require('./board-marks');
const buttons = require('../buttons-helper')
const $ = require('jQuery');

let ship = c.Ship();

document.getElementById('button_shoot').onclick = () => {
    fire();
};

function fire() {
    mark.fire(field.chosenFieldToFire(), false);
    console.log(`FIRE :: ${field.chosenFieldToFire()} PACH PACH`);
    //buttons.disable('board_action_buttons', true);
    
    let x = parseInt(1);
    // //test
    $.post('http://localhost:8080/shot', "x", () => {
        console.log(`dupa`)
        console.log(res)
    });



    // request.post('http://localhost:8080/shot',1 , (error, res, body) => {
    //     if (error) {
    //       console.error(error)
    //       return
    //     }
    //     console.log(`statusCode: ${res.statusCode}`)
    //     console.log(body)
    //   })


    // const request = require('request')

    // request.post('http://localhost:8080/shot', 1,
    //     (error, res, body) => {
    //         if (error) {
    //             console.error(error)
    //             return
    //         }
    //         console.log(`statusCode: ${res.statusCode}`)
    //         console.log(res)
    //     })


    // $.ajax({
    //     url         : "http://localhost:8080/shot", //wymagane, gdzie się łączymy
    //     method      : "post", //typ połączenia, domyślnie get
    //     contentType : 'application/json', //gdy wysyłamy dane czasami chcemy ustawić ich typ
    //     dataType    : 'json', //typ danych jakich oczekujemy w odpowiedzi
    //     data        : 1
    //     });
    
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

