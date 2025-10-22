// 121
x = -40604;
// 10
var isPalindrome = function (x) {
  let num_string = x.toString();
  let num_string_length = num_string.length;
  let is_palindrome = true;
  //   let firstElement = num_string[0];
  let lastElement = num_string_length - 1;
  //   console.log(
  //     `Matches: ${num_string[firstElement]} & ${num_string[lastElement]}`
  //   );
  // console.log(num_string[lastElement])
  for (let x = 0; x < num_string_length / 2; x++) {
    // console.log(`Matches: ${num_string[x]} & ${num_string[lastElement]}`);
    if (num_string[x] !== num_string[lastElement]) {
      console.log(`${num_string[x]} & ${num_string[lastElement]} AINT A MATCH`);
      is_palindrome = false;
      break;
    }

    --lastElement;
  }

  return is_palindrome;
};

console.log(isPalindrome(x));


// var optimizedIsPalindrome = function (x) {
//   let num_string = x.toString();
//   let num_string_length = num_string.length;

//   for (let i = 0; i < num_string_length / 2; i++) {
//     if (num_string[i] !== num_string[num_string_length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// };

