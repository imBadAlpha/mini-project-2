function checkLogin() {
  if (
    localStorage.getItem("usernam") != "" &&
    localStorage.getItem("passwor") != ""
  ) {
    console.log(localStorage.getItem("usernam"));
    window.location.replace("listing.html");
  }
}

function saveLocation() {
  localStorage.removeItem("location")
  let loc = document.forms["myForm"]["location"].value;
  localStorage.setItem("location", loc);
  window.location.replace("listing.html");
}
