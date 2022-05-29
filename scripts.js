const myLibrary = [{
    author: "J.K. Rowling",
    title: "Harry Potter i Komnata Tajemnic",
    numberOfPages: 363,
    readOrNot: true,
    bookInfo: bookInfofunction
}, {
    author: "Cixin Liu",
    title: "Problem trzech ciał",
    numberOfPages: 452,
    readOrNot: false,
    bookInfo: bookInfofunction
}
];


function Book(inputAuthor, inputTitle, inputNumberOfPages, inputReadOrNot) {
    this.author = inputAuthor;
    this.title = inputTitle;
    this.numberOfPages = inputNumberOfPages;
    this.readOrNot = inputReadOrNot;
    this.bookInfo = bookInfofunction;
}

function bookInfofunction() {
    return (`${this.title} by ${this.author}, ${this.numberOfPages} pages`)
}

function checkIfBookRead(read) {
    if (read) {
        return "read already";
    } else {
        return "not read yet";
    }
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let numberOfPages = document.getElementById("numberOfPages").value;
    let readOrNot = "";
    if (document.getElementById("read").checked) {
        readOrNot = true;
    } else {
        readOrNot = false;
    }
    let book = new Book(author, title, numberOfPages, readOrNot);
    myLibrary.push(book);
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("numberOfPages").value = "";
    document.getElementById("read").checked = false;
    document.getElementById("unread").checked = false;
}

document.getElementById("save").addEventListener("click", addBookToLibrary);



function displayAllBooks() {
    document.querySelectorAll(".book").forEach(el => el.remove());
    let placeForBooks = document.querySelector("#placeForBooks");
    for (i = 0; i <= myLibrary.length - 1; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("book");
        newDiv.classList.add("container");
        placeForBooks.appendChild(newDiv);
        let divForTextContent=document.createElement("div");
        divForTextContent.classList.add("book");
        divForTextContent.classList.add("placeForText");
        newDiv.appendChild(divForTextContent);
        divForTextContent.textContent = myLibrary[i].bookInfo();
        let removeBookButton = document.createElement("button");
        removeBookButton.classList.add("book");
        removeBookButton.classList.add("removeButton");
        removeBookButton.id = myLibrary[i].title;
        removeBookButton.textContent = "x";
        let changeReadStatusButton = document.createElement("button");
        changeReadStatusButton.classList.add("book");
        changeReadStatusButton.classList.add("readStatusButton")
        changeReadStatusButton.id = myLibrary[i].title + "id";
        function readStatusForButton() {
            if (myLibrary[i].readOrNot) {
                return "read"
            } else {
                return "unread"
            }
        }
        changeReadStatusButton.textContent = readStatusForButton();
        if(changeReadStatusButton.textContent=="read"){
            changeReadStatusButton.style.backgroundColor="RGB(97,106,65)";
        }else{
            changeReadStatusButton.style.backgroundColor="RGBA(136,45,23,0.2)";
            changeReadStatusButton.style.borderColor="RGBA(136,45,23,0.2)"
        }
        newDiv.appendChild(changeReadStatusButton);
        newDiv.appendChild(removeBookButton);

        changeReadStatusButton.addEventListener("click", function (event) {
            let indexForReadStaus = myLibrary.findIndex((book) => book.title + "id" == event.target.id);
            function checkTextContentOnButton() {
                if (event.target.textContent == "read") {
                    return "unread";
                } else {
                    return "read";
                }
            }

            if (event.target.textContent == "read") {
                event.target.style.backgroundColor="RGBA(136,45,23,0.2)";
                event.target.style.borderColor="RGBA(136,45,23,0.2)"

            } else {
                event.target.style.backgroundColor="RGB(97,106,65)";
            };
             

            changeReadStatusButton.textContent = checkTextContentOnButton();
        
          
            if (myLibrary[indexForReadStaus].readOrNot) {
                myLibrary[indexForReadStaus].readOrNot = false;
            } else {
                myLibrary[indexForReadStaus].readOrNot = true;
            };
        })



        removeBookButton.addEventListener("click", function (event) {
            let index = myLibrary.findIndex((book) => book.title == event.target.id);
            myLibrary.splice(index, 1);
            newDiv.remove();
        })

    }
}



document.getElementById("showBooks").addEventListener("click", displayAllBooks);


document.getElementById("formForNewBook").style.visibility = "hidden";

document.getElementById("addNewBook").addEventListener("click", function () {
    document.getElementById("formForNewBook").style.visibility = "visible";
})




