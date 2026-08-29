// ==========================================
// POTÊNCIA TRAINING
// JavaScript principal do site
// ==========================================


// ==========================================
// MENU MOBILE
// ==========================================

const menuMobile = document.getElementById("menuMobile");
const nav = document.querySelector(".nav");

menuMobile.addEventListener("click", () => {

    nav.classList.toggle("active");

});


// Fecha o menu ao clicar em algum link
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


// ==========================================
// MODAL DE LOGIN
// ==========================================

const openLogin = document.getElementById("openLogin");
const closeLogin = document.getElementById("closeLogin");
const loginModal = document.getElementById("loginModal");


// Abrir modal
openLogin.addEventListener("click", () => {

    loginModal.classList.add("active");
    loginModal.setAttribute("aria-hidden", "false");

});


// Fechar modal
closeLogin.addEventListener("click", () => {

    loginModal.classList.remove("active");
    loginModal.setAttribute("aria-hidden", "true");

});


// ==========================================
// FECHAR MODAIS CLICANDO FORA
// ==========================================

window.addEventListener("click", (event) => {

    if (event.target === loginModal) {

        loginModal.classList.remove("active");
        loginModal.setAttribute("aria-hidden", "true");

    }

});


// ==========================================
// LOGIN DEMONSTRATIVO
// ==========================================

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", (event) => {

    // Impede o formulário de recarregar a página
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();


    // Verifica se os campos estão preenchidos
    if (email === "" || password === "") {

        loginMessage.textContent = "Preencha todos os campos.";
        loginMessage.className = "login-message error";

        return;
    }


    // Login apenas para demonstração
    if (
        email === "aluno@potencia.com" &&
        password === "potencia80"
    ) {

        loginMessage.textContent = "Login realizado com sucesso!";
        loginMessage.className = "login-message success";


        // Altera o botão de login
        openLogin.textContent = "Área do aluno";


        // Aguarda um pouco antes de fechar o modal
        setTimeout(() => {

            loginModal.classList.remove("active");
            loginModal.setAttribute("aria-hidden", "true");

            loginMessage.textContent = "";

            loginForm.reset();

        }, 1500);

    } else {

        loginMessage.textContent =
            "E-mail ou senha incorretos.";

        loginMessage.className = "login-message error";

    }

});


// ==========================================
// ABAS DO MÉTODO DE TREINAMENTO
// ==========================================

const methodTabs = document.querySelectorAll(".method-tab");
const tabContents = document.querySelectorAll(".tab-content");


methodTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        // Remove active de todas as abas
        methodTabs.forEach((item) => {

            item.classList.remove("active");

        });


        // Remove active de todos os conteúdos
        tabContents.forEach((content) => {

            content.classList.remove("active");

        });


        // Ativa a aba clicada
        tab.classList.add("active");


        // Descobre qual conteúdo deve ser exibido
        const tabId = tab.getAttribute("data-tab");

        const selectedContent = document.getElementById(tabId);


        if (selectedContent) {

            selectedContent.classList.add("active");

        }

    });

});


// ==========================================
// MODAL DE PRÉVIA DOS CONTEÚDOS
// ==========================================

const contentModal = document.getElementById("contentModal");
const closeContent = document.getElementById("closeContent");
const contentTitle = document.getElementById("contentTitle");
const contentDescription = document.getElementById("contentDescription");

const contentButtons = document.querySelectorAll(
    ".link-button"
);


// Conteúdos disponíveis
const contents = {

    musculacao: {

        title: "Musculação",

        description:
            "Nesta área você conhecerá os principais fundamentos da musculação, incluindo exercícios básicos, organização do treino, força, resistência e progressão."
    },

    funcional: {

        title: "Treinamento Funcional",

        description:
            "Conheça estratégias para trabalhar mobilidade, equilíbrio, coordenação, resistência e movimentos que podem melhorar sua capacidade física."
    },

    performance: {

        title: "Preparação Física",

        description:
            "Aprenda conceitos relacionados à preparação física, capacidade cardiorrespiratória, resistência, força e desenvolvimento do desempenho."
    }

};


// Abre o conteúdo correspondente
contentButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const contentName =
            button.getAttribute("data-content");

        const selectedContent =
            contents[contentName];


        if (selectedContent) {

            contentTitle.textContent =
                selectedContent.title;

            contentDescription.textContent =
                selectedContent.description;

            contentModal.classList.add("active");

            contentModal.setAttribute(
                "aria-hidden",
                "false"
            );

        }

    });

});


// Fecha o modal
closeContent.addEventListener("click", () => {

    contentModal.classList.remove("active");

    contentModal.setAttribute(
        "aria-hidden",
        "true"
    );

});


// Fecha modal clicando fora
window.addEventListener("click", (event) => {

    if (event.target === contentModal) {

        contentModal.classList.remove("active");

        contentModal.setAttribute(
            "aria-hidden",
            "true"
        );

    }

});


// ==========================================
// PRÉVIAS DAS AULAS
// ==========================================

const previewButtons = document.querySelectorAll(
    ".preview-button"
);


// Conteúdo das aulas demonstrativas
const lessons = {

    fundamentos: {

        title: "Aula 01 — Fundamentos do treinamento",

        description:
            "Nesta aula você conhecerá conceitos fundamentais para começar a estruturar um treinamento, entendendo frequência, intensidade, volume e execução dos exercícios."
    },

    rotina: {

        title: "Aula 02 — Organização da rotina",

        description:
            "Aprenda como organizar os seus treinos de acordo com sua rotina, disponibilidade e objetivos, buscando uma prática consistente."
    },

    progressao: {

        title: "Aula 03 — Progressão",

        description:
            "Entenda o princípio da progressão e como aumentar gradualmente o desafio dos exercícios para continuar evoluindo."
    }

};


previewButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const lessonName =
            button.getAttribute("data-lesson");

        const lesson =
            lessons[lessonName];


        if (lesson) {

            contentTitle.textContent =
                lesson.title;

            contentDescription.textContent =
                lesson.description;

            contentModal.classList.add("active");

            contentModal.setAttribute(
                "aria-hidden",
                "false"
            );

        }

    });

});


// ==========================================
// BOTÃO DE COMPRA
// ==========================================

const buyCourse = document.getElementById("buyCourse");


buyCourse.addEventListener("click", () => {

    alert(
        "Você será direcionado para o pagamento do curso Potência Training."
    );

});


// ==========================================
// SCROLL SUAVE
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);


        if (target) {

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});


// ==========================================
// ANIMAÇÃO AO APARECER NA TELA
// ==========================================

const animatedElements = document.querySelectorAll(
    ".feature-card, .training-card, .preview-item, .contact-card"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach((element) => {

    observer.observe(element);

});


// ==========================================
// TECLA ESC FECHA OS MODAIS
// ==========================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        loginModal.classList.remove("active");

        contentModal.classList.remove("active");

        loginModal.setAttribute(
            "aria-hidden",
            "true"
        );

        contentModal.setAttribute(
            "aria-hidden",
            "true"
        );

    }

});


// ==========================================
// MENSAGEM NO CONSOLE
// ==========================================

console.log(
    "Potência Training carregado com sucesso! 💪"
);