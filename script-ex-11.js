const buttons = document.querySelectorAll(".details-button");
const details = document.querySelectorAll(".program-details");

    console.log(buttons);

    // hide all details divs
    details.forEach(function(item) {
      item.style.display = "none";
    });

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    console.log(button.dataset.target + " was clicked!");

     details.forEach(function(item) {
      item.style.display = "none";
    });

    // find and show the relevant program details
    const target = button.dataset.target;
    document.getElementById(target).style.display = "block";
  });
});
