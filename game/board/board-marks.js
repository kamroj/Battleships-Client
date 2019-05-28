const $ = require('jQuery');
const keyFor = require('../keys')

/**
 * Marks fields according to ship type
 * @param index - fields id chosen by player 
 * @param masts - length of ship
 */
function markShip(index, masts) {
    $('.fieldsPassive').ready(function() {
        $(`#${index}`).attr("disabled", true);
        $(`#${index}`).prop('type', 'ship_placed');
        $(`#${index}`).html(`${masts}`);
    });
}

/**
 * Marks field as hit or missed if shot hit or not hit the ship
 * @param position - field id marked as fired chosen by player  
 * @param isHit - mark field as hit/miss
 */
function markFire(position, isHit) {
    let index = Number(position) + 1000; // add 1000 - Id offset between active and passive boards
    $('.fields').ready(function() {
        $(`#${index}`).attr("disabled", true);

        if (isHit) {
            $(`#${index}`).prop('type', keyFor.hit);
            $(`#${index}`).html(`O`);
        } else {
            $(`#${index}`).prop('type', keyFor.miss);
            $(`#${index}`).html(`X`);
        }
    });
}

/**
 * Marks shots on opponent board.
 * @param {Integer} index number of field
 * @param {Boolean} isHit shot result
 */
function markOpponentShots(index, isHit) {
    $('.fieldsPassive').ready(function() {
        $(`#${index}`).attr("disabled", true);
        if (isHit) {
            $(`#${index}`).prop('type', keyFor.hit);
            $(`#${index}`).html(`O`);
        } else {
            $(`#${index}`).prop('type', keyFor.miss);
            $(`#${index}`).html(`X`);
        }
    });
}

module.exports = {
    ship: ((position, masts) => {
        markShip(position, masts);
    }),

    fire: ((position, isHit) => {
        markFire(position, isHit);
    }),

    markOpponent: ((position, isHit) => {
        markOpponentShots(position, isHit);
    })
}