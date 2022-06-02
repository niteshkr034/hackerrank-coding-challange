// Problem

// Solution

/////////Function///////////

////////////////////////////

function staircase(n) {
  // Write your code here
  let space=""
  let hash=""
  for (let i = 1; i <= n ; i++) {
    space = " ".repeat(n - i);
    hash = "#".repeat(i);
    console.log(space+hash);
  }
}
staircase(5);
