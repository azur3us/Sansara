var el = document.getElementById("navbar_icon"); 
el.addEventListener("click", openNav, false); 
var el = document.getElementById("closebtn"); 
el.addEventListener("click", closeNav, false); 
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
