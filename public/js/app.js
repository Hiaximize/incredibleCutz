console.log("connected")

$.ajax({
    method: "GET",
    url: "http://incrediblecutz.herokuapp.com/customers/"
}).then((data)=>{
    console.log(data)
})

const getInfo =(customers_id)=>{
    console.log(customers_id)
}