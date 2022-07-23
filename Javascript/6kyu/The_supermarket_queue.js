

//Mine:


//Top Solution:
function queueTime(customers, n) {
  
    // Make an array containing n amount of elements, 
    // n representing the number of tills, 
    // and fill with zeroes
    var tills = new Array(n).fill(0);
  
    // Iterate through the customers 
    for (let time of customers) {
  
      // Find the till that has the least time
      let idx = tills.indexOf(Math.min(...tills));
  
      // Add the time, representing the customer to
      // the till that has the least time
      tills[idx] += time;
    }
  
    // Return the till that has the longest wait time
    // This is the required time to get all customers
    // through the que.
    return Math.max(...tills);
  }



//Test: 
console.log(queueTime([2,2,3,3,4,4], 2))
console.log(queueTime([1,2,1,3,4,5,50], 2))
console.log(queueTime([10,11,11,1,2,3], 3))
console.log(queueTime([18,17,15,2,3,13,11,13,8,1,15,9,2,19,13,2,11,2,4,14,5,5,16,16,15,11,16,14,16,13] , 15)) //29