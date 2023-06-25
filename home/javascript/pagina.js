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

// função para aceitar somente letras
const nomeInput = document.getElementById('nome');

nomeInput.addEventListener('input', function (event) {
    const inputValue = event.target.value;

    const regex = /^[A-Za-z]+$/;

    if (!regex.test(inputValue)) {
        event.target.value = inputValue.replace(/[^A-Za-z]+/g, '');
    }
});
// função para aceitar somente letras

// função para validar somente 11 numeros
function formatarTelefone(event) {
    const input = event.target;
    const phoneNumber = input.value.replace(/\D/g, '');
    const phoneNumberLength = phoneNumber.length;
    let formattedPhoneNumber = '';

    if (phoneNumberLength > 0) {
        formattedPhoneNumber += '(' + phoneNumber.substring(0, 2) + ')';
    }

    if (phoneNumberLength > 2) {
        formattedPhoneNumber += ' ' + phoneNumber.substring(2, 7);
    }

    if (phoneNumberLength > 7) {
        formattedPhoneNumber += '-' + phoneNumber.substring(7, 11);
    }

    input.value = formattedPhoneNumber;
}

function validarTelefone(event) {
    const input = event.target;
    const phoneNumber = input.value.replace(/\D/g, '');
    const valid = phoneNumber.length === 11;
    input.setCustomValidity(valid ? '' : 'Digite um número de telefone válido (11 dígitos).');
}

const telefoneInput = document.getElementById('telefone');
telefoneInput.addEventListener('input', formatarTelefone);
telefoneInput.addEventListener('blur', validarTelefone);
// função para validar somente 11 numeros