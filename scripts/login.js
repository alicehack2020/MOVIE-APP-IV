var sumit=document.getElementById("sumit")



sumit.addEventListener("click",submitData)

function submitData()
{
event.preventDefault()
 
var email=document.getElementById("email").value
var password=document.getElementById("password").value
var data=JSON.parse(localStorage.getItem("userData")) || []
 
var flage=0
data.map((e)=>{
     if(email==e.email && password==e.password)
     {
        window.location="../index.html"
        flage=1 
        alert("Login Sucessfull")
     }
      
})

if(flage==0)
{
   alert("invalid Credentials")
}

}

// ‘name, release date, poster (add url of a poster), IMDb rating

 