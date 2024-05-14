// Button click with event listener-------------------------
const btnClick = document.getElementById('btn-click');
btnClick.addEventListener('click', handleBtnClick);

function handleBtnClick() {
    console.log('Clicked !');
}

// Mouse move------------------------------------------------
const moveArea = document.getElementById('moveArea');
moveArea.addEventListener('mousemove', function(event) {
    console.log(`Mouse coordinate. X - ${event.clientX}, Y - ${event.clientY}`);
});

// Keyboard events ------------------------------------------
const keyInput = document.getElementById('keyboard-input');
keyInput.addEventListener('keydown', function (e) {
    console.log('Key pressed down');
});
keyInput.addEventListener('keyup', function() {
    console.log('Key release');
});
keyInput.addEventListener('keypress', function() {
    console.log('Key pressed');
});

// Form submit------------------------------------------------
const myForm = document.getElementById('my-form');
myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Form submitted');
});

let formInput = document.getElementById('form-input');
// focus
formInput.addEventListener('focus', function() {
    console.log('Input focused');
});
// blur
formInput.addEventListener('blur', function () {
    console.log('Blurred'); 
});


// Window load, resize ----------------------------------
window.addEventListener('load', function () {
    console.log('Resource loaded !');
})
window.addEventListener('resize', function () {
    console.log('Window is resized');
});
window.addEventListener('scroll', function() {
    console.log('Scrolled');
});