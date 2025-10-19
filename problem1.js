// Read CSV and separate into left_arr and right_arr
const fs = require("fs");
const path = require("path");
const csvFile = path.join(__dirname, "problem1inputssssss.csv");
const csvText = fs.readFileSync(csvFile, "utf-8");

let left_arr = [];
let right_arr = [];
csvText
  .trim()
  .split("\n")
  .forEach((line) => {
    const [left, right] = line.split(",");
    left_arr.push(Number(left));
    right_arr.push(Number(right));
  });

// console.log("left_arr:", left_arr.slice(0, 10));
// console.log("right_arr:", right_arr.slice(0, 10));
//2 arrays
//find smallest in left and smallest in right, match them up
//get their total and append in a new array
//then add all elements in the new array

// CASES:
//1 Even number length nung sorted, no problem, lahat may kapair
// Odd number length, may isang walang kapair so default na x - 0 na yun.

// let left_arr = [3, 4, 2, 1, 3, 3];
// let right_arr = [4, 3, 5, 3, 9, 3];

function getTotalDistance(left_arr, right_arr) {
  sorted_left_arr = left_arr.sort((a, b) => a - b);
  sorted_right_arr = right_arr.sort((a, b) => a - b);

  let combined_arr = [...sorted_left_arr, ...sorted_right_arr];

  let distance_arr = [];
  let combined_arr_length = combined_arr.length;

  let y = combined_arr_length / 2;

  for (let i = 0; i < sorted_left_arr.length; i++) {
    // for (y = combined_arr_length / 2, y < combined_arr_length; y++; ) {

    // }
    let distance = combined_arr[i] - combined_arr[y];
    y += 1;
    let absoluteDistance = Math.abs(distance);
    distance_arr.push(absoluteDistance);
    console.log(`i: ${i} & y: ${y}`);
  }

  total_distance = 0;
  for (let x = 0; x < distance_arr.length; x++) {
    total_distance += distance_arr[x];
  }

  console.log(total_distance);
  return total_distance;
}

getTotalDistance(left_arr, right_arr);
