console.log("connected")

$.ajax({
    method: "GET",
    url: "http://incrediblecutz.herokuapp.com/customers/"
}).then((data)=>{
    console.log(data)
})

const getInfo=(_id)=>{
   console.log(_id)
}