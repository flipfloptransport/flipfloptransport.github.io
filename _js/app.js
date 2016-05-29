function fadeOutIn( $curr, $next ) {
	$curr.fadeOut(600).removeClass('active');
	$next.fadeIn(600).addClass('active');
}

$(document).ready( function(){
	var SLIDER_INTERVAL = 4000;
	var $image1, $image2, $swp;
	
	$image1 = $('.wedding1');
	$image2 = $('.wedding2');
	
	$image1.addClass('active');
	
	setInterval( function(){
		fadeOutIn($image1, $image2);
		$swp = $image1;
		$image1 = $image2;
		$image2 = $swp;
	}, SLIDER_INTERVAL);
});