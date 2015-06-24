Template.carousel.onRendered(function () {
  this.$('#carousel').slick();

  this.$('#carousel-multiple').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});