let shipSise;
let vertical = false;

//test
class ShipPlacer {
    constructor() {
        this.lenght,
        this.isVertical,
        this.fieldNumber
    }
}

let shipPlacer = new ShipPlacer();

document.getElementById('button_ship_4_mast').onclick = () => {
    shipSise = 4;
    shipPlacer.lenght = 4;
    console.log(`Ship selected:: ${shipSise} masts`);
}

document.getElementById('button_ship_3_mast').onclick = () => {
    shipSise = 3;
    console.log(`Ship selected:: ${shipSise} masts`);
}

document.getElementById('button_ship_vertical').onclick = () => {
    vertical = vertical === false ? true : false;
    shipPlacer.isVertical = vertical;
    console.log(`Ship vertical:: ${vertical}`);
}

module.exports = {
    getSize: () => {
        return shipSise;
    },

    isVertical: () => {
        return vertical;
    },

    shipPlacerClass: () => {
        return shipPlacer
    }
}
