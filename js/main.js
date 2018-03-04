 //slider owl-carousel
   $(document).ready(function(){

    //плавная прокрутка
    $("a,nav a,a[href='#'],a[rel='m_PageScroll2id'],a.PageScroll2id, a.mouse_scroll").mPageScroll2id({
      highlightSelector:"nav a"
  });

    //slider
     $('.owl-carousel').owlCarousel({
        smartSpeed:3000,
        autoplay: true,
        loop: true,
        autoplayTimeout:4000,
        items:1
     });

     /*слайдер с миниатюрами*/
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

     $('#carousel-2').infiniteCarousel({
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

   //плавное открытие модального окна
    wow = new WOW( {
     boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       100,          // через сколько пикселей сработает
    mobile:       false,       // default
    live:         true        // для мобильных оставить или убрать анимацию
  }
  )
  wow.init();
   new WOW().init();
     $('a.open-modal').click(function(event) {
  $(this).modal({
    fadeDuration: 250
  });
  return false;
});
