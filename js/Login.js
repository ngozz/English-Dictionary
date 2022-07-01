let username = document.getElementById("username");
let password = document.getElementById("password");
let searchBtn = document.querySelector(".button");


searchBtn.addEventListener("click", function(e){
    e.preventDefault();
  
    if (username.value == "admin" && password.value == "admin"){
        alert ("Login successfully");
        window.location = "./ENG-VIE.html"
    }
});