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
 * @param {String} urlEnd - and of url address
 * @param {String} param1 - first part of urn
 * @param {String} param2 - second part of urn
 * @param {JSON} result - data received from server
 */
function doGet2Params(urlEnd, param1, param2, result) {
    $.get(`${URL}/${urlEnd}/${param1}/${param2}`, result)
}

/**
 * Wrapper for http request - GET
 * @param {*} urlEnd - end of url address
 * @param {*} result - data received from server
 */
function doGetWithoutRequest(urlEnd, result) {
    $.get(`${URL}/${urlEnd}`, result)
}

/**
 * Wrapper for http request - GET
 * @param {String} urlEnd - end of url adress 
 * @param {String} gameId - current game ID 
 * @param {String} playerId - current player ID
 * @param {String} language - current language shortcut
 * @param {JSON} result - data received from server
 */
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
        url: `${URL}/${urlEnd}`,
        type: "POST",
        data: JSON.stringify(request),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
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
        url: `${URL}/${urlEnd}`,
        type: "POST",
        data: request,
        contentType: 'application/x-www-form-urlencoded',
        dataType: 'json',
        success: result
    })
}

module.exports = {
    post: (urlEnd, request, result) => {
        post(urlEnd, request, result)
    },

    get: (urlEnd, request, result) => {
        doGet(urlEnd, request, result)
    },

    get2Params: (urlEnd, param1, param2, result) => {
        doGet2Params(urlEnd, param1, param2, result)
    },

    getWithoutRequest: (urlEnd, result) => {
        doGetWithoutRequest(urlEnd, result)
    },

    getChatRequest: (urlEnd, gameId, playerId, language, result) => {
        doGetChat(urlEnd, gameId, playerId, language, result)
    },

    postUrlEncoded: (urlEnd, request, result) => {
        postUrlEncoded(urlEnd, request, result)
    }
}