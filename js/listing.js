var proceed2Pay = false

function checkIfLoggedIn() {
  console.log("Hello");
  if (
    localStorage.getItem("usernam") != "" &&
    localStorage.getItem("passwor") != ""
  ) {
    proceed2Pay = true
    document.getElementById("drop").className = "dropdown";
    document.getElementById("login").className = "d-none";
    document.getElementById("about").className = "d-none";
    document.getElementById("contact").className = "d-none";
    document.getElementById("home").className = "d-none";
    document.getElementById("name").innerHTML =
      localStorage.getItem("firstname") +
      " " +
      localStorage.getItem("lastname");
    if (localStorage.getItem("location") != "") {
      let loc = localStorage.getItem("location")
      console.log(loc);
      document.getElementById("car_listings").innerHTML =
        "Here are the cars available for rent in " +
        loc +
        "!";
      localStorage.setItem("location", "")
    } else {
      document.getElementById("car_listings").innerHTML = " " 
    }
  } else {
    proceed2Pay = false
    document.getElementById("drop").className = "dropdown d-none";
    document.getElementById("login").className = "";
    document.getElementById("about").className = "";
    document.getElementById("contact").className = "";
    document.getElementById("home").className = "";
    if (localStorage.getItem("location") != "") {
      let loc = localStorage.getItem("location")
      console.log(loc);
      document.getElementById("car_listings").innerHTML =
        "Here are the cars available for rent in " +
        loc +
        "!";
      localStorage.setItem("location", "")
    } else {
      document.getElementById("car_listings").innerHTML = " " 
    }
  }
}

function logout() {
  localStorage.setItem("usernam", "");
  localStorage.setItem("passwor", "");
  alert("You have logged out!");
  window.location.replace("index.html");
}

function saveLocation() {
  let loc = document.forms["myForm"]["location"].value;
  localStorage.setItem("location", loc);
  console.log(localStorage.getItem("location"))
}

function checkPay() {
  if (proceed2Pay) {
    window.location.replace("payment.html");
  } else {
    alert("You must login first before you can proceed!")
    window.location.replace("login.html");
  }
}