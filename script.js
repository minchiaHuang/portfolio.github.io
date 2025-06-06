

//MESSAGE INPUT
function handleInput(event) {
  event.preventDefault();

  const name = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value;
  const message = document.getElementById("messageInput").value;

  console.log("Name", name);
  console.log("Email", email);
  console.log("message", message)
}