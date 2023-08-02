// Crie um único objeto observer
const observer = new IntersectionObserver(entries => {
    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 0.1) {
            if (entry.target.classList.contains('init-hidden-normal')) {
                entry.target.classList.add('init-hidden-off-normal');
                entry.target.classList.remove('init-hidden-normal');
            } else if (entry.target.classList.contains('init-hidden-cima')) {
                entry.target.classList.add('init-from-cima');
            } else if (entry.target.classList.contains('init-hidden-esquerda')) {
                entry.target.classList.add('init-from-esquerda');
            }
        }
    });
}, {
    threshold: [0.1]
});

Array.from(document.querySelectorAll('.init-hidden-normal, .init-hidden-cima, .init-hidden-esquerda')).forEach(element => {
    observer.observe(element);
});
// Crie um único objeto observer
// funcao cookies
function aceitarCookies() {
    document.getElementById("cookie-banner").style.display = "none";
    localStorage.setItem("cookiesAceitos", true);
    document.body.classList.remove("no-scroll");
}
if (!localStorage.getItem("cookiesAceitos")) {
    document.body.classList.add("no-scroll");
} else {
    document.getElementById("cookie-banner").style.display = "none";
}
window.addEventListener("scroll", function () {
    if (!localStorage.getItem("cookiesAceitos")) {
        window.scrollTo(0, 0);
    }
});
// funcao cookies
// funcao das perguntas e respostas
function mostrarResposta(numero) {
    var resposta = document.getElementById('resposta' + numero);
    var icone = document.getElementById('icone' + numero);

    if (resposta.style.display !== 'block') {
        resposta.style.display = 'block';
        icone.classList.remove('icone-right');
        icone.classList.add('icone-down');
    } else {
        resposta.style.display = 'none';
        icone.classList.remove('icone-down');
        icone.classList.add('icone-right');
    }
}
// funcao das perguntas e respostas
// funcao para exibir a mensagem enviado
function exibirMensagemEnviado() {
    alert("Obrigado, entrarei em contato o mais breve possível");
}
document.querySelector("form").addEventListener("submit", function (event) {
    exibirMensagemEnviado();
});
// funcao para exibir a mensagem enviado
// funcao para validar somente letras e espaços no campo input nome text
function validarCampo(input) {
    var valor = input.value;
    var regex = /^[a-zA-Z\s]*$/;

    if (!regex.test(valor)) {
        input.value = valor.replace(/[^a-zA-Z\s]/g, '');
    }
}
// funcao para validar somente letras e espaços no campo input nome text

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
//comando para subir o site ao topo quando clicar na div inicio
const botao = document.querySelector(".inicio");
const inicio = document.querySelector("#top"); // Adicione um ID à tag <body> para referenciá-la aqui
botao.addEventListener("click", function (event) {
    event.preventDefault();
    inicio.scrollIntoView({ behavior: "smooth" });
});
window.addEventListener("scroll", function () {
    if (window.scrollY === 0) {
        botao.classList.remove("visible");
    } else {
        botao.classList.add("visible");
    }
});
//comando para subir o site ao topo quando clicar na div inicio