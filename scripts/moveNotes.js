function moveNotesToArchive(indexNote) {
    let archivedNote = notes.splice(indexNote, 1);
    let archivedTitle = notesTitles.splice(indexNote, 1)[0];
    if (archivedNote && archivedTitle) { 
        archiveNotes.unshift(archivedNote[0]);
        archiveNotesTitle.unshift(archivedTitle); 
    }
    renderNotes();
    renderArchiveNotes();
    saveAllNotesToLocalStorage();
}

function moveNoteBackFromTrash(indexTrashNote) {
    let removedNote = trashNotes.splice(indexTrashNote, 1);
    let removedNoteTitle = trashNotesTitles.splice(indexTrashNote, 1);
    if (removedNote && removedNoteTitle) { 
        notes.unshift(removedNote[0]);
        notesTitles.unshift(removedNoteTitle[0]); 
    }
    localStorage.setItem("trashNotesTitles", JSON.stringify(trashNotesTitles));
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
    renderNotes();
    renderTrashNotes();
    saveAllNotesToLocalStorage();
}

function moveNoteBackFromArchive(indexArchiveNote) {
    let removedArchiveNote = archiveNotes.splice(indexArchiveNote, 1);
    let removedArchiveNoteTitle = archiveNotesTitle.splice(indexArchiveNote, 1);
    if (removedArchiveNote && removedArchiveNoteTitle) { 
        notes.unshift(removedArchiveNote[0]);
        notesTitles.unshift(removedArchiveNoteTitle[0]); 
    }
    renderNotes();
    renderArchiveNotes();
    saveAllNotesToLocalStorage();
}
