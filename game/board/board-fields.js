const ship = require('./ship-selector');

var $ = require('jQuery');
const fieldsQuantity = 100;
let chosenField = 0;

let shipPlacer = ship.shipPlacerClass();

document.getElementById('button_generate').onclick = () => {
    createActiveBoard(fieldsQuantity);  
    createPassiveBoard(fieldsQuantity);  
};

document.getElementById('button_shoot').onclick = () => {
    fire();
};

document.getElementById('button_place_ship').onclick = () => {
    console.log(`Wysyłam:: Statek: ${ship.getSize()} masztowy, 
    pole: ${chosenField}, wertkalnie: ${ship.isVertical()}`)

    shipPlacer.fieldNumber = chosenField;
    let shipJson = JSON.stringify(shipPlacer, null, 4);
    //postShipJson(shipJson);
    console.log(`${shipJson}`)
}

function createActiveBoard(fieldsQuantity) {

    //Generowanie przyciskow
    for(i = 1; i <= fieldsQuantity; i++) {
        let button = document.createElement("button");
        let buttonDiv = document.getElementById("left_sub_div_active_board");
        
        button.innerHTML = i;
        button.className = `fields`;
        
        buttonDiv.appendChild(button);
    }
    reloadListenerToButtons();
}

function createPassiveBoard(fieldsQuantity) {
    for(i = 1; i <= fieldsQuantity; i++) {
        let button = document.createElement("button");
        let buttonDiv = document.getElementById("left_sub_div_passive_board");
        
        button.className = `fieldsPassive`;
        
        buttonDiv.appendChild(button);
        button.disabled = true;
    }
}

function reloadListenerToButtons() {
    //Generowanie listenerów do buttonów
    $('.fields').click(function() {
        chosenField = this.innerHTML;
        $(this).prop('type', 'selected');
            $('.fields')
                .not(this)
                .prop('type', 'enabled');
    });
}

function fire() {
    console.log(`FIRE :: ${chosenField} PACH PACH`);
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


