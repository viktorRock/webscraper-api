"use strict";

var Crawler = require("crawler");
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
exports.scraperGET = (req, res) => {
  res.send("Hello World!");
};

exports.webscraper1 = (req, res) => {
  console.log("before crawl");
  var c = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: function(error, res, done) {
      if (error) {
        console.log(error);
      } else {
        var $ = res.$;
        // $ is Cheerio by default
        //a lean implementation of core jQuery designed specifically for the server

        res.send($("title").text());
      }
      done();
    }
  });

  // Queue just one URL, with default callback
  c.queue("http://www.amazon.com");
};
