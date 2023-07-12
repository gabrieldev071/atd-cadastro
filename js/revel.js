window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.container__header')
        scroll.classList.toggle('active', window.scrollY > 200)
})