// Problem

// Solution

/////////Function///////////

////////////////////////////

candles = [2,1,2,3,3,3,4,4,5,5,5,6,1,8,8,8]
candle = [1,2,3,4,5]



function birthdayCakeCandles(candles) {
  // Write your code here
  let highest;
  let count;
  highest = Math.max(...candles);
  count=candles.filter(x  => x==highest).length
  return count;
    
}