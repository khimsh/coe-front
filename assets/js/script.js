;(() => {
    ;('use strict')

    /************************
        Sliders
    *************************/
    const heroSwiper = new Swiper('.hero__slider', {
        pagination: {
            el: '.hero__pagination',
            clickable: true,
        },
    })

    const teamSwiper = new Swiper('.team__slider', {
        slidesPerView: 1.2,
        spaceBetween: 20,
        // loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 480px
            480: {
                slidesPerView: 2.2,
                spaceBetween: 30,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 3.2,
                spaceBetween: 40,
            },
            // when window width is >= 2500
            2500: {
                slidesPerView: 4.2,
            },
        },
    })

    /************************
        Navigation
    *************************/
    function mobileNav() {
        if (!document.querySelector('.site-header__btn')) return

        const nav = document.querySelector('.site-nav')
        const openNav = document.querySelector('.site-header__btn')
        const links = nav.querySelectorAll('.site-nav__link')

        openNav.addEventListener('click', () => {
            nav.classList.toggle('active')

            if (nav.classList.contains('active')) {
                openNav.innerHTML = '<i class="fa-solid fa-xmark"></i>'
            } else {
                openNav.innerHTML = '<i class="fa-solid fa-bars"></i>'
            }
        })
        // openNav.addEventListener('focus', () => {
        //     if (nav.classList.contains('active')) return

        //     nav.classList.add('active')
        //     openNav.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        // })
        // openNav.addEventListener('blur', () => {
        //     links.forEach((link) => {
        //         // if (link !== document.activeElement) {
        //         nav.classList.remove('active')
        //         openNav.innerHTML = '<i class="fa-solid fa-bars"></i>'
        //         // }
        //     })
        // })

        links.forEach((link) => {
            link.addEventListener('click', () => {
                // let currentHref = window.location.href

                links.forEach((link) => {
                    link.classList.remove('active')
                })

                link.classList.add('active')
                nav.classList.remove('active')
                openNav.innerHTML = '<i class="fa-solid fa-bars"></i>'
            })
        })
    }

    mobileNav()

    /************************
        Animation
    *************************/
    let rellax = new Rellax('.rellax', {
        breakpoints: [1200, 2000],
    })

    AOS.init()
})()
