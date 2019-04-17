//imports
const $ = require('jQuery');

function markShip(index, masts) {
    $('.fieldsPassive').ready(function() {
        $(`#${index}`).attr("disabled", true);
        $(`#${index}`).prop('type', 'ship_placed');
        $(`#${index}`).html(`${masts}`);
    });
}

function markFire(position, isHit) {
    let index = position + 1000; //dodaje 1000 by uniknąć konfliktu ID obu plansz

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

module.exports = {
    ship : ((position, masts) => {
        markShip(position, masts);
    }),

    fire : ((position, isHit) => {
        markFire(position, isHit);
    })
}