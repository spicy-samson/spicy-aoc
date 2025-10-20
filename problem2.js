//check if ascending or descending yung levels (columns)
//check if 1,2,3 yung difference ng levels
// cant use ABS because it removes the checker if its ascending or descending

//store the safe and unseafe levels count

// Store the grid in a 2D array
const levels = [
  [7, 6, 4, 2, 1], //desc
  [1, 2, 7, 8, 9],
  [9, 7, 6, 2, 1], //desc
  [1, 3, 2, 4, 5],
  [8, 6, 4, 4, 1], //desc
  [1, 3, 6, 7, 9],
];

let safelevels_count = 0;
let unsafelevels_count = 0;

//Displaying of values first in 2d array
for (let x = 0; x < levels.length; x++) {
  let row_arr = [];
  let isAscending = false;
  let isDescending = false;
  let isReportSafe = true;
  let direction = null; // 'desc' or 'asc'
  for (let i = 0; i < levels[x].length - 1; i++) {
    // console.log(`Row ${x}: ${levels[x][i]}`);
    let diff = levels[x][i] - levels[x][i + 1];
    //Check if descending
    if (levels[x][i] > levels[x][i + 1]) {
      if (direction === null) direction = "desc";
      isDescending = true;
      if (direction !== "desc" || !(diff >= 1 && diff <= 3)) {
        isReportSafe = false;
        break;
      }
    } else if (levels[x][i] < levels[x][i + 1]) {
      isAscending = true;
      if (direction === null) direction = "asc";
      if (direction !== "asc" || !(diff <= -1 && diff >= -3)) {
        isReportSafe = false;
        break;
      }
      //   let isSafe = diff >= -3 && diff < 0;
    } else {
      isReportSafe = false;
      break;
    }
  }
  //   console.log(`Row ${x}: ${row_arr}`)
  if (!isAscending) {
    console.log(
      `Row ${x}: is descendng? ${!isAscending} & is REPORT SAFE? ${isReportSafe}`
    );
  }
}
