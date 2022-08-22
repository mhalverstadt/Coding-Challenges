// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x and y attributes (X and Y in C#) attributes.

// Write a function calculating distance between Point a and Point b.

// Tests round answers to 6 decimal places.

//Mine:
function distanceBetweenPoints(a, b) {
    let z = (b.x - a.x)**2 + (b.y - b.x)**2
    return Math.sqrt(z)
  }

//Top Solution:
function distanceBetweenPoints(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

// Test:
console.log()
