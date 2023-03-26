// In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, and then compare the numbers with the number of characters in the following substring.

// For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true.

// Notes:

// Messages are composed of only letters and digits
// Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
// Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
// If the message is an empty string, you should return true


//mine:
function isAValidMessage(message){
  for(let i = 0; i < message.length; i++){
    if(!isNaN(message[i])){
      let step = message[i]
      if(!isNaN(+message[i + 1])){
        for(let j = i + 1; j < message.length; j++){
          if(!isNaN(+message[j])){
            step += message[j]
            i++
          }
        }
      }
      i += +step 
      if(isNaN(+message[i + 1]) && i !== message.length -1){
        return false
      }
    }
  }
  return true
}  


//top solution:
function isAValidMessage(message){
  // your code
  if (!message) return true

  while (message.length > 0) {
    let num = parseInt(message);
  
    if (isNaN(num)) return false;
    
    message = message.slice((num + "").length);
    
    let str = message.slice(0, num);
    let regex = RegExp('^[a-zA-Z]{' + num + '}$')
    
    if (!regex.test(str)) return false;
    
    message = message.slice(num);
  }
  return true;
}

//test: 
console.log(isAValidMessage("3hey4ghey2hi"))
console.log(isAValidMessage("13hellocodewars"))