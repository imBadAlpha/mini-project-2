let username = "";
let password = "";

function helpIdAlertOn(helpIdName) {
  let HelpId = document.getElementById(helpIdName);
  HelpId.className = "form-text text-danger";
}

function helpIdAlertOff(helpIdName) {
  let HelpId = document.getElementById(helpIdName);
  HelpId.className = "form-text text-danger d-none";
}

function usernameCheck() {
  let usr = localStorage.getItem("usr");
  username = document.forms["myForm"]["username"].value;
  if (username == usr) {
    helpIdAlertOff("usernameHelpId");
    return true;
  } else {
    helpIdAlertOn("usernameHelpId");
    return false;
  }
}

function passwordCheck() {
  let pw = localStorage.getItem("pw");
  console.log(localStorage.getItem("pw"));
  password = document.forms["myForm"]["password"].value;
  if (password == pw) {
    helpIdAlertOff("passwordHelpId");
    return true;
  } else {
    helpIdAlertOn("passwordHelpId");
    return false;
  }
}

function validateForm() {
  let usernameChecked = usernameCheck();
  let pwChecked = passwordCheck();

  if (usernameChecked && pwChecked) {
    alert("Login Successful!");
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    window.location.replace("listing.html");
  } else {
    localStorage.setItem("username", "");
    localStorage.setItem("password", "");
  }
}

function checkLogin() {
  console.log("Hello");
  if (
    localStorage.getItem("username") != "" &&
    localStorage.getItem("password") != ""
  ) {
    console.log(localStorage.getItem("username"));
    window.location.replace("listing.html");
  }
}
