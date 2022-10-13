// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway


//Mine:
function noBoringZeros(n) {
  let arr = Array.from(String(n)).reverse()
  for(let i = 0; arr[i] == '0'; i++){
    delete arr[i]
  }
  return +(arr.reverse().join(''))
}


//Top Solution:
function noBoringZeros(n) {
  while(n%10==0 && n!=0){n/=10;}
  return n;
}


//Test:
noBoringZeros(960000)
noBoringZeros(-105)