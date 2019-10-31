'use strict';

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
