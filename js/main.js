$('.carousel').carousel({
	interval: false
});

//Keyboard Navigation
$(document).bind('keyup', function(e) {
    if(e.which == 39){
        $('.carousel').carousel('next');
    }
    else if(e.which == 37){
        $('.carousel').carousel('prev');
    }
});


// //Pan & Zoom
// var clickCount = 0;

// 	//Zoom
// 	$('img').click(function(e){
// 		e.preventDefault();

// 		var e = window.event;

// 	    var posX = e.clientX;
// 	    var posY = e.clientY;

// 	    document.posx = posX;
// 	    document.posy = posY;

// 		if (clickCount == 0) {
// 			function zoom() {
// 			var position = document.querySelectorAll("img");
// 				position[0].style.transformOrigin = posX + 'px ' + posY + 'px';
// 				position[1].style.transformOrigin = posX + 'px ' + posY + 'px';
// 				position[2].style.transformOrigin = posX + 'px ' + posY + 'px';
// 				position[3].style.transformOrigin = posX + 'px ' + posY + 'px';
// 				position[0].style.webkitTransform = "scale(2)";
// 				position[1].style.webkitTransform = "scale(2)";
// 				position[2].style.webkitTransform = "scale(2)";
// 				position[3].style.webkitTransform = "scale(2)";
// 				position[0].style.cursor = 'zoom-out';
// 				position[1].style.cursor = 'zoom-out';
// 				position[2].style.cursor = 'zoom-out';
// 				position[3].style.cursor = 'zoom-out';
// 			}

// 			zoom();
// 			clickCount = ++clickCount

// 		} else {
// 			function clearStyle(){
// 				var position = document.querySelectorAll("img");
// 				position[0].style.transformOrigin = '0px 0px';
// 				position[1].style.transformOrigin = '0px 0px';
// 				position[2].style.transformOrigin = '0px 0px';
// 				position[3].style.transformOrigin = '0px 0px';
// 				position[0].style.webkitTransform = "scale(1)";
// 				position[1].style.webkitTransform = "scale(1)";
// 				position[2].style.webkitTransform = "scale(1)";
// 				position[3].style.webkitTransform = "scale(1)";
// 				position[0].style.cursor = 'zoom-in';
// 				position[1].style.cursor = 'zoom-in';
// 				position[2].style.cursor = 'zoom-in';
// 				position[3].style.cursor = 'zoom-in';
// 			}
// 			clearStyle();
// 			clickCount = 0;
// 		}

// 	})

// 	//Pan
// 	$('img').mousemove(function(e){
// 		e.preventDefault();

// 		var e = window.event;

// 	    var posX = e.clientX;
// 	    var posY = e.clientY;

// 	    document.posx = posX;
// 	    document.posy = posY;

// 	    function pan() {
// 			var position = document.querySelectorAll("img");
// 				position[0].style.transformOrigin = posX + 'px ' + posY + 'px';
// 				position[1].style.transformOrigin = posX + 'px ' + posY + 'px';
// 				position[2].style.transformOrigin = posX + 'px ' + posY + 'px';
// 				position[3].style.transformOrigin = posX + 'px ' + posY + 'px';
// 			}
// 			pan();

// 	})

