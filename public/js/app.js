console.log("connected")


const getInfo=(event, _id)=>{
    $.ajax({
        method: "GET",
        url: "http://incrediblecutz.herokuapp.com/customers/" +_id
    }).then((data) => {
        console.log($(this).id)
        console.log(data)
    })
}