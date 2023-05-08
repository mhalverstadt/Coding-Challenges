// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []


//mine:
function myLanguages(results) {
    let langArr = Object.entries(results).filter(lang => lang[1] >= 60)
    let sortedLangs = langArr.sort((a,b) => b[1] - a[1])
    let result = []
    for(lang of sortedLangs){
        result.push(lang[0])
    }
    return result
}

//top solution:
function myLanguages(results) {
    return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
  }