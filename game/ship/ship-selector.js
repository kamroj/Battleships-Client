class ShipPlacer {
    constructor() {
        this.lenght,
        this.isVertical,
        this.fieldNumber
    }
}

let shipPlacer = new ShipPlacer();
let vertical = false;

document.getElementById('button_ship_4_mast').onclick = () => {
    shipPlacer.lenght = 4;
    console.log(`Ship selected:: ${shipPlacer.lenght} masts`);
}

document.getElementById('button_ship_3_mast').onclick = () => {
    shipPlacer.lenght =  3;
    console.log(`Ship selected:: ${shipPlacer.lenght} masts`);
}

document.getElementById('button_ship_vertical').onclick = () => {
    vertical = vertical === false ? true : false;
    shipPlacer.isVertical = vertical;
    console.log(`Ship vertical:: ${vertical}`);
}

module.exports = {
    shipPlacerClass: () => {
        return shipPlacer
    }
}
