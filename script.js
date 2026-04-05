document.getElementById("contactForm").addEventListener("submit", function(e) {
e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;
let msg = document.getElementById("formMsg");

if(name === "" || email === "" || message === "") {
msg.textContent = "Please fill all fields";
msg.style.color = "red";
} else {
msg.textContent = "Form submitted successfully!";
msg.style.color = "green";
}
});