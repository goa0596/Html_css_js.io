//let name= window.prompt("whats username"); 
let username;
function disp(){
    username=document.getElementById("mytext").value;
    username= username.toUpperCase();
    console.log(username);
    document.getElementById("mylable").innerHTML= "HELLO "+ username +" Welcome to GOA Assistance";
    document.getElementById("demo").innerHTML="HELLO, " + username  + " WELCOME TO MY PAGE";
    //password = window.prompt("PassWord")
    //console.log(password)
}

