

function calculateArea() {
    let width = document.getElementById('width').value;
    let length = document.getElementById('length').value;

    let area = width * length;

    document.getElementById('result').innerText = `Area - ${area}`;
}