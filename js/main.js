// create function to get user data
function getUserData() {
  // create variables to store first name, last name, email
  var userFirstName = document.getElementById("userFirstName").value
  var userLastName = document.getElementById("userLastName").value
  var userEmail = document.getElementById("userEmail").value

  // create variables for gender selection
  var radio1 = document.getElementById("radio1").value
  var radio2 = document.getElementById("radio2").value

  // validate users selection
  if (userFirstName == "") {
    results.className = "alert alert-danger"
    results.textContent = "You forgot to add your first name."
    return
  };

  if (userLastName == "") {
    results.className = "alert alert-danger"
    results.textContent = "You forgot to add your last name."
    return
  };

  if (userEmail == "") {
    results.className = "alert alert-danger"
    results.textContent = "You forgot to add your email."
    return
  };

  if (document.getElementById("radio1").checked) {
    console.log(radio1);
  } else if (document.getElementById("radio2").checked) {
    console.log(radio2);
  } else if (radio1 || radio2 == undefined) {
    results.className = "alert alert-danger";
    results.textContent = "Please choose a gender."
  };

  // hide
}

document.getElementById("sendDataButton").addEventListener("click", getUserData);
