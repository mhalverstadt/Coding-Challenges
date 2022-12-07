// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

function maxCharacter(string){
    const charMap = {}
    let max = 0
    let letter = ''
    for(char of string){
      charMap[char] ? charMap[char] ++ : charMap[char] = 1
    }
    for(key in charMap){
      if(charMap[key] > max){
        max = charMap[key]
        letter = key
      }
    }
    return letter
  }
  
  
  //With methods
  // function maxCharacter(string){
  //   const charMap = {}
  //   for(char of string){
  //     charMap[char] ? charMap[char] ++ : charMap[char] = 1
  //   }
  //   // console.log(charMap)
  //   let max = Math.max(...Object.values(charMap))
  //   return Object.keys(charMap).find(key => charMap[key] === max)
  // }
  
  console.log(maxCharacter('hello world'))
  console.log(maxCharacter('hello worldddd'))