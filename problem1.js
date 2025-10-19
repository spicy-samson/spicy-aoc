//2 arrays
//find smallest in left and smallest in right, match them up
//get their total and append in a new array
//then add all elements in the new array

// CASES:
//1 Even number length nung sorted, no problem, lahat may kapair
// Odd number length, may isang walang kapair so default na x - 0 na yun.

left_arr = [14, 67, 62, 67, 73, 3, 50, 54, 67, 70];
right_arr = [56, 38, 19, 33, 57, 24, 85, 14, 27, 60];

combined_arr = left_arr.concat(...right_arr);
sorted_arr = combined_arr.sort((a, b) => b - a); //descending sort
console.log(sorted_arr);
sorted_arr_length = sorted_arr.length;
let distance_arr = [];
if (sorted_arr_length % 2 === 0) {
  for (let i = 0; i < sorted_arr.length; i += 2) {
    let distance = sorted_arr[i] - sorted_arr[i + 1];
    distance_arr.push(distance);
  }
  console.log(distance_arr);
}

total_distance = 0;
for(let x = 0; x < distance_arr.length; x++ ){
    total_distance += distance_arr[x]
}

console.log(total_distance)