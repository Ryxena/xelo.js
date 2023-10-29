const bogoSort = require("./algorithms/bogoSort");
const bubbleSort = require("./algorithms/bubbleSort");
const quickSort = require("./algorithms/quickSort");
const stalinSort = require('./algorithms/stalinSort')

const xelo = {
  bubbleSort: bubbleSort,
  quickSort: quickSort,
  stalinSort: stalinSort,
  bogoSort: bogoSort
};
module.exports = xelo;
