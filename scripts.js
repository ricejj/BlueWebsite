//declaring the variables for the width and height of the window
// cf https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window
var windowW=window.innerWidth;
var windowH=window.innerHeight;

$(document).ready(function(){
  var logoImageH = 0.1*windowH;
  $("#logoImage").height(logoImageH);
  $("#logoImage").css('margin-top',0.3*logoImageH+'px');
});
