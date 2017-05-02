// Get users data input
function getUserData() {
  // store values for user first, last names, email, and phone number.
  var userFirstName = document.getElementById('userFirstName').value
  var userLastName = document.getElementById('userLastName').value
  var userEmail = document.getElementById('userEmail').value
  var userPhone = document.getElementById('userPhone').value

  // store value for continent of birth and gender radio options
  // var userGender = document.getElementByClass('userGender')
  // var userBirth = document.getElementByClass('userBirth')

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
  // get gender values
    // if option was selected by the user, do this
    if(userGender[i].checked) {
      userGender = userGender[i].value
      console.log(userGender);
    }
  }
  // stop function if no data is there for gender
  if(userGender == '') {
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
  // loop through all options with class="userBirth"
  for(var i = 0; i < userBirth.length; i++) {
    // if option was selected by user, do this
    if(userBirth[i].checked) {
      // set value of answer to value of userBirthPlace
      userBirth = userBirth[i].value
      console.log(userBirth);
    }
  }
  // stop function if no value is there for userBirthPlace
  if(userBirth == undefined) {
    // add a class of failure to results if no userBirth value
    results.className = "failure"
    // update the text content of results
    results.textContent = "You forgot to select your birth place."
    // stop function if no answer
    return
  }

  // ON SUCCESS
  // if everything passes add a class of success to results
  results.className = "success"
  // update the text content of results
  results.textContent = "Thank you, updating your information now."

  // create object for user profile data
  var userProfile = {
    name : userFirstName + " " + userLastName,
    gender : userGender,
    email : userEmail,
    phone : userPhone,
    birth : userBirth

  }
  // confirm existance of all user profile data
  console.log(userProfile);

  // run displayProfile after 1 second passing in new profile data to be displayed
  setTimeout(function() {displayProfile(userProfile) }, 1000)

  // display profile information
  function displayProfile(userProfile) {
    // make sure the suer data is being passed through
    console.log(userProfile);

    // select some html elements by id
    var userName = document.getElementById('newUserName')
    var userGender = document.getElementById('newUserGender')
    var userEmail = document.getElementById('newUserEmail')
    var userPhone = document.getElementById('newUserPhone')
    var userBirth = document.getElementById('newUserBirth')

    // change the text of these variables using the userProfile object
    userName.innerText = "Welcome " + userProfile.name
    userGender.innerText = "Gender: " + userProfile.gender
    userEmail.innerText = "Email: " + userProfile.email
    userPhone.innerText = "Phone: " + userProfile.phone
    userBirth.innerText = "Birthplace " + userProfile.birth

    // hide new profile form
    // document.getElementById('newProfile').style.display = "hide"
    // display updated profile data
    // document.getElementById('updatedProfile').style.display = "block"

  }


}
document.getElementById('sendDataButton').addEventListener('click', getUserData, false)
