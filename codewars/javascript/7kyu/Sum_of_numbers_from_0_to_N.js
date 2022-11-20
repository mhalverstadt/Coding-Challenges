// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0

//Mine:
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    let total =  count * (count + 1) / 2
    let result = '0'
    if(count === 0){
      return '0=0'
    }
    if(count < 0){
      return `${count}<0`
    }
    for(let i = 1; i <= count; i++){
      if(i === count){
        result += `+${count} = ${total}`
      }else{
        result += `+${i}`
      }
    }
    return result
  };

  return SequenceSum;

})();

//Top Solution:
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    var sum = 0;
    var str = "";
    if (count === 0) {
      return "0=0";
    } else if (count < 0) {
      return count + "<0";
    } else {
      for (var i = 0; i < count; i++) {
        sum += i;
        str += i + "+";
      };
    sum += count;
    str += count + " = " + sum;
    return str;
    };
  };

  return SequenceSum;

})();