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
  "25",
  "adults",
  "aeroport",
  "bloomin'",
  "bloomin'-n&b",
  "bokeh",
  "Charles",
  "bokeh_tourbillon",
  "day1_parade",
  "day2-season-of-the-force",
  "day3_paradise",
  "day4_chateau",
  "day5_btm",
  "day6_danse",
  "day7_hands",
  //"eyes_neon",
  "freedom",
  "Froum",
  "lamp",
  "paradise",
  "-the-face-of-wisdom",
  "_MG_9208_enter-the-gate",
  "IMG_7706_big-wheel_a",
  "IMG_7706_big-wheel_b",
  "IMG_7706_big-big-wheel",
  "IMG_7706_big-wheel",
  "IMG_0479_happy-new-year",
  "IMG_8050",
  "IMG_7143_and-the-magic-comes-in-light-w-cadre",
  "_MG_0451_trapped",
  "just-focus-w-cadre",
  "snowstorm-w-cadre",
  "watching-_-0392",
  "rebirth-_-0447",
  "king-of-the-ants-0413",
  "bare-look-on-up3-_-IMG_1938",
  "blue-look-on-up3-_-IMG_1938",
  "red-look-on-up3-_-IMG_1938",
  "green-look-on-up3-_-IMG_1938",
  "IMG_2008",
  "dansing-fumes",
  "woman-silhouette",
  "stairway-to-fade",
  "ursula",
  "konsequent",
  "pride",
  "IMG_7575_just-hangin",
  "printemps-w-cadres",
  "just-a-normal-street-in-paris",
  "paris",
  "aymane",
  "filou",
  "just-a-bridge",
  "merry-xmas",
  "IMG_3538_me",
  "flowers",
  "mondial de l'auto 2018-2775",
  "mondial de l'auto 2018-2781",
  "mondial de l'auto 2018-2785",
  "mondial de l'auto 2018-2790",
  "mondial de l'auto 2018-2792",
  "mondial de l'auto 2018-2797",
  "mondial de l'auto 2018-2801",
  "mondial de l'auto 2018-2803",
  "death-by-heat",
  "casually-watching-the-world-burn_-IMG_3461",
  "look-of-an-angel",
  "lucas-w-blue-tri",
  "Blue-eyes-cropped",
  "n&b-fond-noir",
  "IMG_1694-_-sur-l'herbe-recadree",
  "IMG_1506_in-love",
  "IMG_1260_-boules-n&b",
  "IMG_1582_-three-statues",
  "IMG_8866",
  "she-s-here",
  "nanou-old",
  "First-palm-of-the-summer-_-IMG_3513",
  "IMG_3205",
  "3-wake-up-call-IMG_3216",
  "4_-acid-summer-vibes-IMG_3515",
  "5_sunset-on-the-beach_IMG_3550",
  "6_-disappearing-in-the-sky",
  "7_-bananas-drifting-through-the-wind_-IMG_3293",
  "exhibition",
  "the-face-of-wisdom",
  "bee-on-a-sunflower-_-IMG_4379",
  "somewhat-of-a-symetry-IMG_3201",
  "I-see-fire_white",
  "reflection",
  "IMG_8463-cadre",
  "IMG_8542-cadre",
  "IMG_8586-cadre",
  //"cloudtal-_-IMG_0109",
  "among-the-fishes_IMG_8764_cadre",
  "another-trinity_whole",
  "photographe_MG_0408",
  "eyes of nature _ warm sunset in la selle _ IMG_3079"
  /*"cadre-casual-crosswords-IMG_0308",
  "cadre-des-fleurs-sur-la-ville-IMG_0304",
  "cadre-holding-paris-IMG_0335"*/
];

var device_mobile=false;
var orientation_portrait=false;
var cell_width;

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
  device_mobile=true;
  //window.alert("Sorry, JayProd hasn't optimized\nthe website for mobile devices yet...\n Working on it though!\n:-)");
}

if($(window).height() > $(window).width()) {
  orientation_portrait=true;
}

//dealing with resizing the window (or lanscape <-> portrait on mobile)
$(window).on('resize', function() {
  //alert("Noooooo\nDon't toy with me, please!\n:'(\nReload the page when you're done\nplaying with the window size...")
    /*if($(window).height() > $(window).width()) {
        $(".gallery").css("grid-template-columns", "1fr");
    }else{
      if(device_mobile==false){
        $(".gallery").css("grid-template-columns", "1fr 1fr 1fr");
      }else{
        $(".gallery").css("grid-template-columns", "1fr 1fr");
      }
    }*/
    if($(window).width()>=3*cell_width){
      $(".gallery").css("grid-template-columns", "1fr 1fr 1fr");
      console.log("ok pour 3");
    }else{
      if ($(window).width()<2*cell_width) {
        $(".gallery").css("grid-template-columns", "1fr");
        console.log("ok pour 1");
      }else{
        $(".gallery").css("grid-template-columns", "1fr 1fr");
        console.log("ok pour 2");
      }
    }
    $(".bigPictures").css("width", "auto");
    $(".bigPictures").css("height", "auto");
})

//Functions for modals
// Open the Modal
function openModal() {
  document.getElementById('modal').style.display = "block";
}
// Close the Modal
function closeModal(id) {
  document.getElementById(id).style.display = "none";
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

  //Setting up the number and size of the rows
  var rowSize;
  if(device_mobile==true){
    if(orientation_portrait==true){
      $(".gallery").css("grid-template-columns", "1fr");
      rowSize=0.27*windowH;
    }else{
      rowSize=0.27*windowW;
      $(".gallery").css("grid-template-columns", "1fr 1fr");
    }
  }else{
    rowSize=0.33*windowH;
    if(orientation_portrait==true){
      $(".gallery").css("grid-template-columns", "1fr");
    }else{
      $(".gallery").css("grid-template-columns", "1fr 1fr 1fr");
    }
  }
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
  var numberOfPictures = shuffledPicsList.length+3;
  for (var i=4; i<=numberOfPictures; i++){
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
  //cell_width is a global variable
  cell_width=$(".cell").width();
  var cell_height=$(".cell").height();
  $(".pictureStyle").css({"max-width":cell_width,"max-height":cell_height});
  $(".pictureStyle").css('diplay','block');
  $(".pictureStyle").css({'margin-left':'auto','margin-left':'auto'});

  //Resizing the images in the modals
  var modal_width=$("#modal").width();
  var modal_height=$("#modal").height();
  $(".bigPictures").css({"max-width":0.9*modal_width,"max-height":0.9*modal_height});

  //SETTING UP THE PARALLAX EFFECT, only on Desktops
  /*if(device_mobile==false){
    var scene = $('#gallery').get(0);
    //getting an alternating data-depth every other picture
    var j;
    var galleryContent = $("#gallery").children();
    for(j = 0; j<numberOfPictures; j++){
      if(j%2==0){
        $(galleryContent[j]).attr("data-depth","0.15");
      }else{
        $(galleryContent[j]).attr("data-depth","0.17");
      }
    }
    //Creating the parallax instance
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      clipRelativeInput: true,
      hoverOnly: false
    });
  }*/

  $(".cell").css('position','inherit');


});
