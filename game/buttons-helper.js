//imports
const $ = require('jQuery');

function disableButtons(type, disable) {
    $(`button[type='${type}'`).attr("disabled", disable);
}

module.exports = {
    disable : (type, disable) => {
        disableButtons(type, disable)
    }
}
