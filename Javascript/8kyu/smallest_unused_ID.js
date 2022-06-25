// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!


//Mine:
function nextId(ids){
  sortArr = [...new Set(ids.sort((a,b) => a-b))]
  if (sortArr[0] !== 0){
    return 0
  }
  for(let i = 0; i < ids.length; i++){
    if(sortArr[i]+1 !== sortArr[i+1]){
      return sortArr[i] + 1
    }
  }
}

//Top Solution:
 function nextId(ids){
  var x = 0;
  while (ids.includes(x)) x++;
  return x;
}
//OR 
function nextId(ids){
  const used = new Set(ids);
  for (let i = 0; i <= ids.length; i++) {
    if (!used.has(i)) return i;
  }
}

//Test:
nextId([0,1,2,3,5])
nextId([0,1,2,3,4,5,6,7,8])
nextId([1,3,2,4,6,4])
nextId([0, 1, 2, 3])