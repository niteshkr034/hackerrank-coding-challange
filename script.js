// Problem

// Solution

/////////Function///////////

////////////////////////////

let arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
  let p = 0;
  let n = 0;
  let z = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      p++;
    } else if (arr[i] < 0) {
      n++;
    } else if (arr[i] == 0) {
      z++;
    }
  }
  p= (p/arr.length).toFixed(6)
  n= (n/arr.length).toFixed(6)
  z= (z/arr.length).toFixed(6)
  console.log(p)
  console.log(n)
  console.log(z)
}
plusMinus(arr);
