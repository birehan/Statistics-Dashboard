const withMT = require("@material-tailwind/react/utils/withMT");
// const withMT = require("@material-tailwind/react/src/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
