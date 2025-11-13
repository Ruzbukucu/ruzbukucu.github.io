// A function that changes the text of the message element
function updateMessage() {
    const messageElement = document.getElementById('message');
    // Check if the element exists
    if (messageElement) {
        messageElement.textContent = "JavaScript is working! The button was clicked!";
        messageElement.style.color = "red";
    }
}

// Get the button element by its ID
const button = document.getElementById('action-button');

// Add an event listener to the button
// When the button is clicked, the updateMessage function will run
if (button) {
    button.addEventListener('click', updateMessage);
}

// Log a message to the browser's console to confirm script execution
console.log("Script.js loaded successfully!");