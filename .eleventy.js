  
module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets/img");
    eleventyConfig.addPassthroughCopy("src/assets/style.css");

  
  
    return {
          dir: {
            input: "src",
            output: "public",
          },
        };
  };
  