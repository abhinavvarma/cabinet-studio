function MatrixUtils() {
	
	/**
	  * function getZeroMatrix(rows, cols) 
	  * @param rows, cols
	  * @returns zeroMatrix
	 */

	function getZeroMatrix(rows, cols) {

		var matrix = new Array(rows);
		for (var i = 0; i < matrix.length; i++) {
			matrix[i] = new Array(cols);
		}

		for (var i = 0; i < rows; i++) {
			for (var j = 0; j < cols; j++) {
				matrix[i][j] = 0;
			}
		}

		return matrix;
	}
	
	/**
	  * function multiplyMatrices(leftMatrix, rightMatrix) 
	  * @param Leftmatrix, rightMatrix
	  * @returns resultMatrix
	 */  

	function multiplyMatrices(leftMatrix, rightMatrix) {

		var leftRows = leftMatrix.length;
		var leftCols = leftMatrix[0].length;

		var rightRows = rightMatrix.length;
		var rightCols = rightMatrix[0].length;

		if (leftCols != rightRows) {
			System.out.println("Matrix Multipication not possible");
		}

		var matrix = getZeroMatrix(leftRows, rightCols);

		for (var i = 0; i < leftRows; i++) {
			for (var j = 0; j < rightCols; j++) {
				for (var k = 0; k < leftCols; k++) {
					matrix[i][j] += leftMatrix[i][k] * rightMatrix[k][j];
				}
			}
		}
		return matrix;
	}

}
