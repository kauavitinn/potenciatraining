const menuMobile = document.getElementById("menuMobile");
const nav = document.querySelector(".nav");
const loginModal = document.getElementById("loginModal");
const contentModal = document.getElementById("contentModal");
const openLogin = document.getElementById("openLogin");
const closeLogin = document.getElementById("closeLogin");
const closeContent = document.getElementById("closeContent");
const contentTitle = document.getElementById("contentTitle");
const contentDescription = document.getElementById("contentDescription");
const contentPoints = document.getElementById("contentPoints");
const videoFrame = document.getElementById("videoFrame");
const contentVideo = document.getElementById("contentVideo");

const presentations = {
    musculacao: {
        title: "Musculação",
        description: "Uma introdução aos fundamentos que dão segurança e direção ao treino de força.",
        video: "https://www.youtube-nocookie.com/embed/7_UsPk-VF50?rel=0",
        points: ["Execução e segurança", "Volume, intensidade e descanso", "Organização para iniciantes"]
    },
    funcional: {
        title: "Treinamento funcional",
        description: "Entenda como movimentos integrados desenvolvem mobilidade, equilíbrio, força e coordenação.",
        video: "https://www.youtube-nocookie.com/embed/OoNgKjWst4s?rel=0",
        points: ["Padrões de movimento", "Condicionamento global", "Adaptação à rotina"]
    },
    performance: {
        title: "Preparação física",
        description: "Conheça os princípios usados para planejar evolução, resistência e desempenho.",
        video: "https://www.youtube-nocookie.com/embed/I6hQzk_ua-4?rel=0",
        points: ["Volume e intensidade", "Progressão planejada", "Recuperação e desempenho"]
    },
    curso: {
        title: "Curso Potência Training",
        description: "Veja uma prévia dos princípios que orientam a jornada do básico à evolução consistente.",
        video: "https://www.youtube-nocookie.com/embed/I6hQzk_ua-4?rel=0",
        points: ["Fundamentos do treinamento", "Rotina e progressão", "Adaptação para diferentes níveis", "Material de apoio"]
    }
};

const lessons = {
    fundamentos: {
        title: "Aula 01 — Fundamentos",
        description: "Você aprenderá frequência, intensidade, volume, descanso e execução para estruturar um treino consciente.",
        points: ["Princípios essenciais", "Escolha de exercícios", "Erros mais comuns"]
    },
    rotina: {
        title: "Aula 02 — Organização da rotina",
        description: "Aprenda a distribuir os treinos conforme sua disponibilidade, experiência e objetivo.",
        points: ["Divisão semanal", "Consistência", "Recuperação"]
    },
    progressao: {
        title: "Aula 03 — Progressão",
        description: "Entenda como aumentar o desafio gradualmente sem perder qualidade de movimento.",
        points: ["Progressão de carga", "Registro do treino", "Quando ajustar o plano"]
    }
};

function openModal(modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const focusTarget = modal.querySelector("input, button");
    if (focusTarget) focusTarget.focus();
}

function stopVideo() {
    contentVideo.src = "";
    videoFrame.hidden = true;
}

function closeModal(modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (modal === contentModal) stopVideo();
}

function renderPoints(points = []) {
    contentPoints.innerHTML = points.map(point => `<li>${point}</li>`).join("");
}

function showPresentation(key) {
    const item = presentations[key];
    if (!item) return;
    contentTitle.textContent = item.title;
    contentDescription.textContent = item.description;
    renderPoints(item.points);
    contentVideo.src = item.video;
    videoFrame.hidden = false;
    openModal(contentModal);
}

menuMobile.addEventListener("click", () => {
    const active = nav.classList.toggle("active");
    menuMobile.setAttribute("aria-expanded", String(active));
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuMobile.setAttribute("aria-expanded", "false");
    });
});

openLogin.addEventListener("click", () => openModal(loginModal));
closeLogin.addEventListener("click", () => closeModal(loginModal));
closeContent.addEventListener("click", () => closeModal(contentModal));

document.querySelectorAll(".link-button").forEach(button => {
    button.addEventListener("click", () => showPresentation(button.dataset.content));
});

document.querySelectorAll(".video-trigger").forEach(button => {
    button.addEventListener("click", () => showPresentation(button.dataset.video));
});

document.querySelectorAll(".preview-button").forEach(button => {
    button.addEventListener("click", () => {
        const lesson = lessons[button.dataset.lesson];
        if (!lesson) return;
        contentTitle.textContent = lesson.title;
        contentDescription.textContent = lesson.description;
        renderPoints(lesson.points);
        stopVideo();
        openModal(contentModal);
    });
});

document.querySelectorAll(".method-tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".method-tab").forEach(item => item.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(item => item.classList.remove("active"));
        tab.classList.add("active");
        document.getElementById(tab.dataset.tab)?.classList.add("active");
    });
});

document.getElementById("loginForm").addEventListener("submit", event => {
    event.preventDefault();
    const message = document.getElementById("loginMessage");
    message.textContent = "Área demonstrativa: o acesso real será liberado aos alunos matriculados.";
    message.className = "login-message success";
});

document.getElementById("buyCourse").addEventListener("click", () => {
    document.getElementById("interestForm").scrollIntoView({ behavior: "smooth", block: "center" });
    document.getElementById("interestName").focus({ preventScroll: true });
});

document.getElementById("interestForm").addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    const signup = {
        name: form.elements.name.value.trim(),
        email: form.elements.email.value.trim(),
        createdAt: new Date().toISOString()
    };
    const signups = JSON.parse(localStorage.getItem("potenciaInterest") || "[]");
    const alreadyExists = signups.some(item => item.email.toLowerCase() === signup.email.toLowerCase());
    const message = document.getElementById("interestMessage");
    if (alreadyExists) {
        message.textContent = "Este e-mail já está na lista. Avisaremos você!";
        return;
    }
    signups.push(signup);
    localStorage.setItem("potenciaInterest", JSON.stringify(signups));
    message.textContent = `Tudo certo, ${signup.name}! Seu interesse foi registrado neste dispositivo.`;
    form.reset();
});

function animateNavigation(link, target) {
    link.classList.remove("nav-click");
    void link.offsetWidth;
    link.classList.add("nav-click");
    document.body.classList.add("nav-moving");

    window.setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        target.classList.remove("section-arrival");
        void target.offsetWidth;
        target.classList.add("section-arrival");
    }, 150);

    window.setTimeout(() => {
        document.body.classList.remove("nav-moving");
        link.classList.remove("nav-click");
        target.classList.remove("section-arrival");
    }, 850);
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;
        event.preventDefault();
        animateNavigation(link, target);
    });
});

window.addEventListener("click", event => {
    if (event.target === loginModal) closeModal(loginModal);
    if (event.target === contentModal) closeModal(contentModal);
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeModal(loginModal);
        closeModal(contentModal);
    }
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".feature-card, .training-card, .preview-item, .contact-card").forEach(element => observer.observe(element));
