// Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

// choose a text in capital letters including or not digits and non alphabetic characters,

// shift each letter by a given number but the transformed letter must be a letter (circular shift),
// replace each digit by its complement to 9,
// keep such as non alphabetic and non digit characters,
// downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
// reverse the whole result.
// Example:
// your text: "BORN IN 2015!", shift 1

// 1 + 2 + 3 -> "CPSO JO 7984!"

// 4 "CpSo jO 7984!"

// 5 "!4897 Oj oSpC"

// With longer passphrases it's better to have a small and easy program. Would you write it?


function playPass(s, n) {
    let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let threeSteps = s.split('').map(char => {
        if(parseInt(char) || char === '0'){
            return 9 - parseInt(char)
        }else if(alph.includes(char)){
            if(alph.indexOf(char) + n > 25){
                return alph[alph.indexOf(char) + n - 26]
            }
            return alph[alph.indexOf(char) + n]
        }else{
            return char
        }
    })
    let fourthStep = threeSteps.map((char, idx) => {
        if(alph.includes(char) && idx % 2 !== 0){
            return char.toLowerCase()
        }else{
            return char
        }
    })
    return fourthStep.reverse().join('')
}

//top solution:
const playPass = (s, n) => s.split("").map((letter, index) => 
  {
    var digit = parseInt(letter);
    if (!isNaN(digit)){
      return 9 - digit;
    }
    var charCode = letter.charCodeAt() - 65;
    if ((charCode >= 0) && (charCode < 26)){
      charCode += n;
      letter = String.fromCharCode(charCode % 26 + 65);
      if (index % 2 == 1){
        letter = letter.toLowerCase();
      }
    }
    return letter;
  }).reverse().join("");




//test:
console.log(playPass("BORN IN 2015!", 1))
console.log(playPass("I LOVE YOU!!!", 1))
console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2))