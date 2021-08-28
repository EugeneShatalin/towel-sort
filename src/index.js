
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) {
    return [];
  }
  newArr = [];
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if((i + 1) % 2) {
        newArr.push(matrix[i][j])
      } else {
        newArr.push(matrix[i][matrix[i].length - (j + 1)])
      }
    }
  }
  return newArr;
}
