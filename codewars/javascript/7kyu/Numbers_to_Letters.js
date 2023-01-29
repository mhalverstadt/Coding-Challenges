// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

//mine:
function switcher(x){
    let alpha = 'zyxwvutsrqponmlkjihgfedcba!? '
    return x.map(num => alpha[+num -1]).join('')
}

//top solution:
const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
const switcher = x => x.map(item => alpha[item]).join('')


test:
console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']))
console.log(switcher(['1']))