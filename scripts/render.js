function renderInputContent() {
    let inputContent = document.getElementById("input_content");
    inputContent.innerHTML = ""; 
    inputContent.innerHTML += getRenderInputContent();
}

function renderNotes() {
    let noteRef = document.getElementById("content");
    noteRef.innerHTML = "";
    noteRef.innerHTML += `<h2>Sēmeíōma<br>(Notizen)</h2>`;
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        noteRef.innerHTML += getNoteEntryTemplate(indexNote);
    }
}

function renderTrashNotes() {
    let trashNoteRef = document.getElementById("trash_content");
    trashNoteRef.innerHTML = "";
    trashNoteRef.innerHTML = `<h2>Períttōma<br>(Müll)</h2>`;
    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashNoteRef.innerHTML += getTrashNoteEntryTemplate(indexTrashNote);
    }
}

function renderArchiveNotes() {
    let archiveContentRef = document.getElementById("archiv_content");
    archiveContentRef.innerHTML = "";
    archiveContentRef.innerHTML = `<h2>Archeîon<br>(Archiv)</h2>`;
    for (let indexArchiveNote = 0; indexArchiveNote < archiveNotes.length; indexArchiveNote++) {
        archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);
    }
}
