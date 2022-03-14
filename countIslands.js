/*

Given an m x n 2D binary grid "grid" which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

*/

const numIslands = function(grid) {
    let islandCount = 0

  for(let row = 0; row < grid.length; row++){
    for(let column = 0; column < grid[row].length; column++){
      if(grid[row][column] === '1'){
        islandCount++
        terraform(row, column, grid)
      }
    }
  }
  
  return islandCount
};

const terraform = function(row, column, grid){
  if(grid[row] === undefined || grid[row][column] === undefined || grid[row][column] === '0') return;
  
  grid[row][column] = '0'
  terraform(row + 1, column, grid)
  terraform(row - 1, column, grid)
  terraform(row, column + 1, grid)
  terraform(row, column - 1, grid)
}

console.log(numIslands([
  ["0","0","0","0","0"],
  ["0","0","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))

/*

Emme:
Runtime: 93 ms, faster than 80.96% of JavaScript online submissions for Number of Islands.
Memory Usage: 45 MB, less than 66.96% of JavaScript online submissions for Number of Islands.

Yash:
Runtime: 89 ms, faster than 84.49% of JavaScript online submissions for Number of Islands.
Memory Usage: 44.9 MB, less than 71.46% of JavaScript online submissions for Number of Islands.

*/
