let count = 0;

// Increase counter
function increaseFollowerCount() {
    count ++;
    displayCount();
    checkFollowerCount();
}

// Display counter
function displayCount() {
    document.getElementById('countDisplay').innerHTML = count;
}

// Check count
function checkFollowerCount() {
    if (count === 10) {
        alert('Your Instagram post gained 10 followers! Congratulations!');
    }
    if (count === 20) {
        alert('Your Instagram post gained 20 followers! Keep it up!');
    }
}

// Reset
function resetFollowerCount() {
    count = 0;
    displayCount();
    alert('Follower count is reset');
}