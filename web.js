//let name= window.prompt("whats username"); 
let username;
document.getElementById("mybutton").onclick=function(){
    username=document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("mylable").innerHTML= "HELLO "+ username +" Welcome to GOA Assistance";
}

