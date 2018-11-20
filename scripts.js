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
  $("#myHeader").height(logoImageH);
  $("#myHeader").width(windowW);
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

  var listOfPics = $("#gallery").children();
  var numberOfPictures = listOfPics.length;
  /*for (var i; i<numberOfPictures+1; i++){
    jQuery('<div/>', {
      id: 'photo'+i,
      class: 'pictureStyle',
      title: 'now this div has a title!'
    }).appendTo('#gallery');
  }*/
  /*var margLeft = $(".cell").css('padding');
  margLeft = parseInt(margLeft,10);
  var margTop = $(".cell").css('padding');
  margTop = parseInt(margTop,10);

  $(".cell").mousemove(function(e){
    var imageInCell = jQuery(this).find("img");
    var imgX = imageInCell.offset().left;
    var cellX = $(this).offset().left;
    var finX = imgX;
    var finY = imgY;

    var imgY = imageInCell.offset().top;
    var cellY = $(this).offset().top

    var x_in_cell = cellX + 0.5*cell_width
                    - (2*margLeft/cell_width)*(e.pageX - cellX + cell_width/2);
    var y_in_cell = cellY + 0.5*cell_height
                    - (2*margTop/cell_height)*(e.pageY - cellY + cell_height/2)
    imageInCell.offset({top:y_in_cell,left:x_in_cell});
*/
    /*$(this).mouseleave(function(){
      imageInCell.offset({top:cellY, left:cellX});
      imageInCell.css({'margin-left':'auto','margin-left':'auto'});
    });*/

  $(".pictureStyle").css('diplay','block');
  $(".pictureStyle").css({'margin-left':'auto','margin-left':'auto'});

  //SETTING UP THE PARALLAX EFFECT
  var scene = $('#gallery').get(0);
  //getting an alternating data-depth every other picture
  var i;
  for(i = 0; i<numberOfPictures; i++){
    if(i%2==0){
      $(listOfPics[i]).attr("data-depth","0.2");
    }else{
      $(listOfPics[i]).attr("data-depth","0.25");
    }
  }
  //Creating the parallax instance
  var parallaxInstance = new Parallax(scene, {
    relativeInput: true,
    clipRelativeInput: true,
    hoverOnly: true
  });

  $(".cell").css('position','inherit');



/*$(".cell").hover(function(e){
  var imgX = this.offsetLeft;
  var imgY = this.offsetTop;
  var x_in_cell = e.pageX - imgX;
  var y_in_cell = e.pageY - imgY;
});*/

});

//Making the header sticky
window.onscroll = function() {stickyHeader()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
