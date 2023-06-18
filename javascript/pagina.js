window.addEventListener('scroll', function () {
    let header = this.document.querySelector('#header')
    header.classList.toggle('rolagem', this.window.scrollY > 0)
})

window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0);
});

window.addEventListener('beforeunload', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});