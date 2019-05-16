const $ = require('jQuery');

/**
 * Wrapper for http request - GET
 * @param {*} urlEnd - and of url address
 * @param {*} request - json data
 * @param {*} result - data received from server
 */
function doGet(urlEnd, request, result) {
    $.get(`http://localhost:7000/${urlEnd}/${request}`, result)
    //get(`http://10.30.1.116:7000/${urlEnd}/${request}`, result)
}

/**
 * Wrapper for http request - POST
 * @param {*} urlEnd - and of url address
 * @param {*} request - json data
 * @param {*} result - data received from server
 */
function post(urlEnd, request, result) {
    $.ajax({
        url:`http://localhost:7000/${urlEnd}`,
        //url:`http://10.30.1.116:7000/${urlEnd}`,
        type:"POST",
        data:JSON.stringify(request),
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: result
    })
}

/**
 * Wrapper for http request - POST
 * wysyła content-type: application/x-www-form-urlencoded
 * @param {*} urlEnd - and of url address
 * @param {*} request - json data
 * @param {*} result - data received from server
 */
function postUrlEncoded(urlEnd, request, result) {
    $.ajax({
        url:`http://localhost:7000/${urlEnd}`,
        //url:`http://10.30.1.116:7000/${urlEnd}`,
        type:"POST",
        data: request,
        contentType:'application/x-www-form-urlencoded',
        dataType: 'json',
        success: result
    })
}






module.exports = {
    post : (urlEnd, request, result) => {
        post(urlEnd, request, result);
    },

    get : (urlEnd, request, result) => {
        doGet(urlEnd, request, result)
    },

    postUrlEncoded : (urlEnd, request, result) => {
        postUrlEncoded(urlEnd, request, result)
    }

    
}
