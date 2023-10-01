function switchTab(showTab) {
  const loginForm = document.getElementById('login_form_div');
  const signupForm = document.getElementById('signup_form_div');

  if (showTab === 'login') {
    // Show login
    loginForm.removeAttribute('hidden');
    // Hide signup
    signupForm.setAttribute('hidden', 'true');
  } else if (showTab === 'SignUp') { // Note: Changed to 'SignUp' with a capital 'S'
    // Hide login
    loginForm.setAttribute('hidden', 'true');
    // Show signup
    signupForm.removeAttribute('hidden');
  }
}


// const content = document.querySelector('.text-light');
// content.addEventListener('click', function(){
//    console.log('i have clicked on login btn');
// });