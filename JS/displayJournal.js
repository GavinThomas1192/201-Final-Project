'use-strict';

var storedJournalEntry =
JSON.parse(localStorage.getItem('journalEntry'));

// console.log(journalEntry);
// for (var i = 0; i < storedJournalEntry.length; i++){
//   localStorage.setItem(storedJournalEntry[i].date, JSON.stringify(storedJournalEntry));
// }
// alert('is this thing on');

var section = document.getElementById('render-journal');

function render() {
  for (var i = 0; i < storedJournalEntry.length; i++){
    var div = document.createElement('div');
    div.id = storedJournalEntry[i].date;
    var pEl = document.createElement('p');
    var p2El = document.createElement('p');
    var p3El = document.createElement('p');
    var p4El = document.createElement('p');
    var p5El = document.createElement('p');
    pEl.textContent = 'Activity: ' + storedJournalEntry[i].whatKind;
    p2El.textContent = 'Date: ' + storedJournalEntry[i].date;
    p3El.textContent = 'Location: ' + storedJournalEntry[i].location;
    p4El.textContent = 'Duration: ' + storedJournalEntry[i].duration;
    p5El.textContent = 'Description: ' + storedJournalEntry[i].description;
    div.appendChild(pEl);
    div.appendChild(p2El);
    div.appendChild(p3El);
    div.appendChild(p4El);
    div.appendChild(p5El);
    button = document.createElement('button');
    button.id = storedJournalEntry[i].date;
    button.textContent = 'Delete Entry';
    div.appendChild(button);
    button.addEventListener('click', remove);
    section.appendChild(div);
  };
};

function remove(event) {
  document.preventDefault;
  for (var i = 0; i < storedJournalEntry.length; i++){
    if (event.target.id === storedJournalEntry[i].date) {
      var deleteDiv = document.getElementById(event.target.id);
      deleteDiv.innerHTML = '';
      localStorage.removeItem(storedJournalEntry[i].date);
    }
  }
};
render();
