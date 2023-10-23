function checkEmail(email) {
  // first part - alphanumerics or . -, @ symbol
  // second part - checks for a domain name with 2-3 chars
  // at the end for the top level domain (.com, .uk, .it etc)
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailFormat)) {
    return true;
  }
  // email wasn't a match
  return false;
}

function validateEmail() {
  let inputtedEmail = document.getElementById('email');
  console.log(inputtedEmail.value);
  // check with regex
  if (checkEmail(inputtedEmail.value)) {
    console.log('Process the form here');
  } else {
    let emailErrorMsg = document.querySelector('.email-error');
    emailErrorMsg.innerHTML = 'Oops! please check your email';
    emailErrorMsg.style.visibility = 'visible';
  }
}
