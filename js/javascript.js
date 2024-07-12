document.getElementById("login-button").addEventListener("click", function (e) {
  let userName = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (userName != "maktab-114-quiz" || password != "M@ktab114") {
    alert("login information is incorrect!");
  } else {
    window.location.href = "../todo.htm";
  }
});
