const moment = require('moment');

module.exports = function (eleventyConfig) {

  eleventyConfig.setQuietMode(true);
  eleventyConfig.setDataDeepMerge(true);

  // Copy directories to _sites
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("files");

  // **************************************************************************
  // Custom Filters
  // **************************************************************************
  
  eleventyConfig.addFilter('date', date => {
    return moment(date).utc().format('LL'); // E.g. May 31, 2019
  });


  // **************************************************************************
  // Custom collections
  // **************************************************************************

  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(function(item) {
      if( "tags" in item.data ) {
        let tags = item.data.tags;

        tags = tags.filter(function(item) {
          switch(item) {
            // this list should match the `filter` list in tags.njk
            case "all":
            case "nav":
            case "post":
            case "posts":
              return false;
          }

          return true;
        });

        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });

    // returning an array in addCollection works in Eleventy 0.5.3
    return [...tagSet];
  });



  return {
    templateFormats: [
      "md",
      "njk"
    ]
  };
};