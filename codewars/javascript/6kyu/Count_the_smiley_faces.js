// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// //Mine:
function countSmileys(arr) {
    let result = []
    let eyes = [';', ':']
    let mouth = [')', 'D']
    let nose = ['-', '~']
    for(const element of arr){
        if (element.length === 2 && eyes.includes(element[0]) && mouth.includes(element[1])){
            result.push(element)
        }else if (element.length === 3 && nose.includes(element[1]) && eyes.includes(element[0]) && mouth.includes(element[2])){
            result.push(element)
        }
    }
    return result.length
}
// //Top Solution:
function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
  }

// //Test:
console.log (countSmileys([';]', ':[', ';*', ':$', ';-D']))
console.log (countSmileys([':D',':~)',';~D',':)']))
console.log (countSmileys([':)',':(',':D',':O',':;']))
console.log (countSmileys([':~)' , ':o>' , ':~>' , ':o)', ';)' , ':o>' , ';)']))