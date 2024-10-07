// script.js

// Select form and input elements
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const errorMessage = document.querySelector(".error-message");

// Function to validate the email using a regex pattern
function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// Event listener for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = emailInput.value.trim();

  // Validate email and show error if invalid
  if (email === "" || !validateEmail(email)) {
    errorMessage.textContent = "Please enter a valid email address.";
    emailInput.classList.add("error-border");
  } else {
    errorMessage.textContent = "";
    emailInput.classList.remove("error-border");
    alert("Email successfully submitted!");
  }
});
