console.log("connected")


const getInfo=(id)=>{
    $.ajax({
        method: "GET",
        url: "http://incrediblecutz.herokuapp.com/customers/"+id
    }).then((data) => {
        console.log(data)
    })
}