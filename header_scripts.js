//declaring the variables for the width and height of the window
// cf https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window
var windowW=window.innerWidth;
var windowH=window.innerHeight;

//on load of the page
$(document).ready(function(){

  var logoH = $("#logoImage").height();
  $("#JPicon").height(logoH);
  $("instaLogo").height(logoH);
  console.log("ok");
  //Adding the header with the logo
  /*var logoImageH = 0.1*windowH;
  $("#myHeader").height(logoImageH);
  $("#myHeader").width(windowW);
  $("#logoImage").css('margin-top',0.3*logoImageH+'px');*/
  //OBSOLETE --> done with the inline CSS now
});

  //Making the header sticky
/*window.onscroll = function() {stickyHeader()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} */
