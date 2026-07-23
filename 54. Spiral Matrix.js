/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let columnLimit = matrix[0].length;
    let rowLimit = matrix.length;

    let result = [];

    let column = 0;
    let row = 0;
    let layer = 0;

    outer: for (; rowLimit > 0;) {
        for (let i = 0; i < columnLimit - layer; i++) {
            result.push(matrix[row][column]);
            if (matrix.length * matrix[0].length === result.length)
                break outer;

            column++;
        }
        column--;

        for (let j = 0; j < rowLimit - 1 - layer; j++) {
            row++;

            result.push(matrix[row][column]);
            if (matrix.length * matrix[0].length === result.length)
                break outer;
        }

        for (let i = 0; i < columnLimit - 1 - layer; i++) {
            column--;

            result.push(matrix[row][column]);
            if (matrix.length * matrix[0].length === result.length)
                break outer;
        }

        rowLimit--;
        columnLimit--;

        for (let j = 0; j < rowLimit - 1 - layer; j++) {
            row--;

            result.push(matrix[row][column]);
            if (matrix.length * matrix[0].length === result.length)
                break outer;
        }

        column++;
        layer++;
    }

    return result;
};