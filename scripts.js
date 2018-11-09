//declaring the variables for the width and height of the window
// cf https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window
var windowW=window.innerWidth;
var windowH=window.innerHeight;

$(document).ready(function(){
  var logoImageH = 0.1*windowH;
  $("#logoImage").height(logoImageH);
  $("#logoImage").css('margin-top',0.3*logoImageH+'px');

//BIG  QUESTION: HOW TO COUNT THE numberOfPictures?
//AND HOW TO ADD THEM ONE BY ONE?
  var numberOfPictures;
  for (var i; i<numberOfPictures+1; i++){
    jQuery('<div/>', {
      id: 'photo'+i,
      class: 'pictureStyle',
      title: 'now this div has a title!'
    }).appendTo('#gallery');
  }
});
