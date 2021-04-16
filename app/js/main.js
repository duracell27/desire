$(function () {
  $(".header__btn").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });
  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });

  $(".header__btn-menu").on("click", function () {
    $(".menu").toggleClass("menu--open");
  });

  if ($(window).width() < 651) {
    $(".works-path__item--measurements").appendTo($(".works-path__items-box"));
  }

  $(".top__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });

  $(".contact-slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 10,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        },
      },
      {
        breakpoint: 1510,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 585,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".article-slider__box").slick({
    arrows: true,
    prevArrow:
      '<button type="button" class="article-slider__arrow article-slider__arrowprev"><img src="images/blog-slide-prev.svg" alt="img"></button>',
    nextArrow:
      '<button type="button" class="article-slider__arrow article-slider__arrownext"><img src="images/blog-slide-next.svg" alt="img"></button>',
  });

  let mixer = mixitup(".gallery__inner", {
    load: {
      filter: ".bedroom",
    },
  });
});
