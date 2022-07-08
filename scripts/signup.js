var sumit=document.getElementById("sumit")



sumit.addEventListener("click",submitData)

function submitData()
{
event.preventDefault()
var name=document.getElementById("name").value
var mobile=document.getElementById("mobile").value
var email=document.getElementById("email").value
var password=document.getElementById("password").value
var data=JSON.parse(localStorage.getItem("userData")) || []
var res={name:name,mobile:mobile,email:email,password:password}
data.push(res)
localStorage.setItem("userData",JSON.stringify(data))

}