const $ = require('jQuery');

function markShip(index, masts) {
    console.log(masts)
    $('.fieldsPassive').click(function() {
        $(`#${index}`).attr("disabled", true);
        $(`#${index}`).prop('type', 'ship_placed');
        $(`#${index}`).html(`${masts}`);
    });
}

function markFire(position, isHit) {
    let index = position * 10;

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