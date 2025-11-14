document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registerform");

    form.addEventListener("submit", function (userinput) {
        userinput.preventDefault();

        const fullName = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (fullName === "") {
            alert("Please enter your full name");
            return;
        } else if (email === "") {
            alert("Please enter your email");
            return;
        } else if (username === "") {
            alert("Please enter your username");
            return;
        } else if (password === "") {
            alert("Please enter your password");
            return;
        }

        const userdata = { 
            fullName,
            email, 
            username, 
            password 
        };

        localStorage.setItem("user", JSON.stringify(userdata));

        alert("Register Successful!");
        form.reset();

        setTimeout(() => {
            window.location.href = "../login/index.html";
        }, 500);
    });

});
