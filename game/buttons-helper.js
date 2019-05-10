//imports
const $ = require('jQuery');

/**
 * Disable all buttons that are with specific type
 * @param type - type of button group 
 * @param disable - disable or enable button group
 */
function disableButtons(type, disable) {
    $(`button[type='${type}'`).attr("disabled", disable);
}

module.exports = {
    disable : (type, disable) => {
        disableButtons(type, disable)
    }
}
