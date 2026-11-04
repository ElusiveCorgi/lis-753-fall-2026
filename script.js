const button = document.getElementById("message-button");
const message = document.getElementById("message");
button.addEventListener("click", fuction() {
    message.hidden = !message.hidden;
});