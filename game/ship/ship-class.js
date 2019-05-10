class Ship {
    constructor() {
        this.lenght,
        this.isVertical = false,
        this.fieldNumber
    }
}

let ship = new Ship();

module.exports = {
    Ship: () => {
        return ship
    }
}
