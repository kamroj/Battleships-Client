const c = require('./ship-selector');
const mark = require('./board-marks');
const $ = require('jQuery');

const fieldsQuantity = 100;
let chosenFieldToFire = 0;
let chosenFieldToPlaceShip = 0;

let ship = c.shipPlacerClass();

document.getElementById('button_generate').onclick = () => {
    createActiveBoard(fieldsQuantity);  
    createPassiveBoard(fieldsQuantity);
    reloadListenerToButtons(); 
};

function createActiveBoard(fieldsQuantity) {

    //Generowanie przyciskow
    for(i = 1; i <= fieldsQuantity; i++) {
        let button = document.createElement("button");
        let buttonDiv = document.getElementById("sub_div_active_board");
        
        button.innerHTML = i;
        button.id = i * 10; //nie moge powtarzać id dlatego taki hack
        button.className = `fields`;
        
        buttonDiv.appendChild(button);
    }
}

function createPassiveBoard(fieldsQuantity) {
    for(i = 1; i <= fieldsQuantity; i++) {
        let button = document.createElement("button");
        let buttonDiv = document.getElementById("sub_div_passive_board");
        
        button.id = i;
        button.className = `fieldsPassive`;
        
        buttonDiv.appendChild(button);
    }
}

function reloadListenerToButtons() {
    //Generowanie listenerów do buttonów
    $('.fields').click(function() {
        chosenFieldToFire = this.innerHTML;
        $(this).prop('type', 'selected');
            $('.fields')
                .not(this)
                .prop('type', 'enabled');
    });

    $('.fieldsPassive').click(function() {
        chosenFieldToPlaceShip = this.id;
        $(this).prop('type', 'selected');
            $('.fieldsPassive')
                .not(this)
                .prop('type', 'enabled');
    });
}

document.getElementById('button_shoot').onclick = () => {
    fire();
};

function fire() {
    mark.fire(chosenFieldToFire, false);
    console.log(`FIRE :: ${chosenFieldToFire} PACH PACH`);
}


document.getElementById('button_place_ship').onclick = () => {
    placeShip();
}

function placeShip() {
    console.log(`Wysyłam:: Statek: ${ship.lenght} masztowy, 
    pole: ${chosenFieldToPlaceShip}, wertkalnie: ${ship.isVertical}`)

    ship.fieldNumber = chosenFieldToPlaceShip;
    let shipJson = JSON.stringify(ship, null, 4);
    //postShipJson(shipJson);
    console.log(`${shipJson}`)

    mark.ship(chosenFieldToPlaceShip, ship.lenght);
}




// function postShipJson(json) {
//     const request = require('request')

//     request.post('http://localhost:8080/bool', {},
//         (error, res, body) => {
//             if (error) {
//                 console.error(error)
//                 return
//             }
            //console.log(`statusCode: ${res.statusCode}`)
            //console.log(body)
//         })
// }

// document.getElementById('dupaButtonGet').onclick = () => {
//     console.log('dupa button GET wcisniety')
//     getBool();    
// };

// document.getElementById('dupaButtonPost').onclick = () => {
//     console.log('dupa button POST wcisniety')
//     postBool();    
// };


// function getBool() {
//     const request = require('request')

//     request.get('http://localhost:8080/bool', {
//         json: {
//             todo: 'Buy the milk'
//         }
//     }, (error, res, body) => {
//         if (error) {
//             console.error(error)
//             return
//         }
//         //console.log(`statusCode: ${res.statusCode}`)
//         console.log(body)
//     })
// }


