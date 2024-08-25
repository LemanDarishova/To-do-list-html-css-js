const toggles = document.querySelectorAll(".toggle-pass-icon");
const input = document.querySelector(".password");

toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        if (input.type === "password") {
            input.type = "text";
            toggle.classList.replace("fa-eye-slash", "fa-eye");
        } else {
            input.type = "password";
            toggle.classList.replace("fa-eye", "fa-eye-slash");
        }
    });
});


var arr = [
    { username: 'lemanmvv', password: 'pass1234' },
    { username: 'lemanmv', password: 'pass123' },
    { username: 'lemanm', password: 'pass12' }
];

function LoginPage() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var valid = false;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].username === username && arr[i].password === password) {
            valid = true;
            break;
        }
    }

    if (valid) {
        window.location.href = "home.html";    
    } else {
        alert("Incorrect username or password.");
    }
}
document.getElementById("login-button").addEventListener("click", LoginPage);         