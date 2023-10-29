function createMatrix(rows, columns) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        const cellValue = Math.floor(Math.random() * 100);
        row.push(cellValue);
      }
      matrix.push(row);
    }
    return matrix;
  }
  
  function transposeMatrix(matrix) {
    const transposedMatrix = [];
    for (let i = 0; i < matrix[0].length; i++) {
      const row = [];
      for (let j = 0; j < matrix.length; j++) {
        row.push(matrix[j][i]);
      }
      transposedMatrix.push(row);
    }
    return transposedMatrix;
  }
  
  function matrixMultiplication(matrix1, matrix2) {
    const resultMatrix = [];
    for (let i = 0; i < matrix1.length; i++) {
      const row = [];
      for (let j = 0; j < matrix2[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < matrix2.length; k++) {
          sum += matrix1[i][k] * matrix2[k][j];
        }
        row.push(sum);
      }
      resultMatrix.push(row);
    }
    return resultMatrix;
  }
  
  function complexOperation() {
    const matrixA = createMatrix(5, 5);
    const matrixB = createMatrix(5, 5);
    const transposedMatrixA = transposeMatrix(matrixA);
    const resultMatrix = matrixMultiplication(transposedMatrixA, matrixB);
    console.log('Resulting Matrix:', resultMatrix);
  }
  
  complexOperation();
  

function generateRandomArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
      array.push(Math.floor(Math.random() * 100));
    }
    return array;
  }
  
  function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  }
  
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  function primeCheck(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  function complexFunction() {
    const array = generateRandomArray(100);
    bubbleSort(array);
    const fibResult = fibonacci(15);
    const primeResult = primeCheck(37);
    console.log('Array sorted:', array);
    console.log('Fibonacci result:', fibResult);
    console.log('Is 37 prime?', primeResult);
  }
  
  complexFunction();
  
