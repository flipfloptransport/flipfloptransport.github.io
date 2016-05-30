function fadeOutIn( $curr, $next ) {
	$curr.animate({opacity: 0}, 600, null).removeClass('active');
	$next.animate({opacity: 1}, 600, null).addClass('active');	
}

$(document).ready( function(){
	var SLIDER_INTERVAL = 4000;
	var $image1, $image2, $swp;
	
	$image1 = $('#wedding1');
	$image2 = $('#wedding2');
	
	setInterval( function(){
		fadeOutIn($image1, $image2);
		$swp = $image1;
		$image1 = $image2;
		$image2 = $swp;
	}, SLIDER_INTERVAL);
});