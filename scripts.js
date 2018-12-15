//declaring the variables for the width and height of the window
// cf https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window
var windowW=window.innerWidth;
var windowH=window.innerHeight;

const picsList = [
  " b l e u s i n r e k t o u r b",
  "-serious-he",
  "-shadow-of-the-tree",
  "-she's-here",
  "the way 1 ld",
  "-the-face-of-wisdom"
];

//A function to add ".jpg" at the end of a name
function jpgize(picName){
  return picName+".jpg";
}

//Function to shuffle the elements of a list
// cf https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

/*//a function to give the right style so that the picture fills its zone
function fill_landscape(image){
  if(image.length > )

}*/


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

  //Filling the gallery with the actual pictures
  //shuffling up
  var shuffledPicsList = new Array(picsList.length).fill('0');
  for(var it = 0; it<picsList.length; it++){
    shuffledPicsList[it] = picsList[it];
  }
  shuffle(shuffledPicsList);



  //Setting up the size of the gap between the grid elements
  $(".gallery").css("grid-gap","20px");

  // Filling the gallery
  var numberOfPictures = shuffledPicsList.length;
  for (var i=0; i<numberOfPictures; i++){
    console.log(i);
    //adding the pic to the gallery
    var div = jQuery('<div/>', {
      id: 'cell'+i,
      class: 'cell content',
      title: ''});
    div.append(jQuery('<img/>', {
      id: 'image'+i,
      class: 'pictureStyle',
      src:'images/gallery/thumbnails/tmb_'+jpgize(shuffledPicsList[i]),
    }));
    div.appendTo('#gallery');
    /*//adding the modal (pop-up with the "big_" picture)
    var div2 = jQuery('<div/>', {
      id: 'slide'+i
    }).append(jQuery('<img/>', {
      id: 'big_image'+i,
      class: 'pictureStyle',
      src:'images/gallery/thumbnails/tmb_'+jpgize(shuffledPicsList[i]),
    }));
    div2.appendTo('#modalsList');*/
  }

  //Resizing the images in the cells
  var cell_width=$(".cell").width();
  var cell_height=$(".cell").height();
  $(".pictureStyle").css({"max-width":cell_width,"max-height":cell_height});
  $(".pictureStyle").css('diplay','block');
  $(".pictureStyle").css({'margin-left':'auto','margin-left':'auto'});

  //SETTING UP THE PARALLAX EFFECT
  var scene = $('#gallery').get(0);
  //getting an alternating data-depth every other picture
  var j;
  var galleryContent = $("#gallery").children();
  for(j = 0; j<numberOfPictures; j++){
    if(j%2==0){
      $(galleryContent[j]).attr("data-depth","0.2");
    }else{
      $(galleryContent[j]).attr("data-depth","0.25");
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
