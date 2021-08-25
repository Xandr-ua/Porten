$(document).ready(function () {
   $('.mob-menu__btn').on('click', function () {
      $('.mob-menu').toggleClass('active');
   });
   $('.seeson__clock-louis').slick({
   	slidesToShow: 3,
  	slidesToScroll: 1
   });
   $('.newarrivals__top').slick({
   	slidesToShow: 4,
  	slidesToScroll: 1
   });
   $('.newarrivals__bottom').slick({
   	slidesToShow: 4,
  	slidesToScroll: 1
   });
});