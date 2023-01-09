// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.


/////////////////////////


//mine:
function inArray(array1,array2){
    return array1.filter(sub => {
        for(word of array2){
            if(word.indexOf(sub) !== -1){
                return true
            }
        }
    }).sort()
}

// top solution: (returns duplicates which mine does as well)
function inArray(arr1, arr2) {
    return arr1.filter(function(needle) {
      return arr2.some(function(haystack) {
        return haystack.indexOf(needle) > -1;
      });
    }).sort();
  }


//test:
console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))

