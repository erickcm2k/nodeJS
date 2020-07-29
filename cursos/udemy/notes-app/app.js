const getNotes = require('./notes');
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
            demandOption: true, // <- Forces the function to receive the given command.
            type: 'string'
        },
        body: {            
                describe: 'Note body',
                demandOption: true,
                type: 'string' 
        }        
    },
    handler: function(argv) {
        console.log('Adding a new note:', argv.title);
        console.log('Title:', argv.body);
    }
});

// Remove
yargs.command({
    command: 'remove',
    description: 'Remove a note.',
    handler: function() {
        console.log('Removing a note.')
       
    }
});

// Read
yargs.command({
    command: 'read',
    description: 'Read a note.',
    handler: function() {
        console.log('Reading a note.');
    }
});

// List
yargs.command({
    command: 'list',
    description: 'list all notes.',
    handler: function() {
        console.log('Listing your notes.');
    }
});

//console.log(process.argv);
yargs.parse();
