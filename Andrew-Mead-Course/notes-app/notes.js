const fs = require('fs');
const chalk = require('chalk');

/*
*
*   Using 'add' command
*
*/

const addNote = (title, body) => {
    const loadedNotes = loadNotes();

    // const duplicatedTitles = loadedNotes.filter(function(note) { // filter function returns the 
    //     return note.title === title;                     // elements matching the given condition.
    // });

    // Arrow version
    //const duplicatedTitles = loadedNotes.filter((note) => note.title === title);
    // Improved version.
    const duplicatedTitles = loadedNotes.find((note) => note.title === title);

    if(duplicatedTitles.length === 0) {
        loadedNotes.push({
            title: title,
            body: body
        });    

        saveNotes(loadedNotes);
        console.log(chalk.green('New note added.'));
    } else {
        console.log(chalk.red("Couldn't add new note: title duplicated."));
    }
}

/**
 * 
 * Using 'remove' command
 * 
 */

const removeNote = (title) => {
    const json = loadNotes();

    const newJSON = json.filter(note => note.title !== title);
    
    if(json.length > newJSON.length) {
        saveNotes(newJSON);
        console.log(chalk.green('Succesfully removed note with title:', title));
    } else {
        console.log(chalk.red('No existing notes matching with title:', title))
    }

}

/**
 * 
 * Using 'list' command
 * 
 */
const listNotes = () => {
    const loadedNotes = loadNotes();

    if (loadedNotes.length === 0) {
        console.log(chalk.red("Can't found any note. Please add a new note."));
    } else {
        loadedNotes.forEach(note => {
            console.log(chalk.green(note.title));
        });        
    }

}

/*
*
*   Using 'read' command
*
*/
const readNote = (title) => {
    const loadedNotes = loadNotes();
    
    const note = loadedNotes.find((note) => note.title === title);

    if (note != undefined) {
        console.log('Title:', note.title);
        console.log('Body:', note.body);
    } else {
        console.log(chalk.red("Could't find note with title:", title));
    }


}

const saveNotes = notes => {
    const jsonStr = JSON.stringify(notes);
    fs.writeFileSync('notes.json', jsonStr);
}

const loadNotes = () => {
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
    removeNote: removeNote,
    addNote: addNote,
    listNotes: listNotes,
    readNote: readNote
}