// Problem

// Solution

/////////Function///////////

////////////////////////////

arr = [1,2,3,4,5];

function miniMaxSum(arr) {
  // Write your code here
  arr.sort(function(a,b){return a-b})
  min=0
  max=0
  for(let i=0; i<arr.length; i++){
    if  (i<arr.length-1)
    {min+=arr[i]}
    if(i>0)
    {max+=arr[i]}
        
  }
  console.log(min,max)

}

miniMaxSum(arr)