// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

//Mine:
function getSize(width, height, depth){
  result = []
  result.push((depth*width+width*height+depth*height)*2)
  result.push(width*height*depth)
  return result
}


//Top Solution: 
function getSize(width, height, depth){
  var box = { width: width, height:height, depth:depth};
  
  return [getArea(box), getVolume(box)];
}


function getArea(box){
  return (2 * (box.depth * box.height)) + (2 * (box.width * box.height)) + (2 * (box.width * box.depth));
}

function getVolume(box){
  return box.width * box.height * box.depth;
}


//Test:
getSize(4, 2, 6)
getSize(10,10,10)