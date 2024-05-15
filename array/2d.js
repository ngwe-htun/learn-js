/**
 * Nested array.
 * Example - 2D
 */
const matrix = [[1,2],[3,4]];
console.log(matrix[0][0]);

// Iterate 
for (let i = 0; i < matrix.length; i++) {
    console.log(`Loop - (${i}), value - `, matrix[i]);
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Loop - (${i}, ${j}), value - `, matrix[i][j]);
    }
}
