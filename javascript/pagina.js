// window.addEventListener('scroll', function () {
//     let header = this.document.querySelector('#header')
//     header.classList.toggle('rolagem', this.window.scrollY > 0)
// })

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
        if (window.innerWidth > 769) {
            addScrollListener();
        } else {
            removeScrollListener();
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
});

window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0);
});

window.addEventListener('beforeunload', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const heading = document.getElementById('color-changing-heading');
const colors = ['blue', 'green'];
let currentIndex = 0;

function changeColor() {
    heading.style.color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeColor, 1000);


