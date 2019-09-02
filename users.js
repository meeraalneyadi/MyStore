var usersData;
var promise = fetch("./users.json");
promise
  .then(response => {
    return response.json();
  })
  .then(data => {
    usersData = data;
  });

function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  for (value of usersData) {
    if (value.username == username && value.password == password) {
      localStorage.setItem("username", username);

      window.location = "products.html";
    }
  }
}
function logout() {
  alert("You are about to logout");
  window.location.assign("index.html");
}
