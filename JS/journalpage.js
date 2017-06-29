'use-strict';
//******ToDo figure out how user can hit enter while journaling and not click submit
var currentDate = new Date();
var dateTime = (currentDate.getMonth() + 1) + '/' + currentDate.getDate() + '/' + currentDate.getFullYear() + ' @ ' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
var oFormObject = document.forms['inputJournal'];
oFormObject.elements['date'].value = dateTime;

var getTheGoods = JSON.parse(localStorage.getItem('login'));

(function() {
  if (getTheGoods[0].dropdownselect === 'exercise') {
    document.body.style.backgroundImage = "url('images/exercise-two.jpg')";
  } else if (getTheGoods[0].dropdownselect === 'social') {
    document.body.style.backgroundImage = "url('images/social-two.jpg')";
  } else if (getTheGoods[0].dropdownselect === 'Gaming') {
    document.body.style.backgroundImage = "url('images/gaming-two.jpg')";
  }
})();

var allJournalEntry = JSON.parse(localStorage.getItem('journalEntry'));
if (allJournalEntry === null) {
  allJournalEntry = [];
}
var journalEntryContainer = document.getElementById('inputJournal');

function JournalEntry(whatKind, date, location, duration, description) {
  this.whatKind = whatKind;
  this.date = date;
  this.location = location;
  this.duration = duration;
  this.description = description;
  allJournalEntry.push(this);
};
//hello

journalEntryContainer.addEventListener('submit', handleTurnInJournal);

function handleTurnInJournal(e) {
  event.preventDefault();
  console.log('got click');
  var whatKind = event.target.whatKind.value;
  var date = event.target.date.value;
  var location = event.target.location.value;
  var duration = event.target.duration.value;
  var description = quill.root.innerText;

  if (!event.target.date.value || !event.target.whatKind.value || !event.target.location.value || !event.target.duration.value) {
    return alert('Fields cannot be empty!');
  }

  // if (!event.target.date.value || !event.target.whatKind.value || !event.target.location.value || !event.target.duration.value || !document.getElementById('desc').value) {
  //   return alert('Fields cannot be empty!');
  // }

  new JournalEntry(whatKind, date, location, duration, description);

  localStorage.setItem('journalEntry', JSON.stringify(allJournalEntry));

  event.target.date.value = null;
  event.target.whatKind.value = null;
  event.target.location.value = null;
  event.target.duration.value = null;
  oFormObject.elements['date'].value = dateTime;

};

document.getElementById("redirectButton").onclick = function() {
  location.href = "displayJournal.html";
};
