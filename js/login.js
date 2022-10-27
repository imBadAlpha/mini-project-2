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
    localStorage.setItem("usernam", username);
    localStorage.setItem("passwor", password);
    localStorage.setItem("location", "")
    window.location.replace("listing.html");
  } else {
    localStorage.setItem("usernam", "");
    localStorage.setItem("passwor", "");
  }
}

function checkLogin() {
  console.log("Hello");
  console.log(localStorage.getItem("usr"));
  if (
    localStorage.getItem("usernam") != "" &&
    localStorage.getItem("passwor") != ""
  ) {
    console.log(localStorage.getItem("usernam"));
    window.location.replace("listing.html");
  }
}
