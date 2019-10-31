'use strict';

const Buffer = require('safe-buffer').Buffer;
var request = require('request');
var async = require('async');

// Preparing auth header
const API_TOKEN = "d8b71b55b1aa3acf2e07bc17d1a3759a"
const auth = "Basic " + new Buffer(API_TOKEN + ":").toString("base64")
const chargeEndpoint = 'https://api.iugu.com/v1/charge'

// [START functions_helloworld_debug]
require('@google-cloud/debug-agent').start();
// [END functions_helloworld_debug]

/*
* Cloud Function.
*
* @param {object} event The Cloud Functions event.
* @param {function} callback The callback function.
*/
exports.helloWorld = function helloWorld (event, callback) {
	console.log(`My Cloud Function: ${event.data.message}`);
	callback();
};


/*
* HTTP Cloud Function.
*
* @param {Object} req Cloud Function request context.
* @param {Object} res Cloud Function response context.
*/
exports.getPagSeg = function getPagSeg (req, res) {
	res.send(`Ola ${req.body.name ||  'World'}!`);
};
