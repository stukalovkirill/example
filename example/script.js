const form = document.getElementById("feedback-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "") {
    formMessage.textContent = "input Name";
  } else if (email === "") {
    formMessage.textContent = "input Email";
  } else if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "no valid Email";
  } else if (message === "") {
    formMessage.textContent = "no valid Message";
  } else {
    formMessage.textContent = "";
    alert("##ACCEPT##OK#::No more service,sorry##");
    form.reset();
  }
});
