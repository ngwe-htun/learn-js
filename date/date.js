/**
 * Javascript date.
 *   1. Creating
 *   2. Retrieving date components
 *   3. Formatting date
 *   4. Date arithmetic
 *   5. Timing functions
 */

// 1. Creating
let currentDate = new Date();
let specificDate = new Date(2023, 0, 29);
let fromMilliseconds = new Date(1715786425812);
console.info('Current date - ', currentDate);
console.info('Specific date - ', specificDate);
console.info('Create from milliseconds - ', fromMilliseconds);

// 2. Retrieving date components
console.info('Current date - ', currentDate);
console.info('Year - ', currentDate.getFullYear());
console.info('Month - ', currentDate.getMonth());
console.info('Date - ', currentDate.getDate());
console.info('Hours - ', currentDate.getHours());
console.info('Minutes - ', currentDate.getMinutes());
console.info('Seconds - ', currentDate.getSeconds());

// 3. Formatting date
console.log('To locale date string - ', currentDate.toLocaleDateString());
console.log('To locale time string - ', currentDate.toLocaleTimeString());

// 4. Date arithmetic
let date = new Date();
date.setDate(date.getDate() - 3);
console.info('Subtract 3 days - ', date);
date.setDate(date.getDate() + 3);
console.info('Added 3 days - ', date);

/**
 * 5. Timing functions
 *   - setTimeout
 *   - setInterval
 */
setTimeout(function () {
    console.info('Logged after 3 second');
}, 3000);

let count = 0;
let intervalId = setInterval(function () {
    console.log('Logged every 1 second');
    if (count >= 5) {
        clearInterval(intervalId);
    }
    count ++;
}, 1000)
