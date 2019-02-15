import jQuery from 'jquery'
var openBtn = document.getElementById("navbar_icon"); 
openBtn.addEventListener("click", openNav, false); 
var closeBtn = document.getElementById("closebtn"); 
closeBtn.addEventListener("click", closeNav, false); 
var menuBtn = document.querySelectorAll('.menu');
menuBtn.forEach(x => x.addEventListener("click", closeNav, false));



function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  jQuery(function ($) {
    $.scrollTo(0);

    $('#link1').click(function () { $.scrollTo($('#Home'), 500); });
    $('#link2').click(function () { $.scrollTo($('#aboutUs'), 500); });
    $('#link3').click(function () { $.scrollTo($('#someInfo'), 500); });
    $('#link4').click(function () { $.scrollTo($('#myRealizations'), 500); });
    $('#link5').click(function () { $.scrollTo($('#myOffer'), 500); });
    $('#link6').click(function () { $.scrollTo($('#myContact'), 500); });
}
)
 
 

