
// Render Input Content
function getRenderInputContent() {
    return `<h1>ChronosScript</h1>
    <div id="alert_field_input"></div>
    <label for="note_title">Titel der Notiz:</label>
    <input id="note_title" type="text">
    <label for="note_input">Ihre Notiz </label>
    <input id="note_input" type="text">
    <button  onclick="addNote()">Notiz speichern</button>`;

}

// Render Notes Templates
function getNoteEntryTemplate(indexNote) {
    return `<li> title: ${notesTitles[indexNote]}  -> ${notes[indexNote]}
     <button onclick="deleteNote(${indexNote})">Löschen</button> 
     &nbsp;&nbsp;&nbsp; <button onclick="pushNotesToArchive(${indexNote})">Archivieren</button></li>`;
}


// Render TrashNote Templates
function getTrashNoteEntryTemplate(indexTrashNote) {
    return `<li> title: ${trashNotesTitles[indexTrashNote]}  ->  ${trashNotes[indexTrashNote]}
     <button onclick="deleteTrashNotes(${indexTrashNote})">Endgültig löschen</button>&nbsp;&nbsp;&nbsp; <button onclick="moveNoteBackFromTrash(${indexTrashNote})">Nicht Löschen / Verschieben nach Notiz</button></li>`;
}

//Render Archiv Templates

function getArchiveNoteTemplate(indexArchiveNote) {
    return `<li>title: ${archiveNotesTitle[indexArchiveNote]} ->
     ${archiveNotes[indexArchiveNote]} 
    <button onclick="deleteArchivesNotes(${indexArchiveNote})">Endgültig löschen</button>&nbsp;&nbsp;&nbsp;<button onclick="moveNoteBackFromArchive(${indexArchiveNote})">Verschieben nach Notiz</Button></li>`;
}