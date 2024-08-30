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
    handelMenuBt(note);

    // let favBt = note.querySelector(".options .fav");
    // delBt.addEventListener("click", () => {

    // });

    deleteNote(note);
    
});
// handel delete note button
function deleteNote(note){
    let delBt = note.querySelector(".options .del"); 
    delBt.addEventListener("click", () => {
        note.style.display = "none";
        // send delete request ...
    });
}

// handel menu button
function handelMenuBt(note){
    let optionsBt = note.querySelector(".optionsBt");
    let options = note.querySelector(".options");
    optionsBt.addEventListener("click", () => {
        console.log("sadddddddddddddddd")

        if ( options.style.display === "none" ||  options.style.display === ""){
            options.style.display = "flex";
        }
        else if ( options.style.display === "flex"){
            options.style.display = "none";
        }
    } );
}



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

    /*
    <button class="optionsBt"><img src="assets/images/menu.png" alt="Dots menu icon"></button>
                <div class="options">
                    <button class="fav">Favorite</button>
                    <hr>
                    <button class="del">Delete</button>
                </div>
    */
    let optionsBtMenu = document.createElement("button");
    optionsBtMenu.classList.add("optionsBt");
    let img = document.createElement("img");
    img.src = "assets/images/menu.png";
    optionsBtMenu.appendChild(img);
    note.appendChild(optionsBtMenu);

    let optionsMenu = document.createElement("div");
    optionsMenu.classList.add("options");
    let favBt = document.createElement("button");
    favBt.classList.add("fav");
    favBt.textContent = "Favorite";
    optionsMenu.appendChild(favBt);

    optionsMenu.appendChild(document.createElement("hr"));

   let delBt = document.createElement("button");
   delBt.classList.add("del");
   delBt.textContent = "Delete";
   optionsMenu.appendChild(delBt);
   note.appendChild(optionsMenu);
    changeNoteBgColor(note);

    handelMenuBt(note);
    deleteNote(note);

    notes.appendChild(note);
    console.log("note added");

});






