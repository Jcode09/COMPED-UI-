// Function to toggle password visibility
function togglePassword(inputId) {
    let passwordInput = document.getElementById(inputId);
    let icon = passwordInput.nextElementSibling.querySelector("i");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

// Function to check password strength
document.getElementById("newPassword").addEventListener("input", function () {
    let password = this.value;
    let strengthIndicator = document.getElementById("passwordStrength");
    let strengthText = "";
    let strengthColor = "";

    let hasUpperCase = /[A-Z]/.test(password);
    let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    let isLongEnough = password.length >= 8;

    if (password.length === 0) {
        strengthText = "";
    } else if (isLongEnough && hasUpperCase && hasSpecialChar) {
        strengthText = "Strong Password ✅";
        strengthColor = "green";
    } else if (isLongEnough && (hasUpperCase || hasSpecialChar)) {
        strengthText = "Moderate Password ⚠️";
        strengthColor = "orange";
    } else {
        strengthText = "Weak Password ❌";
        strengthColor = "red";
    }

    strengthIndicator.innerText = strengthText;
    strengthIndicator.style.color = strengthColor;
});

// Function to check if passwords match
document.getElementById("confirmPassword").addEventListener("input", function () {
    let password = document.getElementById("newPassword").value;
    let confirmPassword = this.value;
    
    if (password !== confirmPassword) {
        this.style.borderColor = "red";
    } else {
        this.style.borderColor = "green";
    }
});
