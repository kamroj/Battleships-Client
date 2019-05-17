class Ship {
    constructor() {
        this.lenght,
        this.isHorizontally = false,
        this.fieldNumber
    }
}

let ship = new Ship();

module.exports = {
    Ship: () => {
        return ship
    }
}
