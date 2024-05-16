let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

// Start test
function startTest () {
    document.getElementById('inputText').innerText = testText;

    // reset
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();
}

// End test
function endTest() {
    endTime = new Date().getTime();

    document.getElementById("userInput").readOnly = true;

    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;

    // Split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0;

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";
}