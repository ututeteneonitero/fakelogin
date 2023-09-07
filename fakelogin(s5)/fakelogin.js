let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');
let admin = document.getElementById("admin");
let basic = document.getElementById("basic");
let loginButton = document.getElementById("loginButton");
let logoutButton = document.getElementById("logoutButton");
let registerButton = document.getElementById("registerButton");

admin.style.display = "none";
basic.style.display = "none";
logoutButton.style.display = "none";



function onLogin() {

    logoutButton.style.display = "block";
    registerButton.style.display = "none";

    if (usernameInput.value == "admin" && passwordInput.value == "admin123") {
        // localStorage.setItem("role", "admin");
        usernameInput.style.display = "none";
        passwordInput.style.display = "none";
        loginButton.style.display = "none";
        basic.style.display = "none";
        admin.style.display = "block";
    } else if (usernameInput.value == localStorage.getItem("key") && passwordInput.value == localStorage.getItem("value")){
        usernameInput.style.display = "none";
        passwordInput.style.display = "none";
        loginButton.style.display = "none";
        // localStorage.setItem("role", "basic");
        basic.style.display = "block";
        admin.style.display = "none";
    }
    else{
        location.reload();
    }
}

if (localStorage.getItem("username")) {
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    logoutButton.style.display = "block";
    if (localStorage.getItem("role") == "admin") {
        admin.style.display = "block";
        basic.style.display = "none";
    } else {
        admin.style.display = "none";
        basic.style.display = "block";
    }

}

function onLogout() {
    location.reload();
    registerButton.style.display = "block"
    usernameInput.style.display = "block";
    passwordInput.style.display = "block";
    basic.style.display = "none"
    admin.style.display = "none"
    loginButton.style.display = "block";
    logoutButton.style.display = "none";
}

function onregister() {
    usernameInput.style.display = "block";
    passwordInput.style.display = "block";
    loginButton.style.display = "none";
    logoutButton.style.display = "none";
    if (usernameInput.value == localStorage.getItem("key") && passwordInput.value == localStorage.getItem("value")){
        usernameInput.style.display = "block";
        passwordInput.style.display = "block";
        loginButton.style.display = "none";
        logoutButton.style.display = "none";
        
    }
    else if (usernameInput.value.length !=0 && passwordInput.value.length != 0){
        localStorage.setItem(usernameInput.value, passwordInput.value);
        location.reload();
    }
}