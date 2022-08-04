// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// Note: Make sure you return the correct message with correct spaces and punctuation.

// Please leave feedback for this kata. Cheers!


//Mine:
// function cookie(x){
//     switch (typeof x){
//         case 'string' : "Who ate the last cookie? It was Zach!"
//             break;
//         case 'number' : "Who ate the last cookie? It was Monica!"
//             break;
//         default : "Who ate the last cookie? It was the dog!"
//     }
// }

function cookie(x){
    if(typeof x === 'string'){
        return "Who ate the last cookie? It was Zach!"
    }else if (typeof x === 'number'){
        return "Who ate the last cookie? It was Monica!"
    }else {
        return "Who ate the last cookie? It was the dog!"
    }
}

//Top Solution:
function cookie(x) {
    var t = typeof x
    var who = t=="string" ? 'Zach' : t=="number" ? 'Monica' : 'the dog'
    return `Who ate the last cookie? It was ${who}!`
  }

//Test: 
console.log(cookie("Ryan"))