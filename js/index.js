function checkLogin() {
  if (
    localStorage.getItem("username") != "" &&
    localStorage.getItem("password") != ""
  ) {
    console.log(localStorage.getItem("username"));
    window.location.replace("listing.html");
  }
}

function saveLocation() {
  localStorage.removeItem("location")
  let loc = document.forms["myForm"]["location"].value;
  localStorage.setItem("location", loc);
  window.location.replace("listing.html");
}
