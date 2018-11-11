//declaring the variables for the width and height of the window
// cf https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window
var windowW=window.innerWidth;
var windowH=window.innerHeight;

//dealing with mobile devices
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
{
  window.alert("Sorry, JayProd hasn't optimized\nthe website for mobile devices yet...\n Working on it though!\n:-)");
}

//dealing with resizing the window (or lanscape <-> portrait on mobile)
$(window).on('resize', function() {
  alert("Noooooo\nDon't toy with me, please!\n:'(\nReload the page when you're done\nplaying with the window size...")
    if($(window).height() > $(window).width()) {
        $(".gallery").css("grid-template-columns", "1fr");
    }else{
        $(".gallery").css("grid-template-columns", "1fr 1fr 1fr");
    }
})

//on load of the page
$(document).ready(function(){
  var logoImageH = 0.1*windowH;
  $("#logoImage").height(logoImageH);
  $("#logoImage").css('margin-top',0.3*logoImageH+'px');

  //Setting up the size of the rows
  var rowSize=0.33*windowH;
  $(".gallery").css({"grid-template-rows":rowSize,"grid-auto-rows":rowSize});

  //Resizing the images in the cells
  var cell_width=$(".cell").width();
  var cell_height=$(".cell").height();
  $(".pictureStyle").css({"max-width":cell_width,"max-height":cell_height});

  //Setting up the size of the gap between the grid elements
  $(".gallery").css("grid-gap","20px");

//BIG  QUESTION: HOW TO COUNT THE numberOfPictures?
//AND HOW TO ADD THEM ONE BY ONE?
// MAYBE USE https://stackoverflow.com/questions/6994212/is-there-a-way-to-return-a-list-of-all-the-image-file-names-from-a-folder-using
  /*var numberOfPictures;
  for (var i; i<numberOfPictures+1; i++){
    jQuery('<div/>', {
      id: 'photo'+i,
      class: 'pictureStyle',
      title: 'now this div has a title!'
    }).appendTo('#gallery');
  }*/
});
