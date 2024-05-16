/**
 * Math in JS.
 *   1. Rounding
 *   2. Exponentiation and logarithms
 *   3. Random number generation
 */

// 1. Rounding
let number = 3.6;
let ceiled = Math.ceil(number);
let rounded = Math.round(number);
let floored = Math.floor(number);
console.info(`Original number - ${number}`);
console.info(`Ceil number - ${ceiled}`);
console.info(`Floored number - ${floored}`);
console.info(`Rounded number - ${rounded}`);

/**
 * 2. Exponentiation and logarithms
 *   - Power
 *   - Square root
 *   - Log
 */
let base = 2;
let exponent = 3;
console.info(`${base} power ${exponent} - ${Math.pow(base, exponent)}`);
console.info(`Square root of ${base} - ${Math.sqrt(base)}`);
console.info(`Natural log of ${base} - ${Math.log(base)}`);

// 3. Random number generation
let randNumber = Math.random();
console.log('Random number - ', randNumber);

/**
 * Generate random quote.
 * 
 * @returns string
 */
function generateQuote() {
    const quotes = [
        "Dream big and dare to fail.",
        "Happiness depends upon ourselves.",
        "Change your thoughts and you change your world.",
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "Life is 10% what happens to us and 90% how we react to it."
    ];
    let randomIndex = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote-to-display').innerText = quotes[randomIndex];
    

}