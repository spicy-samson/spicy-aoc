// Read CSV and separate into left_arr and right_arr
const fs = require("fs");
const path = require("path");
const csvFile = path.join(__dirname, "problem1inputssssss.csv");
const csvText = fs.readFileSync(csvFile, "utf-8");

// let left_arr = [];
// let right_arr = [];
// csvText
//   .trim()
//   .split("\n")
//   .forEach((line) => {
//     const [left, right] = line.split(",");
//     left_arr.push(Number(left));
//     right_arr.push(Number(right));
//   });

//find the occurence of the number in the left list in the right list
// fastest searching???
// then mutltiply the number with its occurence
// store the sum
// add all of the sums all together

let left_arr = [3, 4, 2, 1, 3, 3];
let right_arr = [4, 3, 5, 3, 9, 3];

function getSimilarityScore(left_arr, right_arr) {
  sorted_left_arr = left_arr.sort((a, b) => a - b);
  sorted_right_arr = right_arr.sort((a, b) => a - b);

  let combined_arr = [...sorted_left_arr, ...sorted_right_arr];

  let product_quantity_arr = [];
  let combined_arr_length = combined_arr.length;

  for (let x = 0; x < sorted_left_arr.length; x++) {
    // for (y = combined_arr_length / 2, y < combined_arr_length; y++; ) {
    let counter = 0;
    for (let i = combined_arr_length / 2; i < combined_arr_length; i++) {
      //   console.log(`${combined_arr[x]} |${combined_arr[i]}`);

      if (combined_arr[x] == combined_arr[i]) {
        counter += 1;
      }
    }
    product_quantity_arr.push(combined_arr[x] * counter);
    // }
  }

  let similarity_score = 0;
  for (let x = 0; x < product_quantity_arr.length; x++) {
    similarity_score += product_quantity_arr[x];
  }

  return similarity_score;
}



console.log(getSimilarityScore(left_arr, right_arr));
