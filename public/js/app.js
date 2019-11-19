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


let counter = 0;

setInterval(() => {
$.ajax({
    method: "GET",
    url: "http://incrediblecutz.herokuapp.com/users"  
}).then((data)=>{

    const barbers = data
    const name = document.getElementById("name");

    const hometown = document.getElementById("hometown");

    const favCut = document.getElementById("favCut");

    const whyYouCutHair = document.getElementById("whyYouCutHair");

    name.innerText = barbers[counter].firstName + ' ' + barbers[counter].lastName;
    hometown.innerText = barbers[counter].hometown;
    favCut.innerText = barbers[counter].favCut;
    whyYouCutHair.innerText = barbers[counter].whyYouCutHair;

    if (counter === barbers.length-1) {
        counter = 0;
    } else { 
        counter += 1;
    }
})    
}, 6000);
    




