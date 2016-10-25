function smoothScroll(elt){
	console.log($(elt).offset().top-40);
	$('html, body').animate({scrollTop: $(elt).offset().top-40}, 500);
}

function fadeSwap(div, to){
    $(div).children().each(function(index){
        if(index == to){
            $(this).animate({opacity:1},400)
        } else {
            $(this).animate({opacity:0},400)
        }
    })
}


var ss_div = "#slideshow"
var ss_len = 3
var ss_pos = ss_len-1
function slideshow(div){
    ss_pos++
    ss_pos = ss_pos % ss_len
    fadeSwap(div,ss_pos)
}
// Interval of the slideshow in ms. 8000 (8s) default
var intervalID = setInterval(slideshow, 2000,ss_div)

function fwd(tile){
    var wrap = $(tile+" .wrapper")
    var page = -parseInt(wrap.css("margin-left").slice(0,-2))/600
    if(page >= wrap.children(".pane").length - 1){
        wrap.animate({marginLeft: '0'}, 500);
    } else {
        wrap.animate({marginLeft: '-=600'}, 500);
    }
}
