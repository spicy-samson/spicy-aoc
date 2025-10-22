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

function optimizedGetSimilarityScore(left_arr, right_arr) {
  // Create frequency map for right_arr
  const rightCount = right_arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  console.log(rightCount);

  // Compute similarity score directly
  const similarity_score = left_arr.reduce((sum, num) => {
    const count = rightCount[num] || 0;
    return sum + num * count;
  }, 0);

  return similarity_score;
}

// console.log(optimizedGetSimilarityScore(left_arr, right_arr));

function total(arr) {
  let sum = 0;
  sum = arr.reduce((acc, num) => acc + num, 0);
  return sum;
}

console.log(total([1, 2, 3])); // 6

function stringConcat(arr) {
  // your code here
  let arr_string = arr.reduce((acc, num) => acc.concat(num), "");
  return arr_string;
}

console.log(stringConcat([1, 2, 3])); // "123"

function totalVotes(arr) {
  // your code here
  let votes = arr.reduce((acc, obj) => {
    if (obj["voted"] === true) return acc + 1;
    return acc;
  }, 0);
  console.log(votes);
  return votes;
}

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
console.log(totalVotes(voters)); // 7

function shoppingSpree(arr) {
  let total = arr.reduce((acc, obj) => (acc = acc + obj["price"]), 0);
  return total;
}

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

console.log(shoppingSpree(wishlist)); // 227005

function flatten(arr) {
  // your code here
  let flattened_arr = arr.reduce((acc, num) => acc.concat(num), []);
  return flattened_arr;
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// 6) Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

console.log(
  "================================================================="
);
function voterResults(arr) {
  // your code here
  let obj_vote = arr.reduce(
    (acc, voter) => {
      if (voter["age"] >= 18 && voter["age"] <= 25) {
        acc.numYoungPeople += 1;
        if (voter.voted) acc.numYoungVotes += 1;
      } else if (voter["age"] >= 26 && voter["age"] <= 35) {
        acc.numMidsPeople += 1;
        if (voter.voted) acc.numMidVotesPeople += 1;
      } else if (voter["age"] >= 36 && voter["age"] <= 55) {
        acc.numOldsPeople += 1;
        if (voter.voted) acc.numOldVotesPeople += 1;
      }

      return acc;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    }
  );
  return obj_vote;
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/

function optimizedVoterResults(arr) {
  return arr.reduce(
    (acc, { age, voted }) => {
      switch (true) {
        case age >= 18 && age <= 25:
          acc.numYoungPeople++;
          if (voted) acc.numYoungVotes++;
          break;
        case age >= 26 && age <= 35:
          acc.numMidsPeople++;
          if (voted) acc.numMidVotesPeople++;
          break;
        case age >= 36 && age <= 55:
          acc.numOldsPeople++;
          if (voted) acc.numOldVotesPeople++;
          break;
      }
      return acc;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    }
  );
}
// Extra credit
// Using AJAX, do a GET request to your own Github repositories endpoint. The URL will be https://api.github.com/users/<YOUR GITHUB USERNAME HERE>/repos.

// Once you get the data, use .reduce() to figure out how many watchers you have across all of your repositories. Don't be too disappointed if the number is 0. You're still new at this :)

const axios = require("axios");

async function fetchGithubRepos() {
  try {
    const response = await axios.get(
      "https://api.github.com/users/spicy-samson/repos"
    );
    const github_repos = response.data;
    console.log(
      "---------------------------------------------------------------------------"
    );
    console.log(github_repos);
    // Example: total watchers across all repos
    total_watchers = github_repos.reduce(
      (sum, repo) => (sum += repo.watchers_count),
      0
    );
    console.log("Total watchers:", total_watchers);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchGithubRepos();
