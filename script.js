const button = document.getElementById("message-button");
const message = document.getElementById("message");

button.addEventListener("click", function() {
    message.hidden = !message.hidden;
    
    if (!message.hidden) {
        button.textContent = "Hide Message";
        document.body.style.backgroundColor = "aqua"; // Changes background to aqua
    } else {
        button.textContent = "Show Message";
        document.body.style.backgroundColor = ""; // Resets background when hidden
    }
});