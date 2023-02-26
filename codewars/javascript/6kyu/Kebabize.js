// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

function kebabize(str) {
  let arr = []
  let strFilter = str.split('').filter(x => x !== '0' && !parseInt(x)).join('')
  for(let i = 0, j = 0; i < strFilter.length; i++){
    if(strFilter[i].toUpperCase() === strFilter[i]){
      arr.push(strFilter.slice(j, i).toLowerCase())
      j = i
      if(j === strFilter.length - 1){
        arr.push(strFilter.slice(-1).toLowerCase())
      }
    }else if(i === strFilter.length - 1){
      arr.push(strFilter.slice(j, i + 1).toLowerCase())
    }
  }
  return arr.filter(Boolean).join('-')
}

//top solution (regex):
function kebabize(str) {
  return str.replace(/[^a-z]/ig, '').
         replace(/^[A-Z]/, c => c.toLowerCase()).
         replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
}

//test:
console.log(kebabize('pvcD3'))
// console.log(kebabize('camelsHave3Humps'))
// console.log(kebabize('k4hqo'))