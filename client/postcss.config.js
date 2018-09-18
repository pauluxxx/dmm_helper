const pfm = require("postcss-font-magician");
module.exports = {
  plugins: [
    require("precss"),
    require("postcss-preset-env"),
    require("postcss-font-magician")({
      variants: {
        "Open Sans": {
          "300": ["woff, eot, woff2"],
          "400 italic": ["woff2"]
        }
      }
    })
  ]
};
