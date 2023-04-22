const emailInput = document.getElementById("emailForm");
const passwordInput = document.getElementById("passwordForm");
const loginButton = document.getElementById("button");

function login() {
  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === "admin" && password === "1234") {
    window.location.href = "index2.html";
  } else {
    alert("Niepoprawny login lub hasło!");
  }
}

loginButton.addEventListener("click", function () {
  login();
});
