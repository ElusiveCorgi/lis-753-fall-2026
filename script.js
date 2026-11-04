const button = document.getElementById("message-button");
const message = document.getElementById("message");

button.addEventListener("click", function() {
    message.hidden = !message.hidden;
});