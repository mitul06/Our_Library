console.log("ES6 using on project 2");

// create Book Class 
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    };
}

// create Display Class 
class Display {
    // create alertMsg fucntion for user enterd then showing
    alertMsg() {
        welcome = document.getElementById('welcome');
        welcome.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Welcome!</strong> To Our Library for add book.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;

        setTimeout(function () {
            welcome.innerHTML = '';
        }, 2000);

    };

    // create add Function for adding book 
    add(book) {
        console.log("Adding to UI");
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
        </tr>`;
        tableBody.innerHTML += uiString;
    };

    // create clear Function for clear book 
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    };

    // create validate Function for validation book, author 
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true;
        }
    };

    // create show Function for show book 
    show(type, displayMessage) {
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge : </strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
        setTimeout(function () {
            message.innerHTML = '';
        }, 2000);
    };
}

// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);
let alertMsg = new Display();
alertMsg.alertMsg();

function libraryFormSubmit(e) {
    console.log('You have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let civil = document.getElementById('civil');
    let programming = document.getElementById('programming');
    let electric = document.getElementById('electric');

    if (civil.checked) {
        type = civil.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (electric.checked) {
        type = electric.value;
    }else if (ec.checked) {
        type = ec.value;
    }else if (mechanical.checked) {
        type = mechanical.value;
    }


    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added');
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault();
}
