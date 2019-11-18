console.log("connected")

$.ajax({
    method: "GET",
    url: "https://incrediblecutz.herokuapp.com/users"
}).then((data)=>{
    console.log(data)
})