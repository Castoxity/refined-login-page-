function submitForm(event) {
    event.preventDefault(); // Prevent form submission
    var inputField = document.getElementById('email');
    if (!inputField.value.trim()) {
        alert('Please fill in the input field.'); // Show an alert or other message
    } else {
        window.location.href = 'verification.html';

    }
}
