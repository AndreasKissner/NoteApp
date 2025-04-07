function getRenderInputContent() {
    return `<h1>Chronos<br>Script</h1>
    <div id="alert_field_input"></div>
    <label for="note_title" class="label_style">Titel der Notiz:</label>
    <input id="note_title" type="text" class="input_style">
    <label for="note_input" class="label_style">Ihre Notiz </label>
    <input id="note_input" class="input_style" type="text">
    <button  onclick="addNote()">Notiz speichern</button>`;
}

function getNoteEntryTemplate(indexNote) {
    return `<div class="note-container"> 
                <li> 
                    <span>Titel:</span> ${notesTitles[indexNote]} <br>
                    <span>Notiz:</span> ${notes[indexNote]}
                    <div class="note-buttons">
                        <button onclick="deleteNote(${indexNote})">Löschen</button> 
                        <button onclick="moveNotesToArchive(${indexNote})">Archivieren</button>
                    </div>
                </li>
            </div>`;
}

function getTrashNoteEntryTemplate(indexTrashNote) {
    return `<div class="note-container"> 
                <li>  
                    <span>Titel:</span> ${trashNotesTitles[indexTrashNote]} <br>
                    <span>Notiz:</span> ${trashNotes[indexTrashNote]}
                    <div class="note-buttons">
                        <button onclick="deleteTrashNotes(${indexTrashNote})">Endgültig löschen</button>
                        <button onclick="moveNoteBackFromTrash(${indexTrashNote})">Verschieben nach Notiz</button>
                    </div>
                </li>
            </div>`;
}

function getArchiveNoteTemplate(indexArchiveNote) {
    return `<div class="note-container"> 
                <li>  
                    <span>Titel</span> ${archiveNotesTitle[indexArchiveNote]} <br>
                    <span>Notiz:</span> ${archiveNotes[indexArchiveNote]}
                    <div class="note-buttons">
                        <button onclick="deleteArchivesNotes(${indexArchiveNote})">Endgültig löschen</button>
                        <button onclick="moveNoteBackFromArchive(${indexArchiveNote})">Verschieben nach Notiz</button>
                    </div>
                </li>
            </div>`;
}

