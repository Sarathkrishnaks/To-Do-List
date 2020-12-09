let user=document.getElementById("user");
let error=document.getElementById("err");

function username(){
    if(user.value == "")
    {
        alert("Field cannot be blank! Please enter valid User id and Password");
        return false;
    }
    else if(user.value == "admin")
    {
        error.style.color="green";
        error.innerHTML="Successfully Validated !!";
        user.style.border="2px solid green";
        return true;
    }
    else{
        error.style.color="red";
        error.innerHTML="Please enter User Id as 'admin'!";
        user.style.border="2px solid red";
        return false;
    }
}

let pawd= document.getElementById("pawd");
let pass=document.getElementById("pw");

 function password(){
     if(pawd.value == ""){
         alert("Fields cannot be blank! Please enter valid UserId and password");
         return false;
     }
else if(pawd.value == "12345"){
    pass.style.color="green";
    pass.innerHTML="Succesfully validated";
    pawd.style.border="2px solid green";
    return true;
}
else{
    pass.style.color="red";
    pass.innerHTML="Please enter password as '12345'!";
    pawd.style.border="2px solid red";
    return false;
}

 }


 fetch("data.json").then(
    res=>
    res.json().then(
        data=>{
            console.log(data);
            if(data.length >0){
            var temp = "";
            // starts for loop
                data.forEach((u)=>{
                    temp+="<tr>";
                    temp+="<td>" + u.userId+"</td>";
                    temp+="<td>" + u.id+"</td>";
                    temp+="<td>" + u.title+"</td>";
                    temp+="<td>" + u.completed+"</td>";
                    

                })
                // ends for loop
                document.getElementById("data").innerHTML= temp;
                const cb=document.getElementById('accept');
                console.log(cb.checked);

 }
 }
 )
 )


