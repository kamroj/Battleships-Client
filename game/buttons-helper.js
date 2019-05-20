//imports
const $ = require('jQuery');

/**
 * Disable all buttons that are with specific type
 * @param type - type of button group 
 * @param disable - disable or enable button group
 */
function disableButtons(className, disable) {
    $(`button[class='${className}'`).attr("disabled", disable);
}

module.exports = {
    disable : (className, disable) => {
        disableButtons(className, disable)
    }
}
