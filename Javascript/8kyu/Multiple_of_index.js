//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

//Mine:
function multipleOfIndex(array) {
    return array.filter((num, idx) => num % idx === 0)
  }



 
//Top Solution:
function multipleOfIndex(array) {
    return array.filter((num, i) => num % i === 0);
  }

//Test:
multipleOfIndex([22, -6, 32, 82, 9, 25])


