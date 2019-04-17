//imports
const c = require('./ship-class')

let ship = c.Ship();

document.getElementById('button_ship_3_mast').onclick = () => {
    ship.lenght =  3;
    console.log(`Ship selected:: ${ship.lenght} masts`);
}

document.getElementById('button_ship_4_mast').onclick = () => {
    ship.lenght = 4;
    console.log(`Ship selected:: ${ship.lenght} masts`);
}

document.getElementById('button_ship_vertical').onclick = () => {
    ship.isVertical = ship.isVertical === false ? true : false;
    console.log(`Ship vertical:: ${ship.isVertical}`);
}
