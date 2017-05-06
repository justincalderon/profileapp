// create function to get user data
function getUserData() {
  // create variables to store first name, last name, email
  var userFirstName = document.getElementById("userFirstName").value
  var userLastName = document.getElementById("userLastName").value
  var userEmail = document.getElementById("userEmail").value
  var userPhone = document.getElementById("userPhone").value


  // create variables for gender selection
  var radio1 = document.getElementById("radio1").value
  var radio2 = document.getElementById("radio2").value


  // create variables for continent of birth
  var userBirth = document.getElementById("birthMenu")
  var userBirthSelect = userBirth.options[userBirth.selectedIndex].value


  // validate users selection
  // FIRST NAME
  if (userFirstName == "") {
    results.className = "alert alert-danger"
    results.textContent = "You forgot to add your first name."
    return
  };


  // LAST NAME
  if (userLastName == "") {
    results.className = "alert alert-danger"
    results.textContent = "You forgot to add your last name."
    return
  };


  // GENDER SELECTION
  if (document.getElementById("radio1").checked) {
    console.log(radio1);
  } else if (document.getElementById("radio2").checked) {
    console.log(radio2);
  } else if (radio1 || radio2 == undefined) {
    results.className = "alert alert-danger";
    results.textContent = "Please choose a gender."
    return
  };


  // EMAIL
  if (userEmail == "") {
    results.className = "alert alert-danger"
    results.textContent = "You forgot to add your email."
    return
  };


  // PHONE
  if (userPhone == "") {
    results.className = "alert alert-danger"
    results.textContent = "You forgot to add your phone number."
    return
  };


  // CONTINENT OF BIRTH

  if (userBirthSelect == "Choose") {
    results.className = "alert alert-danger"
    results.textContent = "You forgot to choose your birthplace."
    return
  };
  console.log(userBirthSelect);

  // ON SUCCESS

  // updateProfile
  // create an object from user values
  var userProfile = {
    name: userFirstName + " " + userLastName,
    email: userEmail,
    phone: userPhone,
  };
  console.log(userProfile);

  // display user object values in updatedProfile
  newUserName.innerText = "Welcome " + userFirstName + " " + userLastName
  newUserEmail.innerText = "Email : " + userEmail
  newUserPhone.innerText = "Phone : " + userPhone


  // show updateProfile and hide newProfile
    document.getElementById("updateProfile").hidden=false;
    document.getElementById("newProfile").hidden=true;
}

document.getElementById("sendDataButton").addEventListener("click", getUserData);
