// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//Mine:
function correct(string){
  let charArr = string.split('')
  for (i = 0; i <= charArr.length; i++){
    if (charArr[i] === '0'){
      charArr.splice(i, 1, 'O')
    }else if (charArr[i] === '5'){
      charArr.splice(i, 1, 'S')
    }else if (charArr[i] === '1'){
      charArr.splice(i, 1, 'I')
    }
  }
  return charArr.join('')
}


//Top Solution:
function correct(string) {
    return string.replace(/0/g, "O")
                 .replace(/5/g, "S")
                 .replace(/1/g, "I");
}



correct("DUBL1N")
