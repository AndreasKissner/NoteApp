
let notesTitles = []; 
let notes = [];
let trashNotesTitles = [];
let trashNotes = [];
let archiveNotesTitle = [];
let archiveNotes = [];

// Init Function for beginn
function init() {
    getFromLocalStorage()
    checkUserName();  
    renderNotes();       
    renderTrashNotes();   
    renderArchiveNotes();
    saveAllNotesToLocalStorage()
    renderInputContent()
}

function addNote() {
    let noteInputRef = document.getElementById("note_input");
    let noteTitleRef = document.getElementById("note_title");
    let alertFieldInput = document.getElementById("alert_field_input");

    let noteInput = noteInputRef.value.trim(); 
    let noteTitle = noteTitleRef.value.trim();

    if (noteInput !== "" && noteTitle !== "") {
        notes.unshift(noteInput);  
        notesTitles.unshift(noteTitle);
        alertFieldInput.innerHTML = "";
        renderNotes(); 
        saveAllNotesToLocalStorage();
    } else {
        let userName = localStorage.getItem("userName") || "ChronoScripter";
        alertFieldInput.innerHTML = `<h2>${userName}, Bitte beide Felder ausfüllen!</h2>`; 
    }
    
    noteInputRef.value = ""; 
    noteTitleRef.value = "";
}







