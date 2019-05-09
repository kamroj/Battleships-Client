
const communication = require('../communication-server-client');

/**
 * Generate randomly player id
 */
const id = Math.floor(Math.random() * 100000000);

communication.post("/register", id, null);
console.log("wonsz");

module.exports = {
    id : () => {
        return id;
    }
}
