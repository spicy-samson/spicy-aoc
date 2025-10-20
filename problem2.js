//check if ascending or descending yung levels (columns)
//check if 1,2,3 yung difference ng levels
// cant use ABS because it removes the checker if its ascending or descending

//store the safe and unseafe levels count

// Store the grid in a 2D array
const levels = [
  [7, 6, 4, 2, 1],
  [1, 2, 7, 8, 9],
  [9, 7, 6, 2, 1],
  [1, 3, 2, 4, 5],
  [8, 6, 4, 4, 1],
  [1, 3, 6, 7, 9],
];

let safelevels_count = 0;
let unsafelevels_count = 0;

//Displaying of values first in 2d array
for (let x = 0; x < levels.length; x++) {
  let row_arr = [];
  for (let i = 0; i < levels[x].length; i++) {
    // console.log(`Row ${x}: ${levels[x][i]}`);
    row_arr.push(levels[x][i]);
  }
  console.log(`Row ${x}: ${row_arr}`)
}
