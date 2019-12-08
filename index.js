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
  console.log("before scrap", req.body);
  xray(
    "https://www.youtube.com/results?search_query=human+karaoke",
    "title"
  )((err, title) => {
    console.log(title); // Google
    res.send(title);
  });
};

/*
  $("div#contents.style-scope.ytd-item-section-renderer")

  kik.root.children["dismissable"].children[0].children["thumbnail"].children[0].children["img"].src
  kik.root.children["dismissable"].getElementsByClassName("yt-img-shadow")[0].getAttribute("src")
  kik.getElementsByClassName("yt-img-shadow")[0].src

  yt-formatted-string
  style-scope ytd-channel-name complex-string
  kik.getElementsByClassName("style-scope ytd-channel-name complex-string")[0].title
*/
