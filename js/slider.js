imgInt = 1
imgNext = 2;
imgText = 101;
imgTextNext = 102;

$(document).ready(function() {
	$('#imgbox >img#1').fadeIn(400);
	startImg();
	$('#imgbox > img, #previous, #next').on('click, mouseenter',function(event) {
		event.stopPropagation();
		event.preventDefault();
		window.clearInterval(loop);
	});
	$('#imgbox > img, #previous, #next').on('mouseleave', function(event){
		event.stopPropagation();
		event.preventDefault();
		startImg();
	});

	$("#sourceLink").click(function() {
		$('#sources').toggle(200);
		});


});

var startImg = function(){
	count = $('#imgbox > img').size();
	loop = setInterval(function(){

		if(imgNext > count){
			imgNext = 1;
			imgInt = 1;
		}
		$('#imgbox > img').fadeOut(400);
		$('#imgbox > img#'+imgNext).fadeIn(400);
		imgInt = imgNext;
		imgNext = imgNext + 1;		
	},3000);
}

var prev = function (){
	newImg = imgInt - 1;
	playImg(newImg);
};

var next = function(){
	newImg = imgInt + 1;
	playImg(newImg);
};


var playImg = function(id){

	if(id > count){
			id = 1;
		}else if (id < 0){
			id=count;
		}
		$('#imgbox > img').fadeOut(400);
		$('#imgbox > img#'+id).fadeIn(400);

		imgInt = id;
		imgNext = id + 1;
};


