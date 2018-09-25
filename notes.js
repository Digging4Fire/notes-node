console.log('Starting notes.js');

const fs = require('fs');

// add new note functionality
var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {

  }

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

// list all notes functionality
var getAll = () => {
  console.log('Getting all notes');
};

// read single note functionality
var getNote = title => {
  console.log(`Reading ${title}`);
};

// remove single note functionality
var removeNote = title => {
  console.log(`Removing note: ${title}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
