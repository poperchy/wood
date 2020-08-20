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