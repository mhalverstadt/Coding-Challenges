// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.



//Mine:
function findShort(s){
  return Math.min(...s.split(' ').map(x => x.length))
}


//Top Solution:
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}


//Test:
findShort("bitcoin take over the world maybe who knows perhaps")
