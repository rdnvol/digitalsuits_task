document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.products-slider .splide', {
    mediaQuery: 'min',
    breakpoints: {
      650: {
        destroy: true,
      },
    },
    classes: {
      pagination: 'splide__pagination splide__pagination-custom ',
      page: 'splide__pagination__page splide__pagination__page-custom',
    },
  });
  splide.mount();
});
