function smoothScroll(elt){
	var pos = $(elt).offset().top + $(elt).height()/2 - $(window).height()/2
	console.log(pos);
	$('html, body').animate({scrollTop: pos}, 500);
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

var page_width = $("#tile0 .wrapper").children().first().outerHeight()
function fwd(tile){
    var wrap = $(tile+" .wrapper")
	page_width = wrap.children().first().outerHeight()
    var page = -parseInt(wrap.css("margin-left").slice(0,-2))/page_width
    if(page >= wrap.children(".pane").length - 1){
        wrap.animate({marginLeft: '0'}, 500);
    } else {
        wrap.animate({marginLeft: '-=' + page_width.toString()}, 500);
    }
}
var resizeTimer
$(window).resize(function(){
	// clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function() {
		console.log("ran")
		$(".wrapper").each(function(){
			var new_width = $(this).children().first().outerHeight()
			console.log(new_width, page_width)
			var page = -parseInt($(this).css("margin-left").slice(0,-2))/page_width
			if(page <= $(this).children().length){
				var pos = -page*new_width
			} else {
				var pos = 0
			}
			$(this).css("margin-left",String(pos)+'px')
		})
	}, 250);
})
