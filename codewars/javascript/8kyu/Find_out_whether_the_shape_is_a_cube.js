// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: the sides must be integers

//Mine:
var cubeChecker = function(volume, side){
  if (side <= 0 || volume <= 0){
    return false
  }
  return volume === side**3
};

//Top Solution:
var cubeChecker = function(v, s){
  return s>0&&v==s*s*s;
};

//Test:
console.log()
