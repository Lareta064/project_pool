$(function(){
	$('#carousel').infiniteCarousel({
		imagePath: 'images/',
		transitionSpeed:450,
		displayTime: 6000,
		internalThumbnails: false,
		thumbnailType: 'images',
		customClass: 'myCarousel',
		progressRingColorOpacity: '0,0,0,.9',
		progressRingBackgroundOn: true,
		easeLeft: 'easeOutExpo',
		easeRight:'easeOutQuad',
		inView: 1,
		advance: 1,
		autoPilot: true,
		prevNextInternal: true,
		autoHideCaptions: true
	});
});
