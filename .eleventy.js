const moment = require('moment');

module.exports = function (eleventyConfig) {

  eleventyConfig.addFilter('date', date => {
    return moment(date).utc().format('LL'); // E.g. May 31, 2019
  });

  return {
    templateFormats: [
      "md",
      "jpg",
      "css" // css is not yet a recognized template extension in Eleventy
    ]
  };
};