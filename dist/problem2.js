"use strict";
//Initialize matrix class with rows, columns and elements properties
class Matrix {
    constructor(_row, _column) {
        this._row = _row;
        this._column = _column;
        this._elements = [];
        //Make the 2d array and fill it with 0's
        for (var i = 0; i < _row; i++) {
            this._elements[i] = [];
            for (var j = 0; j < _column; j++) {
                this._elements[i][j] = 0;
            }
        }
    }
    //Method to get rows
    get row() {
        return this._row;
    }
    //method to get columns
    get column() {
        return this._column;
    }
    //Method to set an element value in a specified position
    setElement(i, j, value) {
        if (i < this._row && j < this._column) {
            this._elements[i][j] = value;
        }
        else {
            //For when the specified position doesn't exist in the matrix
            console.log('Out of range');
        }
    }
    //Method to add two matrices
    add(M) {
        if (this._column == M._column && this._row == M._row) {
            for (var i = 0; i < this._row; i++) {
                for (var j = 0; j < this._column; j++) {
                    this._elements[i][j] += M._elements[i][j];
                }
            }
        }
        else {
            console.log('NOOP');
        }
    }
    //Method to multiply two matrices
    product(M) {
        let sum = 0;
        const matrixResult = new Matrix(this._row, M._column);
        if (this._column == M._row) {
            for (let k = 0; k < M._column; k++) {
                for (let i = 0; i < this._row; i++) {
                    let value = 0;
                    for (let j = 0; j < this._column; j++) {
                        value += this._elements[i][j] * M._elements[j][k];
                    }
                    matrixResult.setElement(i, k, value);
                }
            }
            this._row = matrixResult.row;
            this._column = matrixResult.column;
            this._elements = [];
            this._elements = matrixResult._elements;
        }
        else {
            console.log('NOOP');
        }
    }
}
//Create a matrix
const matrix1 = new Matrix(2, 2);
//Setting a value in a specified position
matrix1.setElement(0, 1, 10);
const matrix2 = new Matrix(2, 2);
const matrix3 = new Matrix(2, 1);
matrix2.setElement(1, 0, 10);
//Adding 2 matrices
matrix1.add(matrix2);
console.log('Adding two matrices: ', matrix1);
matrix1.add(matrix3);
//Setting elements for the matrices
matrix1.setElement(0, 0, 2);
matrix1.setElement(0, 1, 1);
matrix1.setElement(1, 0, 1);
matrix1.setElement(1, 1, 5);
matrix3.setElement(0, 0, 2);
matrix3.setElement(1, 0, 1);
console.log('Matrix 1', matrix1);
console.log('Matrix 2', matrix2);
console.log('Matrix 3', matrix3);
console.log('----------product of two matrices----------');
matrix1.product(matrix3);
console.log('Result: ', matrix1);
