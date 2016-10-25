function smoothScroll(elt){
	console.log($(elt).offset().top-40);
	$('html, body').animate({scrollTop: $(elt).offset().top-40}, 500);
}

function fadeSwap(div, to){
    $(div).children().fadeOut()
    $(div).children("." + to.toString()).fadeIn()
}


var ss_div = "#slideshow"
var ss_len = 3
var ss_pos = 0
function slideshow(div){
    ss_pos++
    ss_pos = ss_pos % ss_len
    fadeSwap(div,ss_pos)
}





// Interval of the slideshow in ms. 8000 (8s) default
var intervalID = setInterval(slideshow, 8000,ss_div)
