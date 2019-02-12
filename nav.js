var openBtn = document.getElementById("navbar_icon"); 
openBtn.addEventListener("click", openNav, false); 
var closeBtn = document.getElementById("closebtn"); 
closeBtn.addEventListener("click", closeNav, false); 
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
 

