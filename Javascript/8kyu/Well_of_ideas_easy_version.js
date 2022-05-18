// For every good kata idea there seem to be quite a few bad ones!
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

//Mine:
function well(x){
  let goodCounter = 0
  for(i = 0; i < x.length; i++){
    if (x[i] === 'good'){
      goodCounter ++
    }
  }
    if (goodCounter === 1 || goodCounter === 2){
    return'Publish!'
  }else if (goodCounter > 2){
    return 'I smell a series!'
  }else{
    return 'Fail!'
  }
}


//Top Solution:
const well = x => {
  const good_count = x.filter(x => x == 'good').length;
  return good_count < 1 ? 'Fail!' : 
         good_count < 3 ? 'Publish!' : 'I smell a series!';
}

//OR
function well(x) {
  switch (x.filter(i => i === 'good').length) {
    case 0:
      return 'Fail!'
    case 1:
    case 2:
      return 'Publish!'
    default:
      return 'I smell a series!'
  }
}





well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])
