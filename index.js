"use strict";
const Xray = require("x-ray");
const xray = Xray();

/**
 * HTTP Cloud Function.
 * This function is exported by index.js, and is executed when
 * you make an HTTP request to the deployed function's endpoint.
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */
exports.webscraper1 = (req, res) => {
  console.log("before scrap");
  xray(
    "https://www.youtube.com/results?search_query=I%27m+only+human+karaoke",
    "title"
  )((err, title) => {
    console.log(title); // Google
    res.send(title);
  });
};
