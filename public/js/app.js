console.log("connected")


const getInfo=()=>{
    $.ajax({
        method: "GET",
        url: "http://incrediblecutz.herokuapp.com/customers/"
    }).then((data) => {
        console.log(data)
    })
}