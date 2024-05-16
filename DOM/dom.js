// Access by ID
let h2 = document.getElementById('h2');
console.info('Accessed by ID - ', h2);

// Access by classname
let aClass = document.getElementsByClassName('grr');
console.info('Accessed by class name - ', aClass);

// Access by tag
let aTag = document.getElementsByTagName('h2');
console.info('Accessed by tag name - ', aTag);

// Access by query selector
let qId = document.querySelector('#h4');
let qClass = document.querySelector('.grr');
console.info(`Query selector access by ID - `, qId);
console.info(`Query selector access by class - `, qClass);

// Changing content
document.getElementById('h2').innerText = 'Not Heading 2';

// Changing attributes
document.getElementById('my-image').setAttribute('src', 'hello.png');
document.getElementById('my-image').setAttribute('alt', 'hello.png');

// Add element
let sec = document.createElement('p').textContent = 'Second';
document.getElementById('myDiv').append(sec);

// Clone
let h3 = document.getElementById('h3');
let cloned = h3.cloneNode();
console.info(`Cloned node - `, cloned);

/**
 * SelectorAll
 *   - By class
 *   - By ID
 *   - By tag
 *   - classList
 */
// by class
document.querySelectorAll('.grr');
// by id
document.querySelectorAll('#h3');
// by tag
document.querySelectorAll('p');
// classList - add, remove, toggle, contains, replace, item, toString
document.getElementById('h3').classList
//
