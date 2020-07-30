const fs = require('fs');
const chalk = require('chalk');

function getNotes() {
    return 'Your notes...';
}

const addNote = function(title, body) {
    const notes = loadNotes();
    const duplicatedNotes = notes.filter(function(note){ // filter function returns the 
        return note.title === title;                     // elements matching the given condition.
    });

    if(duplicatedNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });    
        saveNotes(notes);
        console.log('New note added.');
    } else {
        console.log('Note title duplicated.');
    }
}

const saveNotes = function(notes) {
    const JSONStr = JSON.stringify(notes);
    fs.writeFileSync('notes.json', JSONStr);
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataString = dataBuffer.toString();
        const json = JSON.parse(dataString);
        return json;
    } catch(e) {
        console.log(chalk.red('Error: File notes.json does not exist. Impossible to read previous notes.'))
        return [];
    }
}

// Create an object for exporting multiple values
module.exports = {
    getNotes: getNotes(),
    addNote: addNote
}