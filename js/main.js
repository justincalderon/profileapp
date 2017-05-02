// Get users data input
function getUserData() {
  // store values for user first, last names, email, and phone number.
  var userFirstName = document.getElementById('userFirstName').value
  var userLastName = document.getElementById('userLastName').value
  var userEmail = document.getElementById('userEmail').value
  var userPhone = document.getElementById('userPhone').value

  // store value for continent of birth and gender radio options
  var userGenderSelection = document.getElementByClass('userGender')
  var userBirthPlace = document.getElementByClass('userBirth')

  // create vars to store gender and birth
  var userGender, userBirth

  // First Name
  if(userFirstName == "") {
    // add a class of failure to results if first name has no value
    results.className = "failure"
    // update the text content of results
    results.textContent = "You forgot to add your first name."
    // stop function if no answer
    return
  }

  // Last Name
  if(userLastName == "") {
    // add a class of failure to results if last name has no value
    results.className = "failure"
    // update the text content of results
    results.textContent = "You forgot to add your last name."
    // stop function if no answer
    return
  }

  // Gender
  // loop through all gender options with class="userGender"
  for(var i = 0; i < userGenderSelection.length; i++) {
    // if option was selected by the user, do this
    if(userGenderSelection[i].checked) {
      userGender = userGenderSelection[i].value
      console.log(userGender);
    }
  }
  // stop function if no data is there for gender
  if(userGender == undefined) {
    // add a class of failure to results if no value for gender
    results.className = "failure"
    // update the text content of results
    results.textContent = "You forgot to select a gender."
    // stop function if no answer
    return
  }

  // Email
  if(userEmail == "") {
    // add a class of failure to results if no user email value
    results.className = "failure"
    // update the text content of results
    results.textContent = "You forgot to add your email."
    // stop function if no answer
    return
  }

  // Phone number
  if(userPhone = "") {
    // add a class of failure to results if no user email value
    results.className = "failure"
    // update the text content of results
    results.textContent = "You forgot to add your phone number."
    // stop function if no answer
    return
  }

  // Birthplace


  document.getElementById('sendDataButton').addEventListener('click', getUserData, false)
}
