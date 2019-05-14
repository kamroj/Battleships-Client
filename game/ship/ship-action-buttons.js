//imports
const c = require('./ship-class')

let ship = c.Ship();

document.getElementById('SHIP_4_MAST').onclick = () => {
    ship.lenght =  3;
    console.log(`Ship selected:: ${ship.lenght} masts`);
}

document.getElementById('SHIP_3_MAST').onclick = () => {
    ship.lenght = 4;
    console.log(`Ship selected:: ${ship.lenght} masts`);
}

document.getElementById('TOGGLE_VERTICAL').onclick = () => {
    ship.isVertical = ship.isVertical === false ? true : false;
    console.log(`Ship vertical:: ${ship.isVertical}`);
}
