function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var usernameError = document.getElementById('usernameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');


    usernameError.textContent = "";

     if (username.trim() === "") {
        usernameError.textContent = "Please enter a username!";
        return false;
    }

    emailError.textContent = "";

     if (email.trim() === "") {
        emailError.textContent = "Please enter an email address!";
        return false;
    }

    passwordError.textContent = "";

    if (password !== confirmPassword) {
        passwordError.textContent = "Passwords do not match!";
        return false;
    }

    var lengthRequirement = document.getElementById('lengthRequirement');
    var uppercaseRequirement = document.getElementById('uppercaseRequirement');
    var lowercaseRequirement = document.getElementById('lowercaseRequirement');
    var numberRequirement = document.getElementById('numberRequirement');

    lengthRequirement.style.color = "";
    uppercaseRequirement.style.color = "";
    lowercaseRequirement.style.color = "";
    numberRequirement.style.color = "";

    if (password.length < 8) {
        lengthRequirement.style.color = "red";
        passwordError.textContent = "Password must be at least 8 characters long.";
        return false; 
    }

    if (!/[A-Z]/.test(password)) {
        uppercaseRequirement.style.color = "red";
        passwordError.textContent = "Password must contain at least one uppercase letter.";
        return false; 
    }

    if (!/[a-z]/.test(password)) {
        lowercaseRequirement.style.color = "red";
        passwordError.textContent = "Password must contain at least one lowercase letter.";
        return false; 
    }

    if (!/\d/.test(password)) {
        numberRequirement.style.color = "red";
        passwordError.textContent = "Password must contain at least one number.";
        return false; 
    }

    if (!/[@$!%*?&]/.test(password)) {
        specialCharacterRequirement.style.color = "red";
        passwordError.textContent = "Password must contain at least one special character.";
        return false; 
    }

    alert("Form successfully submitted!");

    return true;
    
}

