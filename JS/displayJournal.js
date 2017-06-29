'use-strict';

var storedJournalEntry = JSON.parse(localStorage.getItem('journalEntry'));

var section = document.getElementById('render-journal');
//hello
function render() {
  for (var i = 0; i < storedJournalEntry.length; i++) {
    var div = document.createElement('div');
    div.id = storedJournalEntry[i].date;
    div.className = 'the-divs';
    var pEl = document.createElement('span');
    pEl.id = ('activity');
    var p2El = document.createElement('p');
    var p3El = document.createElement('p');
    var p4El = document.createElement('p');
    var p5El = document.createElement('p');
    p5El.id = storedJournalEntry[i].whatKind;
    // var activity = 'Activity: ';
    // var activityBold = activity.bold();
    pEl.textContent = storedJournalEntry[i].whatKind;
    p2El.innerHTML = '<span class="titles">Date:  </span>' + storedJournalEntry[i].date;
    p3El.innerHTML = '<span class="titles">Location:  </span>' + storedJournalEntry[i].location;
    p4El.innerHTML = '<span class="titles">Duration:  </span>' + storedJournalEntry[i].duration;
    p5El.innerHTML = '<span class="titles">Description:  </span><br><br>' + storedJournalEntry[i].description;
    div.appendChild(pEl);
    div.appendChild(p2El);
    div.appendChild(p3El);
    div.appendChild(p4El);
    div.appendChild(p5El);
    button = document.createElement('button');
    button.id = storedJournalEntry[i].date;
    button.textContent = 'Delete Entry';
    div.appendChild(button);
    button2 = document.createElement('button');
    button2.id = storedJournalEntry[i].date;
    button2.textContent = 'Edit Entry';
    div.appendChild(button2);
    button.addEventListener('click', remove);
    button2.addEventListener('click', edit);
    section.appendChild(div);
    buttonSave.addEventListener('click', save);
  };
};

var buttonSave = document.createElement('button');

function edit(event) {
  document.preventDefault;
  for (var i = 0; i < storedJournalEntry.length; i++) {
    if (event.target.id === storedJournalEntry[i].date) {
      var div = document.getElementById(storedJournalEntry[i].date);
      buttonSave.id = storedJournalEntry[i].date;
      buttonSave.textContent = 'Save Entry';
      div.appendChild(buttonSave);
      var editBox = document.createElement('textarea');
      editBox.id = 'editBox';
      editBox.textContent = storedJournalEntry[i].description;
      div.appendChild(editBox);
    }
  }
};

function save(event) {
  for (var i = 0; i < storedJournalEntry.length; i++) {
    if (event.target.id === storedJournalEntry[i].date) {
      var editPara = document.getElementById(storedJournalEntry[i].whatKind);
      editPara.innerText = editBox.value;
      storedJournalEntry[i].description = editBox.value;
      buttonSave.parentElement.removeChild(buttonSave);
      editBox.parentElement.removeChild(editBox);
    }
  };
  localStorage.setItem('journalEntry', JSON.stringify(storedJournalEntry));
  return;
};


function remove(event) {
  document.preventDefault;
  for (var i = 0; i < storedJournalEntry.length; i++) {
    if (event.target.id === storedJournalEntry[i].date) {
      var deleteDiv = document.getElementById(event.target.id);
      deleteDiv.innerHTML = '';
      storedJournalEntry.splice(i, 1);
      document.location.href = 'displayJournal.html';
      localStorage.setItem('journalEntry', JSON.stringify(storedJournalEntry));
      return;
    }
  }
};


render();
