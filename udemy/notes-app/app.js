const notes = require('./notes');
const yargs = require('yargs');
const chalk = require('chalk');


/*
CRUD operations
*/

// Add
yargs.command({
    command: 'add',
    description: 'Add a new note.',
    builder: {
        title: {
            describe: 'Note title.',
            demandCommand: true, // <- Forces the function to receive the given command.
            type: 'string'
        },
        body: {            
                describe: 'Note body',
                demandCommand: true,
                type: 'string' 
        }        
    },
    handler: function(argv) { //ES6 Syntax -> handler: function(argv)
+       notes.addNote(argv.title, argv.body);
    }
});

// Remove
yargs.command({
    command: 'remove',
    description: 'Remove a note.',
    builder: {
        title: {
            describe: 'Note title',
            demandCommand: true,
            type: 'string' 
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title);
    }
});

// Read
yargs.command({
    command: 'read',
    description: 'Read a note.',
    builder: {
        title: {
            describe: 'Note title',
            demandCommand: true,
            type: 'string' 
        }
    },    
    handler: function(argv) {
        notes.readNote(argv.title);
    }
});

// List
yargs.command({
    command: 'list',
    description: 'list all notes.',
    handler: function() {
        notes.listNotes();
    }
});

//console.log(process.argv);
yargs.parse();
