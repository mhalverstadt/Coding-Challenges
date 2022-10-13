// // You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// //Mine:
function defineSuit(card) {
  if (card.endsWith('♣')){
    return 'clubs'
  }else if (card.endsWith('♦')){
    return 'diamonds'
  }else if (card.endsWith('♥')){
    return 'hearts'
  }else{
    return 'spades'
  }
}

// //Top Solution:
function defineSuit(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts"
  }
  return s[card.charAt(card.length - 1)]
}

// //Test:
console.log (defineSuit('Q♠'))
