// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

//mine:
function whatCentury(year){
  let suffix = ['st', 'nd', 'rd', 'th']
  let centuryNum = Math.ceil(year/100)
  console.log(centuryNum)
  let lastDigit = +String(centuryNum).split('').slice(-1)[0]
  console.log(lastDigit)
  if(0 < lastDigit && lastDigit < 4 && centuryNum !== 11 && centuryNum !== 12 && centuryNum !== 13){
    return `${centuryNum}${suffix[lastDigit -1]}`
  }else{
    return `${String(centuryNum)}${suffix[3]}`
  }
}

//top solution:
function whatCentury(year)
{
  var century = Math.ceil(year/100);
  return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
}

//more readable:
function whatCentury(year) {
  var century = Math.ceil(year / 100);
  if (century > 10 && century < 20) return century + "th";
  switch (century % 10) {
    case 1: return century + "st";
    case 2: return century + "nd";
    case 3: return century + "rd";
    default: return century + "th";
  }
}

//test:
console.log(whatCentury(1))
console.log(whatCentury(200))
console.log(whatCentury(1110))
console.log(whatCentury(1210))
console.log(whatCentury(1010))
console.log(whatCentury(1999))
console.log(whatCentury(211))