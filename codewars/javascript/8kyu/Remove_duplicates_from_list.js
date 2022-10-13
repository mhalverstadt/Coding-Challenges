// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

//Mine:
function distinct(a) {
  let noDuplicates = []
  a.forEach(elem => {
    if (!noDuplicates.includes(elem)){
        noDuplicates.push(elem)
      }
  })
  return noDuplicates
}


//Top Solution:
function distinct(a) {
  return [...new Set(a)];
}

//OR:
const distinct = a => a.filter((item, index) => a.indexOf(item) === index);



//Test:
distinct([5,1,1,2,3])
distinct([1])
distinct([1,2])
