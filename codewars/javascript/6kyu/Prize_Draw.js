// To participate in a prize draw each one gives his/her firstname.

// Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

// The length of the firstname is added to the sum of these ranks hence a number som.

// An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.

// Example:
// names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
// weights: [1, 4, 4, 5, 2, 1]

// PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
// The *weight* associated with PauL is 2 so PauL's *winning number* is 54 * 2 = 108.
// Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.

// Task:
// parameters: st a string of firstnames, we an array of weights, n a rank

// return: the firstname of the participant whose rank is n (ranks are numbered from 1)

// Example:
// names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
// weights: [1, 4, 4, 5, 2, 1]
// n: 4

// The function should return: "PauL"
// Notes:
// The weight array is at least as long as the number of names, it may be longer.

// If st is empty return "No participants".

// If n is greater than the number of participants then return "Not enough participants".

// See Examples Test Cases for more examples.


//mine:
function rank(st, we, n) {
  if(st.length === 0) return "No participants";
  const nameArr = st.split(',')
  if(n > nameArr.length) return "Not enough participants";
  const alpha = '0abcdefghijklmnopqrstuvwxyz'
  let storage = []
  

  for(const [i, person] of nameArr.entries()){
    let som = person.toLowerCase().split('').reduce((acc, letter) => acc += alpha.indexOf(letter),0) + person.length
    storage.push([ som * we[i], person.toLowerCase()])
  }

  let ranks = storage.sort((a,b) => b[0] - a[0])
  console.log(ranks)
  let winningNumber = ranks[n - 1][0]
  console.log(winningNumber)
  let winners = ranks.filter(el => el[0] === winningNumber).sort()
  console.log(winners)
  let winningIdx = ranks.map(pair => pair[0]).indexOf(winningNumber)
  console.log(winningIdx)
  for(let i = 0; i < winners.length; i++){
    ranks.splice(winningIdx, 1, winners[i])
    winningIdx++
  }
  console.log(ranks)
  return `${ranks[n - 1][1][0].toUpperCase()}${ranks[n - 1][1].slice(1)}`
}

//top:
function rank(st, we, n) {
	let names = st.split(',')
  if (!st.length) return 'No participants'
  if (names.length < n) return 'Not enough participants'
  return names.map((_, i) => ({
    	name: _,
      s: [..._.toLowerCase()].reduce((a, b) => a + b.charCodeAt() - 95, 0) * we[i]
    }))
    .sort((a, b) => a.name > b.name)
    .sort((a, b) => b.s - a.s)
    [n - 1].name
}

//or:
function rank(names,weights, rank) {
  if (!names.length) return 'No participants' 
  var a = names.split(',').map (
       (name,i) => [name,weights[i]*[...name.toUpperCase()].reduce((t,c)=>t+c.charCodeAt()-64,name.length)]
     ).sort((p1,p2) => p2[1]-p1[1] || p1[0]>p2[0])
   return rank>a.length ? 'Not enough participants' : a[rank-1][0] 
}

//test:
// console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,benjamin", [4, 2, 1, 4, 3, 1, 2, 2], 4)) //Benjamin
// console.log(rank("Elijah,Chloe,Elizabeth,Matthew,Natalie,Jayden", [ 1, 3, 5, 5, 3, 6 ], 2))
console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8))