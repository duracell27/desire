$(function () {
    $('.header__btn').on('click', function(){
        $('.rightside-menu').removeClass('rightside-menu--close')
    })
    $('.rightside-menu__close').on('click', function(){
        $('.rightside-menu').addClass('rightside-menu--close')
    })

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    })

    $('.contact-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 10
    })

    $('.article-slider__box').slick({
        arrows: true,
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowprev"><img src="images/blog-slide-prev.svg" alt="img"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrownext"><img src="images/blog-slide-next.svg" alt="img"></button>'
    })
    
    let mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.bedroom'
        }
    })
})