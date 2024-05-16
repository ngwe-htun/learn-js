/**
 * Javascript string.
 *    1. Create simple string
 *    2. String concatenation
 *    3. String length
 *    4. Access character
 *    5. Changing case
 *    6. String searching
 *    7. String extraction
 *    8. Replace substring
 *    9. Splitting string
 *   10. Trimming
 *   11. Template literals
 */

// 1. simple string
const firstString = 'This is first string';
const secondString = 'This is second string';

// 2. Concat
const concatString = firstString + ', ' + secondString;
console.log('Concatenated string - ', concatString);

// 3. Length
let length = concatString.length;
console.log("String length - ", length);

// 4. Access character
let fruit = 'Orange';
console.log(`First character of ${fruit} - ${fruit[0]}`);

// 5. Changing case
let car = 'Toyota';
console.log(`Uppercase of ${car} - ${car.toUpperCase()}`);
console.log(`Lowercase of ${car} - ${car.toLowerCase()}`);

// 6. String searching - includes, indexOf
let cars = 'toyota, ford';
console.log(`Is string include ford - ${cars.includes('ford')}`);
console.log(`Index of ford in string - ${cars.indexOf('ford')}`);

/**
 * 7. String extraction
 *   - substring
 *   - slice
 */
let greeting = 'Hello, World';
console.log('Slice - ', greeting.slice(0, 5));
console.log("Substring - ", greeting.substring(0, 5));

// 8. Replace substring
let wafer = 'chocolate flavoured';
let modifiedWafer = wafer.replace('chocolate', 'strawberry' );
console.log('Replace chocolate with strawberry - ', modifiedWafer);

// 9. Splitting string
let splittedWafer = wafer.split(' ').join(', ');
console.info('Splitted wafer - ', splittedWafer);

// 10. Trimming
let spaceString = ' trim me ';
console.info(`Trimmed - "${spaceString.trim()}"`);
console.info(`End trimmed - "${spaceString.trimEnd()}"`);
console.info(`Start trimmed - "${spaceString.trimStart()}"`);

// 11. Template literals
let price = 15;
console.info(`Price : $${price}`);