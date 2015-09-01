$('.carousel').carousel({
	interval: false
});



$('img').mousedown(function(e){
	var e = window.event;

    var posX = e.clientX;
    var posY = e.clientY;

    document.posx = posX;
    document.posy = posY;

	function zoom() {
	var position = document.querySelectorAll("img");
		position[0].style.transformOrigin = posX + 'px ' + posY + 'px';
		position[1].style.transformOrigin = posX + 'px ' + posY + 'px';
		position[2].style.transformOrigin = posX + 'px ' + posY + 'px';
		position[3].style.transformOrigin = posX + 'px ' + posY + 'px';
	}

	zoom();

})


