console.log("connected")


// const getInfo=(_id)=>{
//     $.ajax({
//         method: "GET",
//         url: "http://incrediblecutz.herokuapp.com/customers/" +_id
//     }).then((data) => {
//         console.log($(this).id)
//         console.log(data)
//     })
// }



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

    if (counter === barbers.length) {
        counter = 0;
    } else { 
        counter += 1;
    }
})    

       
        
    }, 6000);
    




