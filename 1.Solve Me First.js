/*Complete the function solveMeFirst to compute the sum of two integers.

Example
a = 7
b = 3
return 10

Function Description

Complete the solveMeFirst function in the editor below.

solveMeFirst has the following parameters:

int a: the first value
int b: the second value
Returns
- int: the sum of  and 

Constraints 
1 ≤ a,b ≤ 1000

Sample Input

a = 2
b = 3
Sample Output

5


Explanation

2+3=5.  */

//////////////////////////////////////////////////////////////////////////

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

// Main function
function solveMeFirst(a, b) {
  return a+b; 
}
// 

function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());;

    var res = solveMeFirst(a, b);
    console.log(res);
}


