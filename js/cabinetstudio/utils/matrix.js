window.cabinetstudio = window.cabinetstudio || {};
window.cabinetstudio.utils = window.cabinetstudio.utils || {};

window.cabinetstudio.utils.matrix = {
    getZeroMatrix: function (rows, cols) {
        "use strict";

        var matrix = new Array(rows);
        var i, j;
        for (i = 0; i < matrix.length; i += 1) {
            matrix[i] = new Array(cols);
        }

        for (i = 0; i < rows; i += 1) {
            for (j = 0; j < cols; j += 1) {
                matrix[i][j] = 0;
            }
        }

        return matrix;
    },

    multiplyMatrices: function (leftMatrix, rightMatrix) {
        "use strict";

        var i, j, k;
        var leftRows = leftMatrix.length;
        var leftCols = leftMatrix[0].length;

        var rightRows = rightMatrix.length;
        var rightCols = rightMatrix[0].length;

        if (leftCols !== rightRows) {
            throw new window.cabinetstudio.exceptions.MatrixMultiplicationNotPossibleException("Matrix multiplication not possible as columns of first matrix not equal to rows of second matrix");
        }

        var matrix = this.getZeroMatrix(leftRows, rightCols);

        for (i = 0; i < leftRows; i += 1) {
            for (j = 0; j < rightCols; j += 1) {
                for (k = 0; k < leftCols; k += 1) {
                    matrix[i][j] += leftMatrix[i][k] * rightMatrix[k][j];
                }
            }
        }
        return matrix;
    },

    getIdentityMatrix: function (size) {
        "use strict";
        var rows = size;
        var cols = size;
        var i, j;

        var matrix = new Array(rows);
        for (i = 0; i < matrix.length; i += 1) {
            matrix[i] = new Array(cols);
        }

        for (i = 0; i < rows; i += 1) {
            for (j = 0; j < cols; j += 1) {

                if (i === j) {
                    matrix[i][j] = 1;
                } else {
                    matrix[i][j] = 0;
                }


            }
        }
        return matrix;
    }

};
