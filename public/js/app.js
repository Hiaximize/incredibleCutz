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


$.ajax({
    method: "GET",
    url: "http://incrediblecutz.herokuapp.com/users"  
}).then((data)=>{
    const name = document.getElementById("name");

    const hometown = document.getElementById("hometown");

    const favCut = document.getElementById("favCut");

    const whyYouCutHair = document.getElementById("whyYouCutHair");

    let counter = 0;

    console.log(data[counter])

    setInterval((counter) => {

        name.innerText = data[counter].firstName + ' ' + data[counter].lastName;

        counter += 1;

        if(counter === data.length){
            counter = 0;
        }
        
    }, 3000);
    
})



