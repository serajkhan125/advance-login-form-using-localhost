document.getElementById("passwordform").addEventListener("submit", function (newpassword) {
    newpassword.preventDefault();

    const newPass = document.getElementById("newpassword").value.trim();

    if (newPass === "") {
        alert("Please enter your new password");
        return;
    }

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("No user data found!");
        return;
    }

    storedUser.password = newPass;

    localStorage.setItem("user", JSON.stringify(storedUser));

    alert("Password changed successfully!");

    setTimeout(() => {
        window.location.href = "/login/index.html";
    }, 500);
});
