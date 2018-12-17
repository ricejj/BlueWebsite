//on load of the page
$(document).ready(function(){

  //Adding the header with the logo
  var logoImageH = 0.1*windowH;
  $("#myHeader").height(logoImageH);
  $("#myHeader").width(windowW);
  $("#logoImage").css('margin-top',0.3*logoImageH+'px');

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
