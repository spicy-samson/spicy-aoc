const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "../problem3input.txt");
const inputText = fs.readFileSync(inputPath, "utf-8");

// Split into lines, then each line into an array of characters
const inputArray = inputText
  .trim()
  .split("\n")
  .map(line => line.split(""));

console.log(inputArray); // Array of arrays of characters

//  [
//     '.', '.', '.', '#', '.', '.',
//     '.', '#', '.', '.', '.', '.',
//     '#', '.', '.', '.', '.', '#',
//     '#', '.', '.', '.', '#', '#',
//     '#', '.', '.', '.', '.', '#',
//     '.'
//   ],