// There is a war...between alphabets!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. The letters called airstrike to help them in war - dashes and dots are spread throughout the battlefield. Who will win?

// Task
// Write a function that accepts a fight string which consists of only small letters and * which represents a bomb drop place. Return who wins the fight after bombs are exploded. When the left side wins return Left side wins!, and when the right side wins return Right side wins!. In other cases, return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3 
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3 
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.
// The * bombs kill the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );

// Example
// alphabetWar("s*zz");           //=> Right side wins!
// alphabetWar("*zd*qm*wp*bs*"); //=> Let's fight again!
// alphabetWar("zzzz*s*");       //=> Right side wins!
// alphabetWar("www*www****z");  //=> Left side wins!


//mine:
function alphabetWar(fight){
  let leftSidePower = ['0', 's', 'b', 'p', 'w']
  let rightSidePower = ['0', 'z', 'd', 'q', 'm']
  let survivors = ''
  let total = 0
  for(let i = 0; i < fight.length; i++){
    if(fight[i] !== '*' && fight[i + 1] !== '*' && fight[i - 1] !== '*'){
      survivors += fight[i]
    }
  }
  for(letter of survivors){
    if(rightSidePower.includes(letter)){
      total += rightSidePower.indexOf(letter)
    }else if(leftSidePower.includes(letter)){
      total -= leftSidePower.indexOf(letter)
    }
  }
  return total === 0 ? "Let's fight again!" : total > 0 ? "Right side wins!" : "Left side wins!"
}

//top:
function alphabetWar(fight){
  fight = fight.replace(/[a-z]\*[a-z]|[a-z]\*|\*[a-z]/g,"")
   var l = 0;
   var r = 0;
   fight.split("").forEach(i=>"1sbpw".indexOf(i)>0?l+="1sbpw".indexOf(i):l)
   fight.split("").forEach(j=>"1zdqm".indexOf(j)>0?r+="1zdqm".indexOf(j):r)
   if(l==r){return "Let's fight again!"}
   return l>r ? "Left side wins!" : "Right side wins!";
}


//test:
console.log(alphabetWar("z*z*z*zs"))
console.log(alphabetWar("zzzz*s*"))
// console.log(alphabetWar("www*www****z"))
// console.log(alphabetWar("*zd*qm*wp*bs*"))