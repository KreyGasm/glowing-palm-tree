function register() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    
    var user = {
        username: username,
        email: email,
        password: password
    };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Succesfull registration!");
    window.location.href = "login.html";
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    var savedUser = localStorage.getItem("user");

    if (savedUser) {
        savedUser = JSON.parse(savedUser);
        if (username === savedUser.username && password === savedUser.password) {
            alert("Вход выполнен успешно!");
            
        } else {
            alert("Неверное имя пользователя или пароль.");
        }
    } else {
        alert("Пользователь не найден.");
    }
}
