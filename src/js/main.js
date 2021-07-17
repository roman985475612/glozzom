window.addEventListener('DOMContentLoaded', () => {
    // Carousel
    const carouselShowcase = document.querySelector('#carouselShowcase')
    const carousel = new bootstrap.Carousel(carouselShowcase, {
        interval: 6000,
        pause: 'hover'
    })

    // Modal video
    const videoBtn = document.querySelector('.video-player__btn')
    const $videoModal = document.getElementById('videoModal')
    const videoFrame = document.querySelector('#videoModal iframe')

    const videoModal = new bootstrap.Modal($videoModal, {
        keyboard: true
    })

    videoBtn.addEventListener('click', e => {
        if (e.currentTarget.classList.contains('video-player__btn')) {
            videoFrame.setAttribute('src', e.currentTarget.dataset.video)
            videoModal.show()                
        }
    })

    $videoModal.addEventListener('hide.bs.modal', function (event) {
        videoFrame.setAttribute('src', '')
    })

    // BaguetteBox
    baguetteBox.run('.gallery__list')

    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter__form')
    const newsletterSubmitBtn = newsletterForm.querySelector('.form__submit')

    newsletterForm.addEventListener('focusin', clearForm)
    newsletterForm.addEventListener('submit', async e => {
        e.preventDefault()

        newsletterSubmitBtn.disabled = true

        if (validation(e.target)) {
            console.log('Valid OK')
        }
        
        newsletterSubmitBtn.disabled = false
    })

})

function clearForm(e) {
    if (e.target.classList.contains('form-control')) {
        e.target.classList.remove('is-invalid')
        e.target.classList.remove('is-valid')
    }
}

function validation(form) {
    let patterns = {
        notEmpty: /.+/,
        email: /^.+@.+\..+$/
    }

    let fields = form.querySelectorAll('.form-control')
    let isValid = true
    
    fields.forEach(f => {
        let pattern = patterns[f.dataset.valid]
        f.value = f.value.trim()
        
        if (pattern.test(f.value)) {
            f.classList.add('is-valid')
        } else {
            f.classList.add('is-invalid')
            isValid = false
        }
    })

    return isValid
}