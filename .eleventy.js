module.exports = function(eleventyConfig) {
    return {
      templateFormats: [
        "md",
        "jpg",
        "css" // css is not yet a recognized template extension in Eleventy
      ]
    };
  };