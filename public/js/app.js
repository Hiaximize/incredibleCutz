console.log("connected")

$.ajax({
    method: "GET",
    url: "https://incrediblecutz.herokuapp.com/customers"
}).then((data)=>{
    console.log(data)
})