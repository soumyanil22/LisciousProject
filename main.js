function signup(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
      username: username,
      email: email,
      password: password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
     alert("singup seccesfull");
  }
  function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (!user) {
      alert("please enter username password");
    } else if (
      username == data.username &&
      email == data.email &&
      password == data.password
    ) {
      alert("login seccesfull");
      window.location.href = "index.html";
    } else {
      alert("user does not exist");
    }
  }