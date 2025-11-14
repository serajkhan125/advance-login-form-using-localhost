document.getElementById("loginform").addEventListener("submit", function(login) {
    login.preventDefault();

    const loginusername = document.getElementById("loginusername").value.trim();
    const loginpassword = document.getElementById("loginpassword").value.trim();

    if (loginusername === "") {
        alert("please enter username");
        return;
    }else if(loginpassword === ""){
        alert("please enter password!");
        return;
    };

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("No user found Please register first.");
        return;
    }

    if (loginusername !== storedUser.username) {
        alert("Username is incorrect!");
        return;
    }
    else if (loginpassword !== storedUser.password) {
        alert("Password is incorrect!");
        return;
    }
    else {
    alert("Login Successful!");
    setTimeout(() => {
        window.location.href = "../burger/index.html";
    }, 500);
}


});
