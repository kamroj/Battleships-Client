//imports
const $ = require('jQuery');

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
    let index = Number(position) + 1000; //dodaje 1000 by uniknąć konfliktu ID obu plansz, pytasz pewnie czemu coś takiego jak Number() ? po prostu JS
    $('.fields').ready(function() {
        $(`#${index}`).attr("disabled", true);

        if (isHit) {
            $(`#${index}`).prop('type', 'fire_hit');
            $(`#${index}`).html(`O`);
        } else {
            $(`#${index}`).prop('type', 'fire_miss');
            $(`#${index}`).html(`X`);
        }
    });
}

function markOpponentShots(index, isHit) {
    $('.fieldsPassive').ready(function() {
        $(`#${index}`).attr("disabled", true);
        if (isHit) {
            $(`#${index}`).prop('type', 'fire_hit');
            $(`#${index}`).html(`O`);
        } else {
            $(`#${index}`).prop('type', 'fire_miss');
            $(`#${index}`).html(`X`);
        }
    });
}


module.exports = {
    ship : ((position, masts) => {
        markShip(position, masts);
    }),

    fire : ((position, isHit) => {
        markFire(position, isHit);
    }),

    markOpponent : ((position, isHit) => {
        markOpponentShots(position, isHit);
    })
}