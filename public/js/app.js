window.onscroll = function () { myFunction() }

var header = document.getElementById("header")
var sticky = header.offsetTop

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky")
        header.classList.remove("nonSticky")
    } else {
        header.classList.remove("sticky")
        header.classList.add("nonSticky")
    }
}

const name = document.getElementById("name");
const hometown = document.getElementById("hometown");
const favCut = document.getElementById("favCut");
const whyYouCutHair = document.getElementById("whyYouCutHair");
const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");
const saturday = document.getElementById("saturday");
const sunday = document.getElementById("sunday");
// const barberImage = document.getElementById("barberImage").scr = pictureArray[counter];

const getBarbers = () => {
    $.ajax({
        method: "GET",
        url: "http://incrediblecutz.herokuapp.com/users"
    }).then((data)=>{
        barbers = data;
        name.innerText = barbers[0].firstName + ' ' + barbers[0].lastName;
        hometown.innerText = barbers[0].hometown;
        favCut.innerText = barbers[0].favCut;
        whyYouCutHair.innerText = barbers[0].whatMadeYouCutHair;
        monday.innerText = barbers[0].monday;
        tuesday.innerText = barbers[0].tuesday;
        wednesday.innerText = barbers[0].wednesday;
        thursday.innerText = barbers[0].thursday;
        friday.innerText = barbers[0].friday;
        saturday.innerText = barbers[0].saturday;
        sunday.innerText = barbers[0].sunday;
    })
}


let counter = 0;
const pictureArray = ["/images/johnnyFigueroa.jpg", "/images/johnnyBarber.jpg", "/images/juan.jpg"]

setInterval(() => {
$.ajax({
    method: "GET",
    url: "http://incrediblecutz.herokuapp.com/users"  
}).then((data)=>{
    barbers = data
    name.innerText = barbers[counter].firstName + ' ' + barbers[counter].lastName;
    hometown.innerText = barbers[counter].hometown;
    favCut.innerText = barbers[counter].favCut;
    whyYouCutHair.innerText = barbers[counter].whatMadeYouCutHair;
    monday.innerText = barbers[counter].monday;
    tuesday.innerText = barbers[counter].tuesday;
    wednesday.innerText = barbers[counter].wednesday;
    thursday.innerText = barbers[counter].thursday;
    friday.innerText = barbers[counter].friday;
    saturday.innerText = barbers[counter].saturday;
    sunday.innerText = barbers[counter].sunday;
    

    if (counter === barbers.length-1) {
        counter = 0;
    } else { 
        counter += 1;
    }
})    
}, 8000);
    




