$(function () {

  $( function () {
  $( ".stars__button, .hour__button" ).draggable();});


  $(function () {
    $(".stars").rateYo({
      rating: 4.5
    });

  });


  $(".feedback__slider").slick({
    arrows:false,
    slidesToShow:2,
    infinity:false,
    appendArrows: (".container__arrows"),
    waitForAnimate:false,
    dots: true,
    appendDots:$('.feedback__dots'),
  });

  $('.feedback__slider-prev').on('click', (e)=> {
    e.preventDefault()
      $('.feedback__slider').slick('slickPrev')
    });

  $('.feedback__slider-next').on('click', (e)=> {
    e.preventDefault()
      $('.feedback__slider').slick('slickNext')
  });


  // $('.program__acc-link').on('click', function (e){
  //   e.preventDefault()
  //   $(this).toggleClass('program__acc-link--acrtive')
  //   $(this).children('.program__acc-text').slideToggle()
  // })


  $('.program__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('program__acc-link--active')) {
            $(this).removeClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideUp()
        }
        else {
            $('.program__acc-link').removeClass('program__acc-link--active')
            $('.program__acc-text').slideUp()
            $(this).addClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideDown()
        }
    })
})