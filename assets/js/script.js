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
    let rellax = new Rellax('.rellax')

    AOS.init()

    /************************
        Modal
    *************************/
    function newsModal() {
        if (!document.querySelector('.modal')) return

        const modal = document.querySelector('.modal')
        const backdrop = modal.querySelector('.modal__backdrop')
        const closeModalBtn = modal.querySelector('.modal__close')
        const openModalBtn = document.querySelector('.modal-open')

        openModalBtn.addEventListener('click', () => {
            modal.classList.add('active')
        })

        closeModalBtn.addEventListener('click', () => {
            modal.classList.remove('active')
        })

        backdrop.addEventListener('click', () => {
            modal.classList.remove('active')
        })

        document.addEventListener('keyup', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active')
            }

            if (e.key === 'Escape' && document.querySelector('.site-nav').classList.contains('active')) {
                document.querySelector('.site-nav').classList.remove('active')
                document.querySelector('.site-header__btn').innerHTML = '<i class="fa-solid fa-bars"></i>'
            }
        })
    }

    newsModal()

    /************************
        Team Member Biography Popup
    *************************/
    function teamMemberPopup() {
        if (!document.querySelector('.bio-popup')) return

        const teamMembers = document.querySelectorAll('[data-team]')
        const popups = [...document.querySelectorAll('.bio-popup')]

        // open popup
        teamMembers.forEach((teamMember) => {
            teamMember.addEventListener('click', () => {
                const popup = popups.find((popup) => popup.id === teamMember.dataset.team)
                const popupBg = popup.querySelector('.bio-popup__backdrop')
                const popupBtn = popup.querySelector('.bio-popup__close')

                popup.classList.add('active')

                // close popup
                popupBg.addEventListener('click', () => {
                    popup.classList.remove('active')
                })
                popupBtn.addEventListener('click', () => {
                    popup.classList.remove('active')
                })
            })
        })
    }

    teamMemberPopup()
})()
