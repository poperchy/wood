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
    //
    // let galleryThumbs = new Swiper('.gallery-thumbs', {
    //     spaceBetween: 10,
    //     slidesPerView: 4,
    //     freeMode: true,
    //     watchSlidesVisibility: true,
    //     watchSlidesProgress: true,
    // });
    // let galleryTop = new Swiper('.gallery-top', {
    //     spaceBetween: 10,
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     thumbs: {
    //         swiper: galleryThumbs
    //     }
    // });



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

    new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        mousewheel: false,
        keyboard: false,
    })

    btnShowAll.addEventListener('click', function (e) {
        e.preventDefault();
        let bulletedList = document.getElementsByClassName('bulleted-list__item');
        for (let i=0;i<bulletedList.length;i+=1){

            bulletedList[i].style.display = 'block';
            btnShowAllLink.textContent = 'Скрыть';
            showAllArrow.style.transform = 'rotate(-180deg) translateY(50%)';
        }

        bulletedList[i].style.display = 'none';
    })

    // let galleryThumbs = new Swiper('.gallery-thumbs', {
    //     spaceBetween: 10,
    //     slidesPerView: 4,
    //     freeMode: true,
    //     watchSlidesVisibility: true,
    //     watchSlidesProgress: true,
    // });
    // let galleryTop = new Swiper('.gallery-top', {
    //     spaceBetween: 10,
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     thumbs: {
    //         swiper: galleryThumbs
    //     }
    // });


}();

$( document ).ready(function() {
    $('[data-fancybox="images-gallery"]').fancybox({
        buttons: [
            'slideShow',
            'share',
            'zoom',
            'fullScreen',
            'close'
        ],
        thumbs: {
            autoStart: true
        }
    });


});























// JavaScript Document
function isDevice() {
    return ((/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())))
}

function initZoom(width, height) {
    $.removeData('#zoom_10', 'elevateZoom');
    $('.zoomContainer').remove();
    $('.zoomWindowContainer').remove();
    $("#zoom_10").elevateZoom({
        responsive: true,
        tint: true,
        tintColour: '#E84C3C',
        tintOpacity: 0.5,
        easing: true,
        borderSize: 0,
        lensSize: 100,
        constrainType: "height",
        loadingIcon: "https://icodefy.com/Tools/iZoom/images/loading.GIF",
        containLensZoom: false,
        zoomWindowPosition: 1,
        zoomWindowOffetx: 20,
        zoomWindowWidth: width,
        zoomWindowHeight: height,
        gallery: 'gallery_pdp',
        galleryActiveClass: "active",
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 500,
        lensFadeIn: 500,
        lensFadeOut: 500,
        cursor: "https://icodefy.com/Tools/iZoom/images/zoom-out.png",
    });
}

$(document).ready(function() {
    /* init vertical carousel if thumb image length greater that 4 */
    if ($("#gallery_pdp a").length > 4) {
        $("#gallery_pdp a").css("margin", "0");
        $("#gallery_pdp").rcarousel({
            orientation: "vertical",
            visible: 4,
            width: 105,
            height: 70,
            margin: 5,
            step: 1,
            speed: 500,
        });
        $("#ui-carousel-prev").show();
        $("#ui-carousel-next").show();
    }
    /* Init Product zoom */
    initZoom(500, 475);

    $("#ui-carousel-prev").click(function() {
        initZoom(500, 475);
    });

    $("#ui-carousel-next").click(function() {
        initZoom(500, 475);
    });

    // $(".zoomContainer").width($("#zoom_10").width());

    // $("body").delegate(".fancybox-inner .mega_enl", "click", function() {
    //     $(this).html("");
    //     $(this).hide();
    // });
    // $('#gallery_pdp img').click((e) => {
    // 	console.log(e)
    // })

});

$(window).resize(function() {
    var docWidth = $(document).width();
    if (docWidth > 769) {
        initZoom(500, 475);
    } else {
        $.removeData('#zoom_10', 'elevateZoom');
        $('.zoomContainer').remove();
        $('.zoomWindowContainer').remove();
        $("#zoom_10").elevateZoom({
            responsive: true,
            tint: false,
            tintColour: '#3c3c3c',
            tintOpacity: 0.5,
            easing: true,
            borderSize: 0,
            loadingIcon: "https://icodefy.com/Tools/iZoom/images/loading.GIF",
            zoomWindowPosition: "productInfoContainer",
            zoomWindowWidth: 330,
            gallery: 'gallery_pdp',
            galleryActiveClass: "active",
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 500,
            lensFadeOut: 500,
            cursor: "https://icodefy.com/Tools/iZoom/images/zoom-out.png",
        });

    }
})

$(document).ready(function() {
    $("#zoom_10").fancybox();
});