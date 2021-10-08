// Create a new account
const signup = document.querySelector("#new_acc");

signup.onclick = () => {
  window.location.href = "sign_up.html"}

// Check availbale account 
function check(){
  var storedName = localStorage.getItem('name');
  var storedPw = localStorage.getItem('pw');

  var userName = document.getElementById('name');
  var userPw = document.getElementById('pw');


  if(userName.value == storedName && userPw.value == storedPw){
      alert('You are logged in.');
  }else{
      alert('Error on login');
  }
}