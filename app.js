let notes = [];

let getNotes = () => {
    let takeNote = localStorage.getItem("newNote");
    notes = JSON.parse(takeNote) || []
    add()
}

getNotes();

function addNotes() {
    let note = document.getElementById('notes').value;

    if (note === "") {
        return 0
    }
    else {
        notes.push(note)
        localStorage.setItem("newNote", JSON.stringify(notes))
        add();
    }

}


function add() {

    let section = document.getElementById('section');

    for (let i = 0; i < notes.length; i++) {

        section.innerHTML +=
            `<div class="box">
        <div class="info">
        <p id="ip${i}" class="padding-3 size-17px underline"><strong>192.168.100.1</strong></p>
        <p id="time${i}" class="padding-3 size-17px">2 minutes ago</p>
        <button class="delete" class="padding-3 size-17px">Delete</button>
        </div>
        <div class="message" id="message${i}"></div>
        </div>`

        document.getElementById(`message${i}`).innerHTML = notes[i]
    }

}

function clearFunc() {
    let section = document.getElementById('section');
    alert('Do you really want to delete all notes ?')
    localStorage.removeItem('newNote')
    section.innerHTML = "";
    notes = [];
}

console.log(notes[7]);
