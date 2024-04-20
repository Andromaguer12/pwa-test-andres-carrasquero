function renderCards() {
  const currentTodos = localStorage.getItem("todos");

  let cards

  if(!currentTodos) {
    cards = [];
  }
  else {
    cards = JSON.parse(currentTodos);
  }
  
  var container = document.getElementById('notes-container');

  var html = cards.map(function(card) {
    return `
      <div class="note" id="${card.id}">
        <div class="note-text">
          <p class=${card?.done ? "note-text-main-line" : "note-text-main"}>${card.note}</p>
          <p class="note-date">${card.date}</p>
        </div>

        <div class="noteControls">
          <img onclick="handleSetDoneTodo(event)" class="iconButton" id="done-${card.id}" src="${card?.done ? "./assets/checkbox.png" : "./assets/checkbox-empty.png"}" style="margin-bottom: 10px;" alt="send-note-icon" width="20px" height="20px" />
          <img onclick="showAlert(event)" class="iconButton" id="delete-${card.id}" src="./assets/delete.png" alt="send-note-icon" width="20px" height="20px" />
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}

function formatDate(date) {
  // Extract the components of the date
  var day = date.getDate();
  var month = date.getMonth() + 1; // Months in JavaScript go from 0 to 11
  var year = date.getFullYear();

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';

  // Format the components to always have at least two digits
  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;

  // Return the formatted date
  return day + '/' + month + '/' + year + ' - ' + hours + ':' + minutes + ' ' + ampm;
}

function generateRandomId() {
  return Math.floor(Math.random() * Date.now()).toString(16);
}

var form = document.getElementById('note-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const form = new FormData(e.target);
  const note = form.get("note")
  
  const payload = {
    note,
    date: formatDate(new Date()),
    id: generateRandomId()
  }

  const currentTodos = localStorage.getItem("todos");

  let arrayTodos

  if(!currentTodos) {
    arrayTodos = [];
  }
  else {
    arrayTodos = JSON.parse(currentTodos);
  }

  arrayTodos.push(payload);

  const newArrayTodos = JSON.stringify(arrayTodos);

  localStorage.setItem("todos", newArrayTodos);

  renderCards();

  e.target.reset();
});

function handleDeleteNote(idNote) {
  const currentTodos = localStorage.getItem("todos");

  let arrayTodos

  if(!currentTodos) {
    arrayTodos = [];
  }
  else {
    arrayTodos = JSON.parse(currentTodos);
  }

  const indexToDelete = arrayTodos.findIndex(({ id }) => id === idNote.split("delete-")[1]);

  arrayTodos.splice(indexToDelete, 1)

  const newArrayTodos = JSON.stringify(arrayTodos);

  localStorage.setItem("todos", newArrayTodos);

  renderCards();
}

function handleSetDoneTodo(e) {
  const currentTodos = localStorage.getItem("todos");

  const idNote = e.target.id;

  let arrayTodos

  if(!currentTodos) {
    arrayTodos = [];
  }
  else {
    arrayTodos = JSON.parse(currentTodos);
  }

  const indexToDelete = arrayTodos.findIndex(({ id }) => id === idNote.split("done-")[1]);

  const payload = {
    ...arrayTodos[indexToDelete],
    done: arrayTodos[indexToDelete]?.done ? false : true
  }

  arrayTodos.splice(indexToDelete, 1, payload)

  const newArrayTodos = JSON.stringify(arrayTodos);

  localStorage.setItem("todos", newArrayTodos);

  renderCards();
}

function createNoteButton() {
  const input = document.getElementById("note-input");

  input.focus();
}

function showAlert(e) {
  var respuesta = confirm('¿Estás seguro de que quieres eliminar esta nota?');

  if (respuesta) {
    handleDeleteNote(e.target.id);
  }
}

renderCards();