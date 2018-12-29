//declaring the variables for the width and height of the window
// cf https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window
var windowW=window.innerWidth;
var windowH=window.innerHeight;

const picsList = [
  " b l e u s i n r e k t o u r b",
  "-serious-he",
  "-an-old-photograph",
  "-three-statues",
  "a-look-into-darkness",
  "a-neck-problem",
  "bronze",
  "fly-bird",
  "four-looks-on-the-memorial",
  "headlights",
  "IMG_7558_dying-light",
  "IMG_7585_shadows-of-an-evening-sky",
  "IMG_7612_all-straight",
  "IMG_7633_christmas-2018",
  "memo",
  "one-look-on-the-memorial",
  "playing-with-shadows",
  "proud-proud-regular-windows",
  "sour",
  "-shadow-of-the-tree",
  //"-she's-here",
  //"the way 1 ld",
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


//dealing with mobile devices
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
{
  window.alert("Sorry, JayProd hasn't optimized\nthe website for mobile devices yet...\n Working on it though!\n:-)");
}

//dealing with resizing the window (or lanscape <-> portrait on mobile)
$(window).on('resize', function() {
  //alert("Noooooo\nDon't toy with me, please!\n:'(\nReload the page when you're done\nplaying with the window size...")
    if($(window).height() > $(window).width()) {
        $(".gallery").css("grid-template-columns", "1fr");
    }else{
        $(".gallery").css("grid-template-columns", "1fr 1fr 1fr");
    }
})

//Functions for modals
// Open the Modal
function openModal() {
  document.getElementById('modal').style.display = "block";
}
// Close the Modal
function closeModal() {
  document.getElementById('modal').style.display = "none";
}
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
var slideIndex;
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


//on load of the page
$(document).ready(function(){

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
  for (var i=1; i<=numberOfPictures; i++){
    console.log(i);
    //adding the pic to the gallery
    var div = jQuery('<div/>', {
      id: 'cell'+i,
      class: 'cell content',
      title:'',
    });
    div.append(jQuery('<img/>', {
      id: 'image'+i,
      class: 'pictureStyle',
      onclick: "openModal();currentSlide("+i+")",
      src:'https://www.jayprod.com/images/gallery/tmb_'+jpgize(shuffledPicsList[i-1]),
    }));
    div.appendTo('#gallery');
    //adding the modals (pop-up with the "big_" picture)
    var div2 = jQuery('<div/>', {
      class: 'slides',
      id: 'slide'+i,
    });
    var n='https://www.jayprod.com/images/gallery/big_'+jpgize(shuffledPicsList[i-1]);
    div2.append(jQuery('<img/>', {
      id: 'big_image'+i,
      class: "bigPictures",
      src:n,
    }));
    div2.appendTo('#modalsList');
  }
  //showing the slides
  slideIndex = 1;
  showSlides(slideIndex);

  //Resizing the images in the cells
  var cell_width=$(".cell").width();
  var cell_height=$(".cell").height();
  $(".pictureStyle").css({"max-width":cell_width,"max-height":cell_height});
  $(".pictureStyle").css('diplay','block');
  $(".pictureStyle").css({'margin-left':'auto','margin-left':'auto'});

  //Resizing the images in the modals
  var modal_width=$("#modal").width();
  var modal_height=$("#modal").height();
  $(".bigPictures").css({"max-width":0.9*modal_width,"max-height":0.9*modal_height});

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


});
