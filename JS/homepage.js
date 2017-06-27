'use-strict';
var allUsers = [];
var currentUser = [];
var login = document.getElementById('login');

var selectActivity = document.getElementById('dropdown');

var submitButton = document.getElementById('submitButton');
login.addEventListener('submit', handleLogin);

submitButton.onclick = function () {
  location.href = 'journalpage.html';
};

function User(username, password, dropdownselect) {
  this.username = username;
  this.password = password;
  this.dropdownselect = dropdownselect;
  allUsers.push(this);
}
function handleLogin(event) {
  event.preventDefault();
  var username = event.target.username.value;
  var password = event.target.password.value;
  var dropdownselect = selectActivity.options[selectActivity.selectedIndex].value;

  if (!event.target.username.value || !event.target.password.value) {
    alert('All fields must be completed!');
  }
  new User(username, password, dropdownselect);
  console.log(allUsers);
  localStorage.setItem('login', JSON.stringify(allUsers));
  allUsers = [];
}
