function saveAllNotesToLocalStorage() {
    localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("trashNotesTitles", JSON.stringify(trashNotesTitles));
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
    localStorage.setItem("archiveNotesTitle", JSON.stringify(archiveNotesTitle));
    localStorage.setItem("archiveNotes", JSON.stringify(archiveNotes));
}

function getFromLocalStorage() {
    notesTitles = JSON.parse(localStorage.getItem("notesTitles")) || ["Shopping", "Haushalt"];
    notes = JSON.parse(localStorage.getItem("notes")) || ["Einkaufen", "Bügeln"];

    trashNotesTitles = JSON.parse(localStorage.getItem("trashNotesTitles")) || ["Sport"];
    trashNotes = JSON.parse(localStorage.getItem("trashNotes")) || ["Dart"];

    archiveNotesTitle = JSON.parse(localStorage.getItem("archiveNotesTitle")) || ["Haushalt"];
    archiveNotes = JSON.parse(localStorage.getItem("archiveNotes")) || ["Waschen"];
}
