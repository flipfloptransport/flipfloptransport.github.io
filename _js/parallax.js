var SM_SCREEN = 480,
	MD_SCREEN = 768,
	LG_SCREEN = 1024;
	
$(document).ready(function() {
	if ($("#js-parallax-window").length && window.matchMedia("(min-width: " + MD_SCREEN + "px)").matches) {
		parallax();
	}
});

$(window).scroll(function(e) {
	if ($("#js-parallax-window").length && window.matchMedia("(min-width: " + MD_SCREEN + "px)").matches) {
		parallax();
	}
});

function parallax(){
  if( $("#js-parallax-window").length > 0 ) {
    var plxBackground = $("#js-parallax-background");
    var plxWindow = $("#js-parallax-window");

    var plxWindowTopToPageTop = $(plxWindow).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed;
	if (window.matchMedia("(min-width: " + LG_SCREEN + "px)").matches) {
		plxSpeed = 1;
	} else if (window.matchMedia("(min-width: " + MD_SCREEN + "px)").matches) {
		plxSpeed = 0.9;
	}

    plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
  }
}
