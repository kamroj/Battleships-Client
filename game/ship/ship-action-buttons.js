const $ = require('jQuery');
const c = require('./ship-class');

let ship = c.Ship();

document.getElementById('SHIP_4_MAST').onclick = () => {
    ship.lenght = 4;
    console.log(`Ship selected:: ${ship.lenght} masts`);
}

document.getElementById('SHIP_3_MAST').onclick = () => {
    ship.lenght = 3;
    console.log(`Ship selected:: ${ship.lenght} masts`);
}

document.getElementById('SHIP_2_MAST').onclick = () => {
    ship.lenght = 2;
    console.log(`Ship selected:: ${ship.lenght} masts`);
}

document.getElementById('SHIP_1_MAST').onclick = () => {
    ship.lenght = 1;
    console.log(`Ship selected:: ${ship.lenght} masts`);
}

document.getElementById('TOGGLE_VERTICAL').onclick = () => {
    changeShipDirection();
}

function changeShipDirection() {
    ship.isHorizontally = ship.isHorizontally === false ? true : false;
    ship.isHorizontally ? $('#TOGGLE_VERTICAL').prop('type', 'vertical_button_checked')
        : $('#TOGGLE_VERTICAL').prop('type', 'board_buttons');
}
