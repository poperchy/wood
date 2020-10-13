// window.onload = function () {
//     new fullpage('.scroll-page', {
//         navigation: true,
//     });
//
//     new Swiper('.swiper-container', {
//         loop: true,
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         mousewheel: false,
//         keyboard: true,
//     })
//
//     document.addEventListener("mousemove", parallax);
//
//     function parallax(e) {
//         this.querySelectorAll('.parallax__img').forEach(layer => {
//             const speed = layer.getAttribute('data-speed')
//
//             const x = (window.innerWidth - e.pageX * speed) / 100
//             const y = (window.innerWidth - e.pageY * speed) / 100
//
//             layer.style.transform = `translateX(${x}px) translateY(${y}px)`
//         })
//     }
//
//     $("form").submit(function (e) {
//         e.preventDefault();
//         document.getElementById('input-name').value = "";
//         document.getElementById('input-phone').value = "";
//         document.getElementById('input-email').value = "";
//         document.getElementById('input-login').value = "";
//
//         let modalSent = document.getElementById("modal-sent");
//         let spanClose = document.getElementsByClassName("sent__close")[0];
//         modalSent.style.display = "block";
//
//         spanClose.onclick = function () {
//             modalSent.style.display = "none";
//
//         };
//         window.onclick = function (event) {
//             if (event.target == modalSent) {
//                 modalSent.style.display = "none";
//                 // location.reload(true);
//             }
//         };
//     });
//
// }();

window.onload = function () {




    const navList = document.querySelector('.nav-mobile-menu');
    const menuToggle = document.querySelector('.js-menu-toggle');
    const body = document.querySelector('body');
    const navBurger = document.querySelector('.nav__button-burger');
    const navLink = document.querySelectorAll('.nav__link--mobile');

    const btnShowAll = document.querySelector('.show-all__wrap');
    const btnShowAllLink = document.querySelector('.show-all__title');
    const bulletedList = document.querySelector('.bulleted-list__list');
    const showAllArrow = document.querySelector('.show-all__img');

    menuToggle.addEventListener('click', function (e) {
        e.preventDefault();
        if (navList.classList.contains('nav-mobile-menu--active')) {
            navList.classList.remove('nav-mobile-menu--active');
            navBurger.classList.remove('nav__button-burger--active');
            body.style.overflow = '';
        } else {
            navList.classList.add('nav-mobile-menu--active');
            navBurger.classList.add('nav__button-burger--active');
            body.style.overflow = 'hidden';
        }
    })

    // btnShowAll.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     let bulletedList = document.querySelector('bulleted-list__item');
    //     for (let i = 0; i < bulletedList.length; i += 1) {
    //
    //         bulletedList[i].style.display = 'block';
    //         btnShowAllLink.textContent = 'Скрыть';
    //         showAllArrow.style.transform = 'rotate(-180deg) translateY(50%)';
    //     }
    //
    //     bulletedList[i].style.display = 'none';
    // })

    new Swiper('.swiper-hero', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: false,
        keyboard: false,
    })

    new Swiper('.swiper-about', {
        slidesPerView: 3,
        spaceBetween:30,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 'auto',
                loop:true,
                centeredSlides: true,
                spaceBetween:10,


            },
            // // when window width is >= 480px


            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    })
    new Swiper('.swiper-workshop', {
        slidesPerView: 'auto',
        loop:true,
        centeredSlides: true,
        spaceBetween: 10,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })


    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 0,
        slidesPerView: 3,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        centeredSlidesBounds: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 3,
                spaceBetween: 10,
                direction: 'horizontal',
            },
            // // when window width is >= 480px


            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 10,
                direction: 'vertical',
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 10,
                direction: 'vertical',
            },
        },
        freeMode: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        zoom: {
            maxRatio: 5,
        },
        preventInteractionOnTransition: true,
        spaceBetween: 20,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 30,
            slideShadows: false,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 300,
            },
            // // when window width is >= 480px
            // 480: {
            //     slidesPerView: 3,
            //     spaceBetween: 30
            // },
            // when window width is >= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 80,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        thumbs: {
            swiper: galleryThumbs,
        }
    });
    galleryTop.on('slideChangeTransitionStart', function () {
        galleryThumbs.slideTo(galleryTop.activeIndex);
    });

    galleryThumbs.on('transitionStart', function () {
        galleryTop.slideTo(galleryThumbs.activeIndex);
    });


    // var reviewsThumbs = new Swiper('.reviews__thumb', {
    //     spaceBetween: 0,
    //     slidesPerView: 3,
    //     centeredSlides: true,
    //     touchRatio: 0.2,
    //     slideToClickedSlide: true,
    //     centeredSlidesBounds: true,
    //     watchOverflow: true,
    //     watchSlidesVisibility: true,
    //     watchSlidesProgress: true,
    //
    //     breakpoints: {
    //         // when window width is >= 320px
    //         320: {
    //             slidesPerView: 3,
    //             spaceBetween: 10,
    //             direction: 'horizontal',
    //         },
    //         // // when window width is >= 480px
    //
    //
    //         // when window width is >= 640px
    //         640: {
    //             slidesPerView: 3,
    //             spaceBetween: 10,
    //             direction: 'vertical',
    //         },
    //         767: {
    //             slidesPerView: 3,
    //             spaceBetween: 10,
    //             direction: 'vertical',
    //         },
    //     },
    //     freeMode: true,
    // });
    // var reviewsTop = new Swiper('.reviews__top', {
    //     watchOverflow: true,
    //     watchSlidesVisibility: true,
    //     watchSlidesProgress: true,
    //     preventInteractionOnTransition: true,
    //     spaceBetween: 200,
    //     effect: 'coverflow',
    //     coverflowEffect: {
    //         rotate: 30,
    //         slideShadows: false,
    //     },
    //     breakpoints: {
    //         320: {
    //             slidesPerView: 1,
    //             spaceBetween: 300,
    //         },
    //         // // when window width is >= 480px
    //         480: {
    //             slidesPerView: 1,
    //             spaceBetween: 300,
    //         },
    //
    //         640: {
    //             slidesPerView: 1,
    //             spaceBetween: 200,
    //         }
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //
    //     thumbs: {
    //         swiper: reviewsThumbs,
    //     }
    // });
    // reviewsTop.on('slideChangeTransitionStart', function () {
    //     reviewsThumbs.slideTo(reviewsTop.activeIndex);
    // });
    //
    // galleryThumbs.on('transitionStart', function () {
    //     reviewsTop.slideTo(reviewsThumbs.activeIndex);
    // });




    $('[data-fancybox="images-gallery"]').fancybox({
        buttons: [
            'slideShow',
            'share',
            'zoom',
            'fullScreen',
            'close'
        ],
    });
    $('[data-fancybox="images-about"]').fancybox({
        buttons: [
            'slideShow',
            'share',
            'zoom',
            'fullScreen',
            'close'
        ],
    });

    $('[data-fancybox="images-workshop"]').fancybox({
        buttons: [
            'slideShow',
            'share',
            'zoom',
            'fullScreen',
            'close'
        ],
    });
    $('[data-fancybox="images-about"]').fancybox({
        buttons: [
            'slideShow',
            'share',
            'zoom',
            'fullScreen',
            'close'
        ],
    });
    $('[data-fancybox="images-workshop"]').fancybox({
        buttons: [
            'slideShow',
            'share',
            'zoom',
            'fullScreen',
            'close'
        ],
    });
    $('[data-fancybox="images-inst"]').fancybox({
        buttons: [
            'slideShow',
            'share',
            'zoom',
            'fullScreen',
            'close'
        ],
    });
    var element = document.getElementById('pattern-phone-mask');
    var maskOptions = {
        mask: '+{7}(000)000-00-00'
    };
    var mask = IMask(element, maskOptions);

    $(".form__input-file").change(function () {
        "" != $(this).val() && ($(".form__file-text").text("Выбрано файлов: " + $(this)[0].files.length), $(".form__file-reset").css("display", "block"), $(".form__label-file").css("font-size", "16px"));
    }),
        $(".form__file-reset").click(function (e) {
            e.preventDefault(), $(".form__input-file").val(""), $(".form__label-file").css("font-size", "0"), $(".form__file-reset").css("display", "none");
        })
}();





