var cheerio = require('cheerio');

var AwwParser = module.exports = function (html) {
  this.$html = cheerio.load(html);
};

AwwParser.prototype.items = function () {
  var ret = [];

  this.$html('#siteTable > .thing').each(function () {
    var $el = cheerio.load(this);
    var imageUrl = $el('.thumbnail').attr('href');
    var postUrl = postUrl = $el('.comments').attr('href');

    if (postUrl && imageUrl.match(/\.(jpg|png|gif)$/)) {
      ret.push({imageUrl: imageUrl, postUrl: postUrl});
    }
  });

  return ret;
};

AwwParser.prototype.toObject = function () {
  var items = this.items();
  return {
    items: items
  }
};
