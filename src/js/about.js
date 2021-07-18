window.addEventListener('DOMContentLoaded', () => {
    (function () {
        const slides = document.querySelectorAll('.slider__item')
        const activeClass = 'slider__item--visible'

        let index = 0;

        setInterval(() => {
            slides[index].classList.remove(activeClass)

            index = index < (slides.length - 1) ? index + 1 : 0
            
            slides[index].classList.add(activeClass)
        }, 3000)
    })()
})