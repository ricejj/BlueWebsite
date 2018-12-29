//declaring the variables for the width and height of the window
// cf https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window
var windowW=window.innerWidth;
var windowH=window.innerHeight;

//on load of the page
$(document).ready(function(){

  var logoH = $("#logoButton").height();
  $("#logoImage").css('padding-top',0.20*logoH+'px');
  $("#aboutButton").height(logoH+'px');
  $("#aboutButton").width(logoH+'px');
  $("#aboutButton").css('padding',0.28*logoH+'px');
  $("#instaButton").height(logoH+'px');
  $("#instaButton").width(logoH+'px');
  $("#instaButton").css('padding',0.25*logoH+'px');
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
