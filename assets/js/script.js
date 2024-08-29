/* 
yellow  #F7CB7F
orange  #EFA07A
green   #E6EE99
blue    #5FD1FA
purple  #B096F6
*/

const bgColors = [
    "#F7CB7F", "#EFA07A",
    "#E6EE99", "#5FD1FA",
    "#B096F6",
]

const allNotes = document.querySelectorAll(".notes .note");
let randomIndex;
function changeNoteBgColor(note){
    randomIndex = Math.floor(Math.random() * bgColors.length);
    note.style.backgroundColor = bgColors[randomIndex];
}
allNotes.forEach(note => {
    changeNoteBgColor(note);
});



// Handling dark / light mode button
const addNoteBt = document.querySelector("header .add-note")
const darkModeBt = document.querySelector(".dark-mode");
const body = document.querySelector("body");
const searchBar = document.querySelector("header .right .search-bar");
darkModeBt.addEventListener("click", () => {
    console.log(body.style.backgroundColor)
   if (body.style.backgroundColor === "rgb(255, 255, 255)" || body.style.backgroundColor === ""){
        body.style.backgroundColor = "#120F1D";
        searchBar.querySelector("input").style.backgroundColor = "#120F1D";
        searchBar.querySelector("input").style.borderColor = "lightgrey";
        searchBar.querySelector("img").src = "assets/images/search-dark.png"
        searchBar.querySelector("input").style.color = "#fff";
        darkModeBt.querySelector("img").src="assets/images/light.png";
        addNoteBt.querySelector("img").src = "assets/images/plus-dark.png";
    }
    else if(body.style.backgroundColor === "#120F1D" || body.style.backgroundColor === "rgb(18, 15, 29)" ){
        body.style.backgroundColor = "#fff";
        searchBar.querySelector("input").style.backgroundColor = "#fff";
        searchBar.querySelector("input").style.borderColor = "";
        searchBar.querySelector("img").src = "assets/images/search-light.png"
        // searchBar.querySelector("input").placeholder.style.color = "#120F1D";
        searchBar.querySelector("input").style.color = "#000";
        darkModeBt.querySelector("img").src="assets/images/dark.png";
        addNoteBt.querySelector("img").src = "assets/images/plus-light.png";

    }
});


// Add new note
const notes = document.querySelector(".notes");
addNoteBt.addEventListener("click", () => {
    let note = document.createElement("div");
    note.classList.add("note");

    let textarea = document.createElement("textarea");
    textarea.setAttribute("placeholder", "Write a new note!");
    textarea.setAttribute("name", "note");

    let date = document.createElement("p");
    date.classList.add("date");
    var currentDate = new Date();

    // Array of month names
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Get the day of the month
    var day = currentDate.getDate();

    // Get the month name
    var month = monthNames[currentDate.getMonth()];

    // Get the year
    var year = currentDate.getFullYear();

    // Format the date as "Jul 27, 2024"
    var formattedDate = month + " " + day + ", " + year;

    date.textContent= formattedDate;

    note.appendChild(textarea);
    note.appendChild(date);

    changeNoteBgColor(note);
    notes.appendChild(note);

});







