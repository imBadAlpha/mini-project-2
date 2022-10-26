function helpIdAlertOn(helpIdName) {
  let HelpId = document.getElementById(helpIdName);
  HelpId.className = "form-text text-danger";
}

function helpIdAlertOff(helpIdName) {
  let HelpId = document.getElementById(helpIdName);
  HelpId.className = "form-text text-danger d-none";
}

function checkFirstname() {
  var has_digit = false;
  let firstname = document.forms["myForm"]["firstname"].value;
  for (let i = 0; i < firstname.length; i++) {
    if ("0123456789".includes(firstname.charAt(i))) {
      has_digit = true;
    }
  }

  if (has_digit == true) {
    alert("First Name has digits");
    helpIdAlertOn("fnamehelpId");
    return false;
  } else {
    helpIdAlertOff("fnamehelpId");
    return true;
  }
}

function checkLastname() {
  var has_digit = false;
  let lastname = document.forms["myForm"]["lastname"].value;
  for (let i = 0; i < lastname.length; i++) {
    if ("0123456789".includes(lastname.charAt(i))) {
      has_digit = true;
    }
  }

  if (has_digit == true) {
    alert("Last Name has digits");
    helpIdAlertOn("lnamehelpId");
    return false;
  } else {
    helpIdAlertOff("lnamehelpId");
    return true;
  }
}

function checkPassword() {
  console.log("Function read");
  var has_no_digits = true;
  let password = document.forms["myForm"]["password"].value;

  if (password.length < 6) {
    alert("Password is less than 6 characters long...");
    helpIdAlertOn("pwHelpId");
    return false;
  } else {
    for (let i = 0; i < password.length; i++) {
      if ("0123456789".includes(password.charAt(i))) {
        has_no_digits = false;
      }
    }
  }

  if (has_no_digits == true) {
    alert("Password have no digits");
    helpIdAlertOn("pwHelpId");
    return false;
  } else {
    helpIdAlertOff("pwHelpId");
    return true;
  }
}

function confirmPassword() {
  let password = document.forms["myForm"]["password"].value;
  let password_conf = document.forms["myForm"]["password_conf"].value;

  if (password_conf != password) {
    alert("Confirm Password does not match to your Password.");
    helpIdAlertOn("pw_conHelpId");
    return false;
  } else {
    helpIdAlertOff("pw_conHelpId");
    return true;
  }
}

function checkEmail() {
  var has_space = false;
  let email = document.forms["myForm"]["email"].value;
  for (let i = 0; i < email.length; i++) {
    if (" ".includes(email.charAt(i))) {
      has_space = true;
    }
  }

  if (has_space) {
    alert("Your email has space/s in it...");
    helpIdAlertOn("emailHelpId");
    return false;
  } else {
    helpIdAlertOff("emailHelpId");
    return true;
  }
}

function checkMobilenum() {
  var has_letter = false;
  let mobile_num = document.forms["myForm"]["mobile_num"].value;
  mobile_num = mobile_num.toLowerCase();
  for (let i = 0; i < mobile_num.length; i++) {
    if ("qwertyuiopasdfghjklzxcvbnm".includes(mobile_num.charAt(i))) {
      has_letter = true;
    }
  }

  if (has_letter) {
    alert("Your mobile number has letters in it...");
    let mobileHelp = document.getElementById("mobileHelpId");
    mobileHelp.className = "form-text text-danger";
    return false;
  } else {
    let mobileHelp = document.getElementById("mobileHelpId");
    mobileHelp.className = "form-text text-danger d-none";
    return true;
  }
}

function validateForm() {
  let checkedFName = checkFirstname();
  let checkedLName = checkLastname();
  let checkedPW = checkPassword();
  let checkedPWconf = confirmPassword();
  let checkedEmail = checkEmail();
  let checkedMobile = checkMobilenum();

  if (
    checkedFName &&
    checkedLName &&
    checkedPW &&
    checkedPWconf &&
    checkedEmail &&
    checkedMobile
  ) {
    localStorage.clear();
    let username = document.forms["myForm"]["email"].value;
    localStorage.setItem("usr", username);
    localStorage.setItem("username", "" )
    let password = document.forms["myForm"]["password"].value;
    localStorage.setItem("password", "" )
    localStorage.setItem("pw", password);
    let firstname = document.forms["myForm"]["firstname"].value;
    localStorage.setItem("firstname", firstname);
    let lastname = document.forms["myForm"]["lastname"].value;
    localStorage.setItem("lastname", lastname);
    alert("Successfully Registered!");
    window.location.replace("login.html");
  }
  return false;
}
