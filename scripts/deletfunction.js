function deleteNote(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    if (trashNote) {
        trashNotes.unshift(trashNote[0]);
    }
    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    if (trashNoteTitle) {
        trashNotesTitles.unshift(trashNoteTitle[0]);
    }
    renderNotes();
    renderTrashNotes();
    saveAllNotesToLocalStorage()
}

function deleteTrashNotes(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    trashNotesTitles.splice(indexTrashNote, 1)
    renderTrashNotes();
    saveAllNotesToLocalStorage();
}

function deleteArchivesNotes(indexArchiveNote,) {
    archiveNotes.splice(indexArchiveNote, 1)
    archiveNotesTitle.splice(indexArchiveNote, 1);
    localStorage.setItem("archiveNotes", JSON.stringify(archiveNotes));
    localStorage.setItem("archiveNotesTitle", JSON.stringify(archiveNotesTitle));
    renderArchiveNotes();
}
