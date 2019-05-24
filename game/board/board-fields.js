const $ = require('jQuery');

const fieldsQuantity = 100;
let chosenFieldToFire = 0;
let chosenFieldToPlaceShip = 0;

/**
 * When game.html is loaded do the job
 */
$(document).ready(() => {
    setTimeout(() => {
        createActiveBoard(fieldsQuantity);
        createPassiveBoard(fieldsQuantity);
        reloadListenerToButtons();
    }, 0)
})

/**
 * Generating active buttons on board where player shoots
 * @fieldsQuantity - number of feelds 
 */
function createActiveBoard(fieldsQuantity) {
    for (i = 0; i < fieldsQuantity; i++) {
        let button = document.createElement("button");
        let buttonDiv = document.getElementById("sub_div_active_board");

        button.innerHTML = i + 1;
        button.id = i + 1000; //dodaje 1000 by uniknąć konfliktu ID obu plansz
        button.className = `fields`;
        button.type = `enabled`;

        buttonDiv.appendChild(button);
    }
}

/**
 * Generating active buttons on board where player places ships
 * @fieldsQuantity - number of feelds 
 */
function createPassiveBoard(fieldsQuantity) {
    for (i = 0; i < fieldsQuantity; i++) {
        let button = document.createElement("button");
        let buttonDiv = document.getElementById("sub_div_passive_board");

        button.innerHTML = " ";
        button.id = i;
        button.className = `fieldsPassive`;
        button.type = `enabled`;

        buttonDiv.appendChild(button);
    }
}

/**
 * Function that reloads buttons listeners after buttons creation.
 * Clicking button sets proper ID and assign it to chosenFieldToFire variable.
 * Function also manages visual of selecting buttons.
 */
function reloadListenerToButtons() {
    $('.fields').click(function() {
        chosenFieldToFire = this.innerHTML;
        $(this).prop('type', 'selected')
        $('.fields')
            .not(this).not("[type='fire_miss']").not("[type='fire_hit']")
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
    chosenFieldToFire: () => {
        let number = Number(chosenFieldToFire) - 1;
        chosenFieldToFire = -1;
        return number
    },

    chosenFieldToPlaceShip: () => {
        return Number(chosenFieldToPlaceShip)
    }
}