function validateForm() {
    let emailVar = document.forms["footerForm"]["email"].value;
    let nameVar = document.forms["footerForm"]["name"].value;

    
    if (emailVar == "") {
      alert("Email cannot be empty");
      return false;
    }

    if(nameVar == ""){
        alert("Name cannot be empty");
        return false;
      }
      
    const splitEmail = emailVar.split("@");
    console.log(splitEmail);
    if(splitEmail[1] != "gmail.com"){
        alert("Only gmail is allowed");
        return false;
    }

    return confirm("Your response is submitted");
}


document.addEventListener('DOMContentLoaded', function () {
    var emailField = document.getElementById('email');
    var passwordField = document.getElementById('name');

    emailField.addEventListener('focus', function () {
        emailField.style.border = '4px solid #e88a00';
    });

    passwordField.addEventListener('focus', function () {
      passwordField.style.border = '4px solid #e88a00';
    });

    passwordField.addEventListener('blur', function () {
        passwordField.style.border = '1px solid #ccc';
    });

    emailField.addEventListener('blur', function () {
      emailField.style.border = '1px solid #ccc';
    });
});


function toggleButton() {
  var checkbox = document.getElementById('checkbox');
  var button = document.getElementById('myButton');

  if(checkbox.checked == true)
    button.style.backgroundColor = "#e88a00";
  
  if(checkbox.checked == false)
    button.style.backgroundColor = "#ccc";

    button.disabled = !button.disabled;
}