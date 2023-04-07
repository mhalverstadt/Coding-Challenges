// Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
// Task
// You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
// The Maze array will look like

// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]
// ..with the following key

//       0 = Safe place to walk
//       1 = Wall
//       2 = Start Point
//       3 = Finish Point
//   direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
// Rules
// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

// 2. The start and finish positions will change for the final tests.

// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

// 4. If you reach the end point before all your moves have gone, you should return Finish.

// 5. If you hit any walls or go outside the maze border, you should return Dead.

// 6. If you find yourself still in the maze after using all the moves, you should return Lost.


//mine:
function mazeRunner(maze, directions) {
    let position = getPosition(2, maze)
    let finish = getPosition(3, maze)
    for(direction of directions){
        move(direction, position)
        if(finish[0] === position[0] && finish[1] === position[1]){
            return "Finish"
        }if(checkDead(position, maze) === "Dead"){
            return "Dead"
        }
    }
    return "Lost"
}

function getPosition(n, maze){
    for(let i = 0; i < maze.length; i++){
        if(maze[i].includes(n)){
            return [i, maze[i].indexOf(n)]
        }
    }
}

function checkDead(arr, maze){

    if(arr[0] >= maze.length || arr[1] >= maze.length || arr[0] < 0 || arr[1] < 0 || maze[arr[0]][arr[1]] === 1){
        return "Dead"
    }
    return maze[arr[0]][arr[1]]
}

function move(direction, position){
    if(direction === "N")return position[0]--
    if(direction === "S")return position[0]++
    if(direction === "E")return position[1]++
    if(direction === "W")return position[1]--
}

//top solution:
function mazeRunner(maze, dirs) {
    var y = maze.findIndex(arr => arr.includes(2));
    var x = maze[y].indexOf(2);
    var curPos;
    for (var i = 0; i < dirs.length; i++) {
      if (dirs[i] === 'N') y--;
      if (dirs[i] === 'S') y++;
      if (dirs[i] === 'W') x--;
      if (dirs[i] === 'E') x++;
      if (!maze[y]) return 'Dead';
      curPos = maze[y][x];
      if (curPos === 3) return 'Finish';
      if (curPos === 1 || curPos === undefined) return 'Dead';
    }
    return 'Lost';
  }

//test:
console.log(mazeRunner( 
   [[1,1,1,1,1,1,1],
    [1,0,0,0,0,0,3],
    [1,0,1,0,1,0,1],
    [0,0,1,0,0,0,1],
    [1,0,1,0,1,0,1],
    [1,0,0,0,0,0,1],
    [1,2,1,0,1,0,1]], 
    ["N","N","N","N","N","E","E","E","E","E"]))