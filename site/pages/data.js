var RSVP = require('rsvp');
var Promise = RSVP.Promise;
var request = require('request');
var AwwParser = require('./aww-parser');

var AWW_URL = 'http://www.reddit.com/r/aww';

module.exports = function () {
  return new Promise(function (resolve) {
    request(AWW_URL, function (err, res) {
      var awwParser = new AwwParser(res.body);
      resolve(awwParser.toObject());
    });
  });
};
