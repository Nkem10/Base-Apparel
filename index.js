document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("subscribe-form");
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValue) {
            errorMessage.textContent = "Please enter an email address.";
            errorMessage.style.display = "block";
        } else if (!emailPattern.test(emailValue)) {
            errorMessage.textContent = "Please enter a valid email address.";
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
            // Handle successful submission (e.g., sending to server)
            alert("Subscription successful!");
        }
    });
});
