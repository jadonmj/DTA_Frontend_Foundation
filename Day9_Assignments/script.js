var str="";
function fn_saveData()
{
    //get data from input fields
    var enameObj = document.getElementById("ename");
    var enoObj = document.getElementById("eno");
    var eroleObj = document.getElementById("erole");
    var edeptObj = document.getElementById("edept");

    // Create object with input fields values 
    var userObj = {
        ename: enameObj.value,
        eno: enoObj.value,
        erole: eroleObj.value,
        edept: edeptObj.value
    }

    // Convert the object into JSON string				
	  str  =  JSON.stringify(userObj);
      //  console.log(str);

 var show = document.getElementById("display");
 show.innerText= str; }


 function fn_displayData()
 {
    var show= JSON.parse(str);
    alert(show.ename)
 }