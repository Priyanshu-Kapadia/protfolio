const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");

const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
})

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
})

function validateForm() {
    var x = document.forms["mySignup"]["username"].value;
    if (x == "") {
      alert("Username must be filled out");
      return false;
    }
    
    var emailID = document.forms["mySignup"]["email"].value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
     
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID (Use . and @ symbol)")
        return false;
    }

    var pass = document.forms["mySignup"]["password"].value;
    if(pass.length < 8 || pass.length >16) {
        alert('Password length is between 8 and 16')
        return false;
    }
}

function loginvalidate() {
    var user = document.forms["mySignin"]["user"].value;
    if (user == "") {
        alert("Username must be filled out");
        return false;
    }

    var password = document.forms["mySignin"]["pass"].value;
    if (password == "" || (password.length < 8 || password.length >16)) {
        alert("Password is not filled or incorrect");
        return false;
    }
}