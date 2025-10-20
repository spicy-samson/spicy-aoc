//check if ascending or descending yung levels (columns)
//check if 1,2,3 yung difference ng levels
// cant use ABS because it removes the checker if its ascending or descending

//store the safe and unseafe levels count

// Read CSV and separate into left_arr and right_arr
const fs = require("fs");
const path = require("path");
const csvFile = path.join(__dirname, "problem2inputs.csv");
const csvText = fs.readFileSync(csvFile, "utf-8");

// Store the grid in a 2D array
// Assuming each line in the CSV is a row, and values are separated by commas
const levels = csvText
  .trim()
  .split("\n")
  .map(
    (line) =>
      line
        .split(",")
        .map(Number)
        .filter((num) => num !== 0) // Remove zeros
  );

function calculateSafeReports(levels) {
  let safelevels_count = 0;
  let unsafelevels_count = 0;
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
    //   if (!isAscending) {
    //     console.log(
    //       `Row ${x}: is descendng? ${!isAscending} & is REPORT SAFE? ${isReportSafe}`
    //     );
    //   }
    // Count safe and unsafe reports
    if (isReportSafe) {
      safelevels_count++;
    } else {
      unsafelevels_count++;
    }
  }

  return safelevels_count;
}

let safeReportsCount = calculateSafeReports(levels);
console.log(safeReportsCount);
