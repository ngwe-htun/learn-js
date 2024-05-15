const open = 'O';
const close = 'X';
const seats = [
    [open, open, open],
    [open, open, open],
    [open, open, open]
];

function bookSeat(row, col) {
    if (seats[row][col] == open) {
        seats[row][col] = close
        updateSeatStatus(row, col, 'booked');
        alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is booked`);
    } else {
        alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is already taken`);
    }
    console.log(seats);
}

function updateSeatStatus(row, col, status) {
    const s = document.getElementsByClassName('seat');
    const index = row * 3 + col;
    s[index].classList.remove('available');
    s[index].classList.add(status);
}