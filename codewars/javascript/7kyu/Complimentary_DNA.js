// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


//Mine:
function DNAStrand(dna){
  let result = ''
  for (let i = 0; i < dna.length; i++){
    if(dna.charAt(i) === 'A'){
      result += 'T'
    }else if(dna.charAt(i) === 'T'){
      result +='A'
    }else if (dna.charAt(i) === 'G'){
      result += 'C'
    }else if (dna.charAt(i) === 'C'){
      result += 'G'
    }
  }
  return result
}

//Top Solution:
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

//OR:
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

//Test:
DNAStrand("ATTGC")
