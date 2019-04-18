const $ = require('jQuery');

function get(urlEnd, request, result) {
    $.post(`http://localhost:8080/${urlEnd}`, request, result)
}


function post(urlEnd, request, result) {
    $.ajax({
        url:`http://localhost:8080/${urlEnd}`,
        type:"POST",
        data:JSON.stringify(request),
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: result
    })
}

module.exports = {
    post : (urlEnd, request, result) => {
        post(urlEnd, request, result);
    },

    get : (urlEnd, request, result) => {
        get(urlEnd, request, result)
    }
}
