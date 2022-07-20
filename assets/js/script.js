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

    // Hero Section
    const observerHero = new IntersectionObserver(cb, {
        root: null,
        threshold: 1,
    })

    function cb(payload) {
        let initialOffset = 1
        let initialScale = 1
        const elem = payload[0]

        if (elem.isIntersecting) {
            document.addEventListener('scroll', () => {
                let wo = window.scrollY
                let newScale = wo * 0.0006 + initialScale
                let newOffset = wo * 0.0001 + initialOffset
                elem.target.style.transform = `translateY(${newOffset}px) scale(${newScale})`
            })
        }
    }

    observerHero.observe(document.querySelector('.decor-hero__birds'))

    const observerBirds2 = new IntersectionObserver(cb, {
        root: null,
        threshold: 1,
    })

    function cb(payload) {
        let initialOffset = 1
        let initialScale = 1
        const elem = payload[0]

        if (elem.isIntersecting) {
            const starterScrollY = window.scrollY
            document.addEventListener('scroll', () => {
                let wo = window.scrollY - starterScrollY
                let newScale = wo * 0.0002 + initialScale < 1 ? 1 : wo * 0.0002 + initialScale
                let newOffset = wo * 0.0001 + initialOffset
                elem.target.style.transform = `translateY(${newOffset}px) scale(${newScale})`
            })
        }
    }

    observerBirds2.observe(document.querySelector('.birds'))

    // Mission Section
    const handshake = document.querySelector('.mission-decor__handshake')

    const observerMission = new IntersectionObserver(cb2, {
        root: null,
        threshold: 1,
    })

    function cb2(payload) {
        let initialOffset = 1
        let initialScale = 1
        const elem = payload[0]

        if (elem.isIntersecting) {
            const starterScrollY = window.scrollY
            document.addEventListener('scroll', () => {
                let wo = window.scrollY - starterScrollY
                let newScale = wo * 0.0002 + initialScale < 1 ? 1 : wo * 0.0002 + initialScale
                let newOffset = wo * 0.005 + initialOffset
                elem.target.style.transform = `translateY(${newOffset}%) scale(${newScale})`
            })
        }
    }

    observerMission.observe(handshake)

    // Clouds Section
    const cloud1 = document.querySelector('.cloud-1')

    const observerCloud1 = new IntersectionObserver(cb3, {
        root: null,
        threshold: 1,
    })

    function cb3(payload) {
        let initialOffset = 1
        let initialScale = 1
        const elem = payload[0]

        if (elem.isIntersecting) {
            const starterScrollY = window.scrollY
            document.addEventListener('scroll', () => {
                let wo = window.scrollY - starterScrollY
                let newScale = wo * 0.0002 + initialScale < 1 ? 1 : wo * 0.0002 + initialScale
                let newOffset = wo * 0.015 + initialOffset
                elem.target.style.transform = `translateY(${newOffset}%) scale(${newScale})`
            })
        }
    }

    observerCloud1.observe(cloud1)

    // Clouds Section
    const cloud2 = document.querySelector('.cloud-2')

    const observerCloud2 = new IntersectionObserver(cb4, {
        root: null,
        threshold: 1,
    })

    function cb4(payload) {
        let initialOffset = 1
        let initialScale = 1
        const elem = payload[0]

        if (elem.isIntersecting) {
            const starterScrollY = window.scrollY
            document.addEventListener('scroll', () => {
                let wo = window.scrollY - starterScrollY
                let newScale = wo * 0.0003 + initialScale < 1 ? 1 : wo * 0.0003 + initialScale
                let newOffset = wo * 0.01 + initialOffset
                elem.target.style.transform = `translateY(${newOffset}%) scale(${newScale})`
            })
        }
    }

    observerCloud2.observe(cloud2)

    // Clouds Section
    const windmill = document.querySelector('.windmill')

    const observerWindmill = new IntersectionObserver(cb5, {
        root: null,
        threshold: 1,
    })

    function cb5(payload) {
        let initialOffset = 1
        let initialScale = 1
        const elem = payload[0]

        if (elem.isIntersecting) {
            const starterScrollY = window.scrollY
            document.addEventListener('scroll', () => {
                let wo = window.scrollY - starterScrollY
                let newScale = wo * 0.0001 + initialScale < 1 ? 1 : wo * 0.0001 + initialScale
                let newOffset = wo * 0.0001 + initialOffset
                elem.target.style.transform = `translateY(${newOffset}%) scale(${newScale})`
            })
        }
    }

    observerWindmill.observe(windmill)
})()
