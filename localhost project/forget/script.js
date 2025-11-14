document.querySelector("form").addEventListener("submit", function (forget) {
    forget.preventDefault();

    const emailInput = document.getElementById("email").value.trim();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("No user found! Please register first.");
        return;
    }

    if (emailInput === storedUser.email) {
        alert("Email Match");
        window.location.href = "/forget/newpassword.html";
    } else {
        alert("Email Not Found");
    }
});
