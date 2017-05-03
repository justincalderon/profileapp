// create function to get user data
function getUserData() {
  // create variables to store first name, last name,
  var userFirstName = document.getElementById("userFirstName").value
  var userLastName = document.getElementById("userLastName").value

  // create variables for gender selection
  var radio1 = document.getElementById("radio1").value
  var radio2 = document.getElementById("radio2").value

  // validate users input
  if (userFirstName == "") {
    results.className = "alert alert-danger"
    results.textContent = "You forgot to add your first name."
    return
  };

  if (userLastName == "") {
    results.className = "failure"
    results.textContent = "You forgot to add your last name."
    return
  };

  if (document.getElementById("radio1").checked) {
    console.log(radio1);
  } else if (document.getElementById("radio2").checked) {
    console.log(radio2);
  } else if (radio1 || radio2 == undefined) {
    results.className = "failure";
    results.textContent = "Please choose a gender."
  }

  // hide updateProfile
  document.getElementById("updateProfile").style.display = "none"
}
document.getElementById("sendDataButton").addEventListener("click", getUserData);
