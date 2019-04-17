class Ship {
    constructor() {
        this.lenght,
        this.isVertical = false,
        this.fieldNumber
    }
}

let ship = new Ship();
//let vertical = false;

module.exports = {
    Ship: () => {
        return ship
    }
}
