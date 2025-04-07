// Function to change text content dynamically
document.getElementById("changeTextButton").addEventListener("click", function() {
    document.getElementById("message").textContent = "The text has been changed!";
});

// Function to toggle the text color between red and black
document.getElementById("toggleColorButton").addEventListener("click", function() {
    let messageElement = document.getElementById("message");
    if (messageElement.style.color === "red") {
        messageElement.style.color = "black";
    } else {
        messageElement.style.color = "red";
    }
});

// Function to add a new element to the page
document.getElementById("addElementButton").addEventListener("click", function() {
    let newElement = document.createElement("p");
    newElement.textContent = "This is a new paragraph added dynamically!";
    document.getElementById("content-section").appendChild(newElement);
});

// Function to remove an element from the page
document.getElementById("removeElementButton").addEventListener("click", function() {
    let messageElement = document.getElementById("message");
    messageElement.remove();
});
