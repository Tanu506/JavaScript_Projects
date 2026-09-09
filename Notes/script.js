const noteTitle = document.querySelector("#noteTitle");
const noteContent = document.querySelector("#noteContent");
const addNoteBtn = document.querySelector("#addNoteBtn");
const notesContainer = document.querySelector("#notesContainer");

let notes = [];

function displayNote() {
  notesContainer.innerHTML = "";

  notes.forEach((n) => {
    notesContainer.innerHTML += `
        <div class="note">
           <h3>${n.title}</h3>
           <p>${n.content}</p>
           <button class="delete-btn" data-id="${n.id}">Delete</button>
        </div>
    `;
  });
}

function addNote() {
  const noteTitleInput = noteTitle.value;
  const noteContentInput = noteContent.value;

  const noteArray = {
    id: Date.now(),
    title: noteTitleInput,
    content: noteContentInput,
  };

  notes.push(noteArray);
  saveNotes()
  displayNote();
  noteTitle.value = "";
  noteContent.value = "";
}

addNoteBtn.addEventListener("click", addNote);

notesContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const id = Number(event.target.dataset.id);

    notes = notes.filter((n) => {
      return n.id != id;
    });
    saveNotes();
    displayNote();
  }
});

function saveNotes(){
  localStorage.setItem("notes",JSON.stringify(notes));
}

function loadNotes(){
  const savedNote = localStorage.getItem("notes");

  if(savedNote){
    notes = JSON.parse(savedNote)
  }
  displayNote()
}

loadNotes()