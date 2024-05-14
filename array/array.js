/**
 * Simple array and some methods.
 * Explore for more methods.
 */
const fruits = ['apple', 'banana', 'orange'];

// Size of array
console.log(fruits.length);

// Access by index
console.log(fruits[0]); // apple

// Modify by index
fruits[0] = 'grape';
console.log(fruits[0]);

// Push
fruits.push('cherry');
console.log('After push - ', fruits);

// Pop
fruits.pop("cherry");
console.log('After pop - ', fruits);

// Manipulation methods - push, pop, shift, 
//     unshift, splice, concat, slice, indexOf, 
//     reverse, sort, length

// Shift (Remove from beginning)
const shifted = fruits.shift();
console.log('Shifted - ', shifted);
console.log('After shift - ', fruits);

// Unshift (add to beginning)
fruits.unshift('apple');
console.log('After unshift - ', fruits);

// Splice (start, total_to_delete, ...)
fruits.splice(1, 1, 'tomato');
console.log('Spliced - ',   fruits);

// Concat
const classAStudent = ['Aung Aung', 'Mg Mg'];
const classBStudent = ['Aye Aye', 'Hla Hla'];
const students = classAStudent.concat(classBStudent);
console.log('Students - ', students);

// Slice - Copy a portion of array without modifying it.
const slicedStudents = students.slice(1, 3);
console.log('Sliced students - ', slicedStudents);

// indexOf - Find the specific index of element
console.log('Index of apple using indexOf - ', fruits.indexOf('apple'));

// reverse - Reverse the order of the elements
const alpha = ['a', 'b', 'c'];
console.log('Original alpha - ', alpha);
console.log('Reversed alpha - ', alpha.reverse());

// sort - Sort elements (sort as string by default)
const numbers = [4, 2, 8, 6, 1];
console.log('String sorted by default - ', numbers.sort());

// length - Expand by setting length
const names = ['Jhon', 'Oliver'];
names.length = 4;
console.log('Expanding array length by setting it - ', names);
names.length = 1;
console.log('Truncate array length by setting it - ', names);


/**
 * Iterate arrays.
 */
// 1. Using `for`
const colors = ['blue', 'green'];
for (let i = 0; i < colors.length; i++) {
    const element = colors[i];
    console.log(`Loop colors. Index - ${i}, color - ${element}`);
}

/**
 * Nested array.
 * Example - 2D
 */
const matrix = [[1,2],[3,4]];
console.log(matrix[0][0]);