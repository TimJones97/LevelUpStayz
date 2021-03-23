
// imagesLoaded( document.querySelectorAll('img'), () => {
// 	document.body.classList.remove('loading');
// });

Array.from(document.querySelectorAll('.grid__item-img')).forEach((el) => {
	const imgs = Array.from(el.querySelectorAll('img'));
	new hoverEffect({
		parent: el,
		intensity: el.dataset.intensity || undefined,
		speedIn: el.dataset.speedin || undefined,
		speedOut: el.dataset.speedout || undefined,
		easing: el.dataset.easing || undefined,
		hover: el.dataset.hover || undefined,
		image1: imgs[0].getAttribute('src'),
		image2: imgs[1].getAttribute('src'),
		displacementImage: el.dataset.displacement
	});
});

function hoverEffects(){
	$('.grid__item-img .overlay').hover(function(){
			$(this).parent().parent().addClass('show');
	  	}, 
	  	function() {
			$(this).parent().parent().removeClass('show');
	});
}
$(window).resize(function(){
	// if($(window).width() < 479){
	// 	$('.first-div').css('opacity', '0');
	// }
});
$(document).ready(function(){
	$('.image-container').stellar();
	hoverEffects();
	// setTimeout(function(){
	// 	$('.first-div').css('opacity', '0')
	// }, 1000);
	// setTimeout(function(){
	// 	$('.second-div').css('opacity', '0')
	// }, 2000);
});