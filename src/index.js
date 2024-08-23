
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  let isReverse = false;
  if (matrix !== undefined) {
      for (let i = 0; i < matrix.length;i++) {
      if (isReverse) {
          for (let j = matrix[i].length-1; j>=0;j--) {
              result.push(matrix[i][j]);    
          }
      } else {
          for (let j = 0; j<matrix[i].length; j++) {
              result.push(matrix[i][j]);
          }  
      }
      isReverse = !isReverse;
  }
  } 
  
  return result;
}
