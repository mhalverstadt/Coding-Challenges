// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

//Mine:
function expandedForm(num) {
    let zeros = String(num)
    let result = ''
    for(let i = 0; i < zeros.length; i++){
        if(zeros.charAt(i) !== '0'){
            result = result.concat(`${zeros.charAt(i)}${'0'.repeat((zeros.length)-(i+1))} + `)
        }
    }
    return result.slice(0,(result.length-3))
  }

//Top Solution:
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");

//Test:
console.log(expandedForm(70304))