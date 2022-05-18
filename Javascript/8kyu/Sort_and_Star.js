// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

//Mine:
function twoSort(s) {
  s.sort()
  return s[0].split('').join('***')
}

//Top Solution:
function twoSort(s) {
  return s.sort()[0].split('').join('***');
}


twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])

