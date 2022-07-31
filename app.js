let notes = [];

// retriving data from localstorage when page is relaod
let getNotes = () => {
    let takeNote = localStorage.getItem("newNote");
    notes = JSON.parse(takeNote) || []
    add2();
}

getNotes();

function addNotes() {
    let note = document.getElementById('notes').value;
    let none = ""
    if (note === none) {
        return;
    }
    else {
        notes.push(note)
        localStorage.setItem("newNote", JSON.stringify(notes))
        add();
    }

}

function addNotes2() {
    let pic = document.getElementById('upload').value;
    if (pic == "") {
        return;
    }
    else {
        notes.push(pic)
        localStorage.setItem("newNote", JSON.stringify(notes))
        add();
    }
    
}

// adding data when page is refresh 

function add2() {

    let section = document.getElementById('section');
    for (let i = 0; i < notes.length; i++) {

        section.innerHTML +=
            `<div class="box">
        <div class="info">
        <p id="ip${i}" class="padding-3 size-17px underline"><strong>192.168.100.1</strong></p>
        <p id="time${i}" class="padding-3 size-13px">few moments ago</p>
        <button class="delete" class="padding-3 size-17px">Delete</button>
        </div>
        <div class="message" ><p id="message${i}"></p></div>
        </div>`

        document.getElementById(`message${i}`).innerHTML = notes[i]
    }

}

// adding data when any text or image is submit 

function add() {

    let section = document.getElementById('section');
    for (let i = notes.length - 1; i < notes.length; i++) {
        
        
        section.innerHTML +=
            `<div class="box">
            <div class="info">
            <p id="ip${i}" class="padding-3 size-17px underline"><strong>192.168.100.1</strong></p>
            <p id="time${i}" class="padding-3 size-13px">few moments ago</p>
            <button class="delete" class="padding-3 size-17px">Delete</button>
            </div>
            <div class="message" id="message${i}"></div>
            </div>`
            
            document.getElementById(`message${i}`).innerHTML = notes[i]
    }

}

// clear all data in dashboard

function clearFunc() {
    let section = document.getElementById('section');

    let clear = confirm('Do you really want to delete all notes ?');

    if (clear) {
        localStorage.removeItem('newNote')
        section.innerHTML = "";
        notes = [];
    }

    else{
        return;
    }
}

