// Submit feedback function
const submitBtn = document.getElementById('submitBtn')
submitBtn.onclick = submitFeedback;

// capture on enter
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
});

function submitFeedback() {

    // Get all vales simply by id
    const job = document.getElementById('job').value;
    const age = document.getElementById('age').value;
    const mane = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const productType = document.getElementById('productType').value;
    const designation = document.getElementById('designation').value;
    const feedbackText = document.getElementById('feedbackText').value;
    
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userJob').inner = job;
    document.getElementById('userName').innerHTML = mane;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedbackText
    // display it
    document.getElementById('userInfo').style.display = 'block';
}