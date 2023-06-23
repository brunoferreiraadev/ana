// função do header para ser executada somente acima de 768px
window.addEventListener('load', function () {
    function handleScroll() {
        let header = document.querySelector('#header');
        header.classList.toggle('rolagem', window.scrollY > 0);
    }

    function addScrollListener() {
        window.addEventListener('scroll', handleScroll);
    }

    function removeScrollListener() {
        window.removeEventListener('scroll', handleScroll);
    }

    function handleResize() {
        if (window.innerWidth > 768) {
            addScrollListener();
        } else {
            removeScrollListener();
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
});
// função do header para ser executada somente acima de 768px

// função para recarregar a página e voltar no início do site
window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0);
});

window.addEventListener('beforeunload', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// função para recarregar a página e voltar no início do site

// função para mudar de cor no titulo abaixo do header
const heading = document.getElementById('color-changing-heading');
const colors = ['blue', 'green'];
let currentIndex = 0;

function changeColor() {
    heading.style.color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeColor, 1000);
// função para mudar de cor no titulo abaixo do header