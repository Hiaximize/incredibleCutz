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
    url: "incrediblecutz.herokuapp.com/users/"  
}).then((data)=>{
    console.log(data)
})