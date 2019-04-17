//imports
const $ = require('jQuery');

const fieldsQuantity = 100;
let chosenFieldToFire = 0;
let chosenFieldToPlaceShip = 0;

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
        button.id = i + 1000; //dodaje 1000 by uniknąć konfliktu ID obu plansz
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
        $(this).prop('type', 'selected')
            $('.fields')
                .not(this).not("[type='fire_miss']")
                .prop('type', 'enabled');
    });

    $('.fieldsPassive').click(function() {
        chosenFieldToPlaceShip = this.id;
        $(this).prop('type', 'selected');
            $('.fieldsPassive')
                .not(this).not("[type='ship_placed']")
                .prop('type', 'enabled');
    });
}

module.exports = {
    chosenFieldToFire : () => {
        return chosenFieldToFire
    },

    chosenFieldToPlaceShip : () => {
        return chosenFieldToPlaceShip
    }
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


