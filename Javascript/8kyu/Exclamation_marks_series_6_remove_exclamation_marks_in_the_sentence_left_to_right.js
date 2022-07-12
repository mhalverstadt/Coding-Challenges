// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"


// //Mine:
function remove(s,n){
    let newString = s
    for(let i = 0; i < n; i++){
        newString = newString.replace('!','')
    }
    return newString
}
// //Top Solution:
function remove(s,n){
    for (var i=0;i<n;i++) s=s.replace("!","");
    return s;
  }

  //OR:
  function remove(s,n){
    return n>0 ? remove(s.replace('!', ''), n-1) : s;
  }

// //Test:
console.log(remove("!!!Hi !!hi!!! !hi",5))
console.log(remove("Hi!!!",1))