const $ = require('jQuery');
const URL = 'http://localhost:7000';

/**
 * Wrapper for http request - GET
 * @param {String} urlEnd - and of url address
 * @param {JSON} request - json data
 * @param {JSON} result - data received from server
 */
function doGet(urlEnd, request, result) {
    $.get(`${URL}/${urlEnd}/${request}`, result)
}

/**
 * Wrapper for http request - GET
 * @param {*} urlEnd - and of url address
 * @param {*} result - data received from server
 */
function doGetWithoutRequest(urlEnd, result) {
    $.get(`${URL}/${urlEnd}`, result)
}

function doGetChat(urlEnd, gameId, playerId, language, result) {
    $.get(`${URL}/${urlEnd}/${gameId}/${playerId}/${language}`, result)
}

/**
 * Wrapper for http request - POST
 * @param {*} urlEnd - and of url address
 * @param {*} request - json data
 * @param {*} result - data received from server
 */
function post(urlEnd, request, result) {
    $.ajax({
        url:`${URL}/${urlEnd}`,
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
        url:`${URL}/${urlEnd}`,
        type:"POST",
        data: request,
        contentType:'application/x-www-form-urlencoded',
        dataType: 'json',
        success: result
    })
}

module.exports = {
    post : (urlEnd, request, result) => {
        post(urlEnd, request, result)
    },

    get : (urlEnd, request, result) => {
        doGet(urlEnd, request, result)
    },

    getWithoutRequest : (urlEnd, result) => {
        doGetWithoutRequest(urlEnd, result)
    },

    getChatRequest : (urlEnd, gameId, playerId, language, result) => {
        doGetChat(urlEnd, gameId, playerId, language, result)
    },

    postUrlEncoded : (urlEnd, request, result) => {
        postUrlEncoded(urlEnd, request, result)
    }
}
