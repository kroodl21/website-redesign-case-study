
  
  
  
  
var burger = document.querySelector('.burger-container');
var indexHeaderTag = document.querySelector('.index-mobile-header');
var menuTag = document.querySelector('.menu');
var warningBar = document.querySelector('.ie-warning-bar');
var barClose = document.querySelector('.js-close');
var version = detectIE();

//mobile top
burger.addEventListener('click', function(){
  menuTag.style.display = "block";
  indexHeaderTag.classList.toggle('menu-opened');
});

// Get IE or Edge browser version
if(version === false || version >= 12 ){
  console.log("modern browser");
}else if(version < 12){
    warningBar.style.display = "block";
}

/*
  returns version of IE or false if browser is not Internet Explorer 
 */
function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}


//notification bar close
barClose.addEventListener('click', function(){
    warningBar.style.display = "none";
});

//mobile header turning white