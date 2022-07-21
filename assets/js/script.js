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
        spaceBetween: 40,
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
        Image Animation
    *************************/
    function cb(payload, scaleSize, offsetSize) {
        let initialOffset = 1
        let initialScale = 1
        const elem = payload[0]

        if (elem.isIntersecting) {
            const starterScrollY = window.scrollY
            document.addEventListener('scroll', () => {
                let wo = window.scrollY - starterScrollY
                let newScale = wo * scaleSize + initialScale < 1 ? 1 : wo * scaleSize + initialScale
                let newOffset = wo * offsetSize + initialOffset
                elem.target.style.transform = `translateY(${newOffset}px) scale(${newScale})`
            })
        }
    }

    // Hero Section
    const observerHero = new IntersectionObserver(
        (payload) => {
            cb(payload, 0.0006, 0.001)
        },
        {
            threshold: 1,
        }
    )

    observerHero.observe(document.querySelector('.decor-hero__birds'))

    const observerBirds2 = new IntersectionObserver(
        (payload) => {
            cb(payload, 0.0002, 0.003)
        },
        {
            threshold: 1,
        }
    )

    observerBirds2.observe(document.querySelector('.birds'))

    // Mission Section
    const handshake = document.querySelector('.mission-decor__handshake')

    const observerMission = new IntersectionObserver(
        (payload) => {
            cb(payload, 0.0001, 0.05)
        },
        {
            threshold: 1,
        }
    )

    observerMission.observe(handshake)

    // Clouds Section
    const cloud1 = document.querySelector('.cloud-1')

    const observerCloud1 = new IntersectionObserver(
        (payload) => {
            cb(payload, 0.0001, -0.2)
        },
        {
            threshold: 1,
        }
    )

    observerCloud1.observe(cloud1)

    // Clouds Section
    const cloud2 = document.querySelector('.cloud-2')

    const observerCloud2 = new IntersectionObserver(
        (payload) => {
            cb(payload, 0.0004, 0.02)
        },
        {
            threshold: 1,
        }
    )

    observerCloud2.observe(cloud2)

    // Clouds Section
    const windmill = document.querySelector('.windmill')

    const observerWindmill = new IntersectionObserver(
        (payload) => {
            cb(payload, 0, 0)
        },
        {
            threshold: 1,
        }
    )

    observerWindmill.observe(windmill)
})()
