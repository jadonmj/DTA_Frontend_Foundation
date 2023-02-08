function fn_saveData()
{
var suc =document.getElementById("succ");
var dan =document.getElementById("dang");
var namee= document.getElementById("nme");

if(namee.value=="admin")
{
// alert("Logged in Successfully");
// dan.classList.add("d-none")
console.log(namee.value);
suc.classList.remove("d-none");
}
else
// alert("Invalid User");
dan.classList.remove("d-none");
}