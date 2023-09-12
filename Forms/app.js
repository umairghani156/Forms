
console.log("jkjahb")
var firstName = document.getElementById('firstname')
var lastName = document.getElementById('lastname')
var userName = document.getElementById('username')
var email = document.getElementById('email')
var password = document.getElementById('password')
var cPasssword = document.getElementById('cpassword')
var button = document.getElementById('button')
function signupHandler() {
    if (firstName.value == "" ||
        lastName.value == "" ||
        userName.value == "" ||
        email.value == "" ||
        password.value == "" ||
        cPasssword.value == "") {
        alert("Please fill all the required field")
    }else if(password.value!=cPasssword.value) {
        alert("Password and confirm password are not matching")
    }else if (password.value.length<8){
        alert("Password should be minimum 8 characters long")
    }
     else {
        alert("YOU signup successfully")
    }
};

//Login Page
var loginEmail=document.getElementById("loginemail");
var loginPassword=document.getElementById("Loginpassword")