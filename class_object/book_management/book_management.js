const books = [];

// Add book
function addBook() {
    let book = {
        Name: document.getElementById('bookName').value,
        Author: document.getElementById('authorName').value,
        PageNumber: document.getElementById('pagesNumber').value,
        Description: document.getElementById('bookDescription').value
    };
    if (book.Name && book.Author && book.PageNumber && book.Description) {
        books.push(book);
        displayBook();
        clearInput();
    } else {
        alert('Please fill the required filed(s)');
    }
}

// Display book
function displayBook() {
    const bookToDisplay = books.map((book, index) => {
        return `<h2>Book : ${index + 1}</h2>
        <p>Name : ${book.Name}</p>
        <p>Author : ${book.Author}</p>
        <p>Description : ${book.Description}</p>
        <p>No. of pages : ${book.PageNumber}</p>
        <button onClick="deleteBook(${index})">Delete</button>
        `;
    }).join('');
    document.getElementById('display-book').innerHTML = bookToDisplay;
}

// delete
function deleteBook(index) {
    books.splice(index, 1);
    displayBook();
}

// clear input
function clearInput() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}