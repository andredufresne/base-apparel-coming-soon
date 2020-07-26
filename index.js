function getUserEmail() {
    var emailField = document.getElementById('email').value;
    var result = document.getElementById('result').value;

    if (emailField === null || emailField === "" || emailField === "Email Address") {
        alert('Login cannot be empty')     
    } 
}

var subButton = document.getElementById("button");
subButton.addEventListener('click', getUserEmail, false);

